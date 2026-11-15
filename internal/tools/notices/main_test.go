package main

import (
	"crypto/sha256"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
)

func TestRepositoryURL(t *testing.T) {
	for _, tt := range []struct{ modulePath, want string }{
		{"github.com/aymanbagabas/go-osc52/v2", "https://github.com/aymanbagabas/go-osc52"},
		{"github.com/urfave/cli/v3", "https://github.com/urfave/cli"},
		{"github.com/owner/repo/v12", "https://github.com/owner/repo"},
		{"github.com/owner/repo/submodule/v2", "https://github.com/owner/repo"},
		{"github.com/owner/v2", "https://github.com/owner/v2"},
		{"github.com/mattn/go-runewidth", "https://github.com/mattn/go-runewidth"},
		{"golang.org/x/sys", "https://golang.org/x/sys"},
		{"gopkg.in/yaml.v3", "https://gopkg.in/yaml.v3"},
	} {
		t.Run(tt.modulePath, func(t *testing.T) {
			if got := repositoryURL(tt.modulePath); got != tt.want {
				t.Fatalf("repositoryURL(%q) = %q, want %q", tt.modulePath, got, tt.want)
			}
		})
	}
}

func TestModuleLicenseURL(t *testing.T) {
	for _, tt := range []struct{ path, version, file, want string }{
		{"github.com/aymanbagabas/go-osc52/v2", "v2.0.1", "LICENSE", "https://github.com/aymanbagabas/go-osc52/blob/v2.0.1/LICENSE"},
		{"github.com/urfave/cli/v3", "v3.1.1", "LICENSE", "https://github.com/urfave/cli/blob/v3.1.1/LICENSE"},
		{"github.com/rivo/uniseg", "v0.4.6", "LICENSE.txt", "https://github.com/rivo/uniseg/blob/v0.4.6/LICENSE.txt"},
		{"github.com/owner/repo", "v0.0.0-20220822084737-6bae6c923850", "LICENSE", "https://github.com/owner/repo/blob/6bae6c923850/LICENSE"},
		{"github.com/owner/repo", "v1.2.4-0.20220822084737-6bae6c923850", "LICENSE", "https://github.com/owner/repo/blob/6bae6c923850/LICENSE"},
		{"github.com/owner/repo", "v1.2.3-pre.0.20220822084737-6bae6c923850+incompatible", "LICENSE", "https://github.com/owner/repo/blob/6bae6c923850/LICENSE"},
		{"github.com/owner/repo", "v1.2.3-beta-6bae6c923850", "LICENSE", "https://github.com/owner/repo/blob/v1.2.3-beta-6bae6c923850/LICENSE"},
		{"github.com/owner/repo/v2", "v2.0.0+incompatible", "LICENSE", "https://github.com/owner/repo/blob/v2.0.0/LICENSE"},
		// Submodule tags and parent-license placement require repository-specific evidence.
		{"github.com/owner/repo/submodule/v2", "v2.0.0", "LICENSE", "https://github.com/owner/repo"},
		{"github.com/owner/repo", "", "LICENSE", "https://github.com/owner/repo"},
		{"golang.org/x/sys", "v0.12.0", "LICENSE", "https://golang.org/x/sys"},
		{"gopkg.in/yaml.v3", "v3.0.1", "LICENSE", "https://gopkg.in/yaml.v3"},
	} {
		t.Run(tt.path+"@"+tt.version, func(t *testing.T) {
			m := module{path: tt.path, version: tt.version}
			if got := moduleLicenseURL(m, filepath.Join("cache", tt.file)); got != tt.want {
				t.Fatalf("moduleLicenseURL(%+v, %q) = %q, want %q", m, tt.file, got, tt.want)
			}
		})
	}
}

func TestMissingLicenseExceptionsAreComplete(t *testing.T) {
	// SHA-256 of the full, unmodified upstream LICENSE at 6bae6c923850ab5e0da9f36f69811ffe17064228.
	// A summary, missing attribution, truncated permission or disclaimer must fail.
	verified := map[string]string{
		"github.com/mattn/go-localereader": "dceede03550621e65ec7b79fcba87cf6dbb9d31132a8ae71a8fe8ceec0af7da3",
	}
	if len(missingLicense) != len(verified) {
		t.Fatal("every exception needs an independently verified full-license digest")
	}
	for path, exception := range missingLicense {
		t.Run(path, func(t *testing.T) {
			want, ok := verified[path]
			if !ok {
				t.Fatal("no verified license digest for exception")
			}
			if got := fmt.Sprintf("%x", sha256.Sum256([]byte(exception.text))); got != want {
				t.Fatalf("full upstream license digest = %s, want %s", got, want)
			}
			if exception.version != "v0.0.1" {
				t.Fatal("exception must stay bound to the inspected version")
			}
			for _, evidence := range []string{
				"https://github.com/mattn/go-localereader/blob/6bae6c923850ab5e0da9f36f69811ffe17064228/LICENSE",
				"https://github.com/mattn/go-localereader/blob/6338b4c69507fb1f9edba3db33882a8e9ab9bfa8/README.md",
				"https://github.com/mattn/go-localereader/compare/6338b4c69507fb1f9edba3db33882a8e9ab9bfa8...6bae6c923850ab5e0da9f36f69811ffe17064228",
				"Every existing file, including all Go sources, is unchanged.",
			} {
				if !strings.Contains(exception.origin, evidence) {
					t.Errorf("missing immutable provenance or applicability basis %q", evidence)
				}
			}
			// An absent module directory proves that the exception is embedded,
			// not read from a module cache or fetched during notice construction.
			n, err := moduleNotice(module{path, exception.version, filepath.Join(t.TempDir(), "absent")})
			if err != nil {
				t.Fatal(err)
			}
			if n.title != path+" "+exception.version || n.origin != exception.origin || n.text != strings.TrimSpace(exception.text) {
				t.Fatal("generated notice did not retain its full license and provenance")
			}
		})
	}
}

func TestModuleNoticeRejectsUnverifiedExceptionVersion(t *testing.T) {
	for _, version := range []string{"v0.0.2", "v0.0.0-20220822084737-6bae6c923850", ""} {
		_, err := moduleNotice(module{"github.com/mattn/go-localereader", version, t.TempDir()})
		if err == nil || !strings.Contains(err.Error(), "verified only for v0.0.1") {
			t.Fatalf("version %q: expected provenance error, got %v", version, err)
		}
	}
}

func TestModuleNoticeRequiresLicenseForOtherModules(t *testing.T) {
	_, err := moduleNotice(module{"github.com/owner/unknown", "v1.0.0", t.TempDir()})
	if err == nil || !strings.Contains(err.Error(), "no license file") {
		t.Fatalf("expected missing-license error, got %v", err)
	}
}

func TestBinaryModulesDisablesNetworkAndModuleEdits(t *testing.T) {
	if runtime.GOOS == "windows" {
		t.Skip("fake go executable uses a POSIX shell")
	}
	dir := t.TempDir()
	const fakeGo = `#!/bin/sh
set -eu
[ "$GOPROXY" = off ]
[ "$GONOPROXY" = none ]
[ "$GOSUMDB" = off ]
[ "$GOTOOLCHAIN" = local ]
[ "$CGO_ENABLED" = 0 ]
[ "$1" = list ]
[ "$2" = -mod=readonly ]
case "$GOOS" in linux|darwin|windows) ;; *) exit 1 ;; esac
printf 'github.com/owner/%s\tv1.0.0\t/cache/%s\n' "$GOOS" "$GOOS"
`
	if err := os.WriteFile(filepath.Join(dir, "go"), []byte(fakeGo), 0o700); err != nil {
		t.Fatal(err)
	}
	t.Setenv("PATH", dir+string(os.PathListSeparator)+os.Getenv("PATH"))
	// Even callers configured for direct private-module downloads must stay offline.
	t.Setenv("GONOPROXY", "*")
	t.Setenv("GOPROXY", "https://proxy.invalid")
	t.Setenv("GOSUMDB", "sum.invalid")
	t.Setenv("GOTOOLCHAIN", "auto")
	modules, err := binaryModules()
	if err != nil {
		t.Fatal(err)
	}
	if len(modules) != 3 {
		t.Fatalf("got %d modules, want all three release targets", len(modules))
	}
	for i, target := range []string{"darwin", "linux", "windows"} {
		if want := (module{"github.com/owner/" + target, "v1.0.0", "/cache/" + target}); modules[i] != want {
			t.Fatalf("module %d = %+v, want %+v", i, modules[i], want)
		}
	}
}

func TestModuleNoticeReadsInstalledLicense(t *testing.T) {
	dir := t.TempDir()
	const license = "Copyright original author\nPermission and disclaimer remain unchanged."
	if err := os.WriteFile(filepath.Join(dir, "LICENSE"), []byte(license+"\n"), 0o600); err != nil {
		t.Fatal(err)
	}
	n, err := moduleNotice(module{"github.com/owner/repo/v3", "v3.1.0", dir})
	if err != nil {
		t.Fatal(err)
	}
	if n.title != "github.com/owner/repo/v3 v3.1.0" || n.origin != "https://github.com/owner/repo/blob/v3.1.0/LICENSE" || n.text != license {
		t.Fatalf("unexpected notice: %+v", n)
	}
}
