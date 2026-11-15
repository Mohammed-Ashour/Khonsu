# PR #69 deep review

## Findings

### PR69-001 [P2, medium, request changes] One shipped dependency still lacks its copyright and permission notice

Location: `internal/tools/notices/main.go:23-26,60-63`; generated result `THIRD_PARTY_NOTICES.md:504-510`. Confidence: confirmed.

A user downloads a Windows release. Its dependency graph includes `github.com/mattn/go-localereader`, but the new release notice contains only this sentence:

```go
"github.com/mattn/go-localereader": "This version ships no license file. The upstream repository, https://github.com/mattn/go-localereader, is published under the MIT License.",
```

```text
Windows binary -> go-localereader -> generated summary, not the MIT notice
```

**The problem:** The generator treats this exception as a complete notice and CI accepts it. The pinned v0.0.1 README explicitly says `## License` followed by `MIT`, but the summary reproduces neither a copyright attribution nor the permission notice. The upstream LICENSE now provides both, including `Copyright (c) 2022 Yasuhiro Matsumoto` and the requirement that the copyright and permission notice accompany copies or substantial portions of the software. A repository hyperlink is not that notice. README's new claim that the licenses are listed "in full" is therefore false for this entry.

**Impact:** The release-packaging compliance fix remains incomplete for an actual shipped dependency. This is not evidence that the project has no permission to use the dependency, nor a legal opinion about the old tag. It is a demonstrable missing-notice problem in this PR's new deliverable.

**What's needed:** Store a verified, attributed full license as an offline generator input, with provenance to an immutable upstream revision and confirmation that it covers the pinned code. Alternatively move to a dependency version carrying the proper notice. Do not fetch a moving branch during notice generation.

Minimal implementation shape, with the new text file populated from the verified license rather than a summary:

```go
import _ "embed"

//go:embed licenses/go-localereader.txt
var localeReaderLicense string

var missingLicense = map[string]string{
	"github.com/mattn/go-localereader": localeReaderLicense,
}
```

Evidence:
- `GOOS=windows GOARCH=amd64 CGO_ENABLED=0 go list -deps -f '{{.ImportPath}}' .` includes `github.com/mattn/go-localereader`.
- Primary pinned README: https://raw.githubusercontent.com/mattn/go-localereader/v0.0.1/README.md, lines 17-23. License is MIT; author is Yasuhiro Matsumoto.
- Primary current license: https://raw.githubusercontent.com/mattn/go-localereader/master/LICENSE, lines 3 and 12-13. Retrieved successfully. This is a moving-branch reference used for review, not a proposed build input.
- The exception and generated notice are unchanged at combined HEAD.

Verification needed: assert that every exception includes its full attribution and permission text; regenerate and inspect the Windows release's notice. The present regeneration check only proves reproducibility, not completeness.

### PR69-002 [P2, medium, request changes] The headline loses element-age warnings and hides its caveats on short screens

Location: `internal/webui/src/main.js:786-795`, especially added line 791; interacting existing rule `internal/webui/src/styles.css:225-228`. Confidence: confirmed by extracted-function execution and static CSS, not a browser run.

An observer uses old cached elements while leaving Now or Orbit open. Both `stale_elements` and `distant_epoch` reach the plan. The headline takes only the first message:

```javascript
element('p', 'headline-sub', state.plan.warnings?.length ? `${SIGHTING_CAVEAT} ${state.plan.warnings[0].message}` : SIGHTING_CAVEAT),
```

```text
planWarnings -> [stale_elements, distant_epoch]
Passes list -> both messages
headline    -> stale_elements only
short viewport -> headline-sub display:none -> neither warning nor sighting caveat
```

**The problem:** API warnings put the stale-cache warning first, followed by the age warning. With both present, the new headline never says how far the elements are from the prediction time. At viewport heights up to 520 px and widths up to 1040 px, the existing media query hides every `.headline-sub`, including this new safety text. A landscape phone such as 844 by 390 meets that rule. The no-window branch also shows none of the collected warnings, although uncertain elements affect negative predictions too.

**Impact:** The PR's stated goal that pass uncertainty reaches the headline at phone widths is not met. Users can read a confident window or no-window answer without the relevant qualification unless they open and inspect Passes. The Passes list itself does retain both warnings; this is not loss from the API or the stored plan.

**What's needed:** Render all retained warnings, keep the uncertainty text visible independently of optional headline details, and preserve element warnings for negative results. A small local correction is sufficient:

```diff
-      element('p', 'headline-sub', state.plan.warnings?.length ? `${SIGHTING_CAVEAT} ${state.plan.warnings[0].message}` : SIGHTING_CAVEAT),
+      element('p', 'headline-sub plan-warning', [SIGHTING_CAVEAT, ...(state.plan.warnings ?? []).map((warning) => warning.message)].join(' ')),
```

After the no-window `headline.append(...)`, also append each retained warning with `headline-sub plan-warning`. Keep the warning visible with a more specific CSS rule, for example:

```css
.headline-sub.plan-warning { display: block; }
```

Evidence and reproduction:
- `pkg/server/app.go:287-289,344-346` appends element-age warnings after loaded stale-cache warnings.
- Executed the actual extracted `renderHeadline` function from both the PR snapshot and combined HEAD in Node's `vm`, using a minimal element stand-in and two warnings. Both executions emitted `Showing saved elements.` but omitted `The elements are 22 days from this time.` The no-window result emitted only the name and negative answer.
- The exact low-height CSS rule exists in both snapshots. CSS inspection establishes the hiding condition; no computed-style or visual browser verification was performed.
- Current corresponding headline location is `internal/webui/src/main.js:835`; it still uses `warnings[0]`.

Verification needed: rendering tests for stale plus distant warnings, distant-only warnings, no-window warnings, and the 844 by 390 layout. The new helper test does not exercise these render paths.

### PR69-003 [P3, low, nonblocking] Generated source links for versioned Go modules return 404

Location: `internal/tools/notices/main.go:69`; generated `THIRD_PARTY_NOTICES.md:167,710`. Confidence: confirmed by HTTP retrieval.

A reader follows the new notice's provenance link for go-osc52/v2 or urfave/cli/v3. The generator assumes module import paths are repository URLs:

```go
if err := add(m.path+" "+m.version, "https://"+m.path, file); err != nil {
```

**The problem:** `https://github.com/aymanbagabas/go-osc52/v2` and `https://github.com/urfave/cli/v3` both return HTTP 404. `/v2` and `/v3` are Go module suffixes, not GitHub repository paths. Their exact-version LICENSE documents were independently retrieved and match the notice, so this is broken provenance navigation, not an unsupported license classification.

**Impact:** Two links in the new audit trail do not work. The embedded license text remains available.

**What's needed:** Use the actual repository URL, ideally an immutable version-specific LICENSE URL. For the present GitHub modules, derive the owner/repository root before constructing the origin:

```go
origin := "https://" + m.path
if strings.HasPrefix(m.path, "github.com/") {
	origin = "https://" + strings.Join(strings.Split(m.path, "/")[:3], "/")
}
if err := add(m.path+" "+m.version, origin, file); err != nil {
	return err
}
```

Use the same origin handling for exceptions if needed. Regenerate the notice. Test source-link construction for a module with a major-version suffix. Both bad links persist at combined HEAD.

## Decision

Request changes for PR69-001 and PR69-002. PR69-003 is nonblocking. No P0/P1 defect, changed orbital-calculation error, or new secret-exposure path was established. Passing tests and byte-consistent generated output do not cover the two required fixes.

## Inspected scope and revision drift

Repository: `Mohammed-Ashour/Khonsu`, PR https://github.com/Mohammed-Ashour/Khonsu/pull/69.

| Item | Observed value |
|---|---|
| Assigned head | `341cc2627156eddc534a37d9b10516ba0aa17155` |
| GitHub #69 head, via `gh pr view` | Same commit, branch `fix/review-trust` |
| GitHub #69 base | `main` |
| Local main and GitHub main, via `gh api .../branches/main` | Both `0dd203f8dd8142cec6d8d9db14a3a72251d3552c` |
| Merge base used | `0dd203f8dd8142cec6d8d9db14a3a72251d3552c` |
| GitHub #70 | Base `fix/review-trust`, head `5f7d32b6f749f2975a908f4136411f6f41234983` |
| GitHub #71 | Base `feat/data-lessons`, head `816a0f8b01ecc24aa20bf36985e30c07f942883c` |
| Current combined local HEAD | `e07a9b7b361a29a625d93409122e8b09993470a1`, branch `feat/learn-hub` |

There is no assigned-head or base drift for #69. The local combined HEAD is four commits beyond GitHub #71's observed head. It is not the exact GitHub #71 snapshot. Findings were attributed to #69's exact main-to-assigned-head delta and then checked for persistence locally.

The assigned delta changes 32 files, with 1,382 additions and 234 deletions, mostly the 926-line generated notice and rebuilt JavaScript. I inspected every changed human-written source, test, configuration and documentation line, enclosing files and relevant callers. CodeGraph was used first for structural exploration and callers; its current-tree results were not mistaken for historical source. Exact review used `git diff`, `git show`/the archived commit and comparison with current files.

Instructions and context read included the inherited AGENTS instructions, ARCHITECTURE.md, README, the extension, TUI, release, visibility and web-app guides, and the review, Skipper deep-review/base/rubric, CI/security/core-principles, show-me, unslop and UI-review skills. No project code, branches, GitHub comments or other reviewers' reports were changed. All installations, builds and scratch reproductions ran in an exported archive under `/tmp/khonsu-pr69.BdSXPX`, not a checkout or a worktree. Existing untracked project directories were left alone.

Generated/binary treatment: I did not review minified `internal/webui/dist/app.js` line by line or claim a review of every vendored Three.js statement. Instead I rebuilt the exact sources and compared the entire dist directory byte-for-byte. I inspected the new notice entries and compared their text to upstream primary licenses. The unchanged image files were viewed as archived illustrations, not live application output.

## Architecture and contract assessment

- `cmd/server.go -> server.Serve -> guardLoopback -> apiHandler -> readOnlySameSite -> API/static mux` preserves a small, explicit HTTP boundary. The default static directory is now empty as intended; opting into the legacy prototype remains possible. Public `NewHandler` remains the unwrapped handler API, so callers embedding it must still choose their own network policy.
- `ServeApp` reuses the same loopback guard. Moving the existing read-only/fetch-metadata checks into shared middleware does not change successful app request semantics. The API-only server intentionally does not apply the app's CSP to arbitrary opt-in static files. Method rejection occurs before dispatch; the host guard operates on the actual listener address.
- The same-site check rejects `Sec-Fetch-Site: cross-site`, not all possible untrusted clients. Missing fetch-metadata headers and non-loopback binding remain outside authentication protection. This limitation already exists in the reused app policy; it is not a newly discovered authentication guarantee.
- `catalog.downloadBytes` sets the fixed User-Agent on each new request. `feed.UserAgent` aliases the same constant without changing request, timeout, cancellation, cache-write or provider-gating ownership. Feed already depended on catalog, so this does not introduce a new package cycle.
- `refreshPlan` retains warnings with the successful plan; `planWarnings` deduplicates by code and deliberately filters routine sampling/visibility warnings. It does not alter the API envelope or numerical criteria. The defect is in headline presentation, not the separation of calculation and UI responsibilities.
- The new notice tool is a standalone build-time command using `go list`, not a runtime dependency or network fetch in the app. Its exception mechanism needs complete inputs and tests, but does not justify a new license framework. The archive includes the committed notice via GoReleaser. CI compares regeneration and runs vet.
- No propagator, units, UTC transport, orbital geometry, pass criteria, persistent schema or source-layer identifier changed. Native cancellation and listener shutdown paths remain intact. The changed shared packages passed focused race checks.

## Source audit

### Lesson and scientific-content boundary

PR #69 introduces no lessons, lesson citations, instrument descriptions, wavelength tables, resolution tables, scientific time-series graphs, historical imagery dates, layer numeric values or color-scale definitions. Those belong to later changes in the stack. There is therefore no lesson claim-to-source set to certify in this assigned delta. I did not treat current combined HEAD's later lessons as if #69 introduced them, and this report is not approval of those lessons or all of their citations.

The relevant changed claims are viewing-window terminology and qualifications, scene locations versus image display, local location storage and provider disclosure, and full third-party notices. Every URL appearing on an added/changed line was inventoried below, including repeated-but-unchanged URLs on those lines. Minifier-moved XML namespace strings were classified separately rather than treated as scientific citations.

### Retrieval method and passage checks

Initial Python HTTPS retrievals failed certificate verification because that Python installation could not locate a trusted issuer. Those failures are retained in `/tmp/pr69-evidence/audit.json`. I retried using system `curl` with normal certificate verification, not `-k`. All inventoried URLs were retrieved, with two HTTP 404 results noted below. Primary exact-version LICENSE documents were also retrieved, rather than accepting source domains or landing-page license badges as proof. Fetch-tool retrieval independently succeeded for the go-localereader README/LICENSE.

For the 22 modules with a packaged LICENSE, each fetched version-specific primary license exactly matched its corresponding generated notice text after CRLF and surrounding-whitespace normalization. Their copyright and redistribution/permission passages were inspected. The Go standard-library and Three.js texts also matched retrieved upstream LICENSE documents. This validates those reproduced texts, not an unlimited legal audit of every transitive embedded source file.

In the table, MIT support means the primary document contains the named copyright and the clause requiring the copyright and permission notice in copies/substantial portions. BSD support means its binary-redistribution clause requires reproduction of copyright, conditions and disclaimer. Apache support refers to the actual Version 2.0 text and redistribution section, not merely a badge.

| Cited URL on changed lines | Associated claim and primary evidence | Support verdict | Retrieval |
|---|---|---|---|
| https://www.space-track.org/auth/createAccount | README optional account setup. Retrieved page says `Create Account` and provides email/interests/personal-information registration fields. | Supports registration link. This page alone does not explicitly establish the retained word `free`; no new pricing claim introduced. | 200 |
| https://go.dev | Notice attributes Go standard library. [Primary LICENSE](https://raw.githubusercontent.com/golang/go/go1.23.12/LICENSE), lines 1, 7-15: Go Authors, BSD conditions. | Supported; complete text matches. Local generator actually ran on Go 1.23.1. | 200; primary 200 |
| https://github.com/Mohammed-Ashour/go-satellite-v2 | Pinned engine/module BSD attribution. [Primary](https://raw.githubusercontent.com/Mohammed-Ashour/go-satellite-v2/5e798e1d6f5b/LICENSE), lines 1-14: BSD 2-Clause, Joshua Ferrara 2017, binary notice condition. | Supported; text matches both copied engine and module notice. | 200; primary 200 |
| https://github.com/atotto/clipboard | v0.1.4 BSD notice. [Primary](https://raw.githubusercontent.com/atotto/clipboard/v0.1.4/LICENSE), lines 1, 7-15: Ato Araki 2013 and redistribution conditions. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/aymanbagabas/go-osc52/v2 | v2.0.1 MIT notice. [Primary](https://raw.githubusercontent.com/aymanbagabas/go-osc52/v2.0.1/LICENSE), lines 1-13: Ayman Bagabas 2022 and notice requirement. | License supported; cited origin broken, PR69-003. | 404; primary 200 |
| https://github.com/charmbracelet/bubbles | v0.18.0 MIT. [Primary](https://raw.githubusercontent.com/charmbracelet/bubbles/v0.18.0/LICENSE), lines 1-13: Charmbracelet 2020-2023 and notice requirement. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/charmbracelet/bubbletea | v0.25.0 MIT. [Primary](https://raw.githubusercontent.com/charmbracelet/bubbletea/v0.25.0/LICENSE), lines 1-13: Charmbracelet 2020-2023 and notice requirement. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/charmbracelet/lipgloss | v0.9.1 MIT. [Primary](https://raw.githubusercontent.com/charmbracelet/lipgloss/v0.9.1/LICENSE), lines 1-13: Charmbracelet 2021-2023 and notice requirement. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/containerd/console | Pinned `1ae8d489ac81` Apache 2.0. [Primary](https://raw.githubusercontent.com/containerd/console/1ae8d489ac81/LICENSE), sections 1-9 and containerd attribution. | Supported; complete text matches, including redistribution section 4. | 200; primary 200 |
| https://www.apache.org/licenses/ | Canonical license-family link in console's license. Retrieved Apache license listing; exact 2.0 text separately retrieved. | Legitimate source, sufficient together with exact license. | 200 |
| https://www.apache.org/licenses/LICENSE-2.0 | Canonical Apache 2.0 terms, notably section 4 requiring a copy of the license. | Supported; complete Apache text is present in console's notice. | 200 |
| https://github.com/lucasb-eyer/go-colorful | v1.2.0 MIT. [Primary](https://raw.githubusercontent.com/lucasb-eyer/go-colorful/v1.2.0/LICENSE), lines 1-5: Lucas Beyer 2013 and permission/notice condition. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/mattn/go-isatty | v0.0.18 MIT/Expat. [Primary](https://raw.githubusercontent.com/mattn/go-isatty/v0.0.18/LICENSE), lines 1-7: Yasuhiro Matsumoto, MIT and notice condition. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/mattn/go-localereader | v0.0.1 MIT. [Pinned README](https://raw.githubusercontent.com/mattn/go-localereader/v0.0.1/README.md), lines 17-23 says MIT and names author. [Current full license](https://raw.githubusercontent.com/mattn/go-localereader/master/LICENSE), lines 3, 12-13 supplies attribution and condition. | MIT classification supported; claim of full reproduction false. PR69-001. | 200; both primary documents 200 |
| https://github.com/mattn/go-runewidth | v0.0.15 MIT. [Primary](https://raw.githubusercontent.com/mattn/go-runewidth/v0.0.15/LICENSE), lines 1-13: Yasuhiro Matsumoto 2016 and notice requirement. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/muesli/ansi | Pinned `2e021307bc4b` MIT. [Primary](https://raw.githubusercontent.com/muesli/ansi/2e021307bc4b/LICENSE), lines 1-13: Christian Muehlhaeuser 2021 and notice requirement. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/muesli/cancelreader | v0.2.2 MIT. [Primary](https://raw.githubusercontent.com/muesli/cancelreader/v0.2.2/LICENSE), lines 1-13: Erik Geiser and Christian Muehlhaeuser 2022. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/muesli/reflow | v0.3.0 MIT. [Primary](https://raw.githubusercontent.com/muesli/reflow/v0.3.0/LICENSE), lines 1-13: Christian Muehlhaeuser 2019 and notice requirement. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/muesli/termenv | v0.15.2 MIT. [Primary](https://raw.githubusercontent.com/muesli/termenv/v0.15.2/LICENSE), lines 1-13: Christian Muehlhaeuser 2019 and notice requirement. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/rivo/uniseg | v0.4.6 MIT. [Primary](https://raw.githubusercontent.com/rivo/uniseg/v0.4.6/LICENSE.txt), lines 1-13: Oliver Kuederle 2019 and notice requirement. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/sahilm/fuzzy | Pinned `c48e322e2a8f` MIT. [Primary](https://raw.githubusercontent.com/sahilm/fuzzy/c48e322e2a8f/LICENSE), lines 1-13: Sahil Muthoo 2017 and notice requirement. | Supported; complete text matches. | 200; primary 200 |
| https://github.com/urfave/cli/v3 | v3.1.1 MIT. [Primary](https://raw.githubusercontent.com/urfave/cli/v3.1.1/LICENSE), lines 1-13: urfave/cli maintainers 2023 and notice requirement. | License supported; cited origin broken, PR69-003. | 404; primary 200 |
| https://golang.org/x/sync | v0.1.0 BSD. [Primary](https://raw.githubusercontent.com/golang/sync/v0.1.0/LICENSE), lines 1, 7-15: Go Authors and redistribution conditions. | Supported; complete text matches. | 200; primary 200 |
| https://golang.org/x/sys | v0.12.0 BSD. [Primary](https://raw.githubusercontent.com/golang/sys/v0.12.0/LICENSE), lines 1, 7-15: Go Authors and redistribution conditions. | Supported; complete text matches. | 200; primary 200 |
| https://golang.org/x/term | v0.6.0 BSD. [Primary](https://raw.githubusercontent.com/golang/term/v0.6.0/LICENSE), lines 1, 7-15: Go Authors and redistribution conditions. | Supported; complete text matches. | 200; primary 200 |
| https://golang.org/x/text | v0.3.8 BSD. [Primary](https://raw.githubusercontent.com/golang/text/v0.3.8/LICENSE), lines 1, 7-15: Go Authors and redistribution conditions. | Supported; complete text matches. | 200; primary 200 |
| https://gopkg.in/yaml.v3 | v3.0.1 mixed MIT/Apache. [Primary](https://raw.githubusercontent.com/go-yaml/yaml/v3.0.1/LICENSE), opening text distinguishes ported libyaml files from remaining files, then gives Kirill Simonov and Canonical notices. | Supported; complete module text matches. Full Apache terms are elsewhere in same notice document. | 200; primary 200 |
| http://www.apache.org/licenses/LICENSE-2.0 | Canonical terms referenced by YAML's Apache notice. | Supported; redirects to HTTPS exact license. | 200 after redirect |
| https://github.com/Mohammed-Ashour/Khonsu | Fixed User-Agent project identifier, not a scientific citation. | Correct project destination; code uses the shared string. | 200 |
| http://www.w3.org/1999/xhtml | Minifier-moved XHTML namespace identifier, not a factual source. | Not a lesson citation or app network fetch. | 200 after redirect |
| http://www.w3.org/2000/svg | Minifier-moved SVG namespace identifier, not a factual source. | Not a lesson citation or app network fetch. | 200 after redirect |

Additional primary inputs and claims without newly added citation URLs:

| Claim/input | Evidence checked | Verdict/qualification |
|---|---|---|
| Three.js full MIT notice | https://raw.githubusercontent.com/mrdoob/three.js/r186/LICENSE, lines 1-13, `Copyright © 2010-2026 three.js authors` and inclusion condition. Fetched 200 and exactly matches the notice and installed 0.186.1 package's license. | Supported. The banner also retains existing Three.js attribution. |
| GCAT downloads one whole table, then finds the requested object locally | `gcat.Lookup` fetches the fixed `satcat.tsv` URL and calls `find(body, id)` afterwards. Retrieved https://www.planet4589.org/space/gcat/tsv/cat/satcat.tsv, 200, header begins `#JCAT\tSatcat\tLaunch_Tag...` and contains many objects. | Supported for not sending the selected NORAD ID. "Never learns" should not be read as hiding IP address or access timing. The review inspected the header and sample rows, not the scientific validity of every catalog row. |
| Scenes are Sentinel-2/Landsat acquisition metadata, not pictures displayed by this feature | https://element84.com/earth-search/, 200. Provider says `including the entire USGS Landsat Collection 2 and ESA Sentinel-2 catalogs`; describes central STAC search and standardized metadata. `earthsearch.Recent` queries the platform and collection; `parseScenes` returns timestamp/cloud/bbox midpoint, no image data; dossier click sends that point to globe. | Supported for this feature's scope. Provider supports other collections too; the app is intentionally restricted to five catalog IDs. Grouped rows represent the newest tile's bbox midpoint, not a footprint or centroid of every tile in a group. |
| Window means sunlit, dark sky and elevation at least 10 degrees | `orbit.DefaultVisibility`, `pkg/server/app.go:308-346`, `docs/visibility.md` criteria. No changed science formula. `estimated_visibility` explicitly excludes weather/brightness/obstructions. | Supported as the app's geometric definition, not proof of optical visibility. Dark threshold is -6 degrees by default. |
| Browser location differs from terminal setup location; cloud requests are opt-in | `readStoredObserver`, `saveObserver`, URL-state serialization, `checkClouds`, terminal setup/settings path, and `openmeteo.Clouds`. Outbound coordinates are rounded to one decimal degree. | Local/browser and opt-in claims supported. "About 10 km" is a rough grid description, not a guaranteed privacy radius: 0.1 degree longitude shrinks with latitude. Existing approximation, not a new rounding algorithm. |
| Every archive includes the notice | `.goreleaser.yaml:24-33` adds it to archive files. | Configuration supports claim; an actual release archive was not built or published during review. |

Missing primary material required for this delta: the full attributed license input for go-localereader, with applicability/provenance resolved as in PR69-001. No new wavelength, instrument, chronology, resolution, coverage or historical-image claims require additional scientific primary documents in #69. The later stack's sources remain a separate review obligation.

## Graph, map and readability review

- No graph/diagram implementation changes in #69. The affected scientific visual is the existing pass sky plot whose terminology changes from visible to viewing window. I inspected `sky.js` and its consumer: azimuth 0 maps upward, 90 right, 180 down and 270 left; the rim is 0 degrees elevation, the center 90, and rings are labeled 30 and 60 degrees. This is a consistent north-up polar sky diagram, not a geographic map projection.
- The white highlight uses the selected visible interval's timestamps, and the rest of the path uses the satellite color. The plot has an SVG image role and a title with peak elevation/direction. Limitations remain: no textual legend inside the plot explains white versus the satellite color; the sampled highlight does not interpolate exact interval endpoints; the accessible title does not describe the complete path or window boundaries. These behaviors predate #69 and are caveats, not new blockers.
- Scene coordinates pass as latitude/longitude degrees, with the scene's bbox midpoint used for the point. Grouping does not make a geographic footprint. I did not validate every live scene, dateline-crossing feature or upstream polygon. No image date, wavelength, instrument resolution, quantitative layer legend or color-scale claim changed here.
- Viewed the archived `assets/web-sees.jpg` and `assets/web-app.jpg`. The scene screenshot's blue point near 7.1 N, 19.7 E is geographically plausible in central Africa. Both screenshots still display the old Sees/Visible vocabulary and predate the new disclaimer. They are not evidence that this PR's new UI was visually tested. Updating them is nonblocking documentation follow-up.
- Static CSS confirms body/qualification text wraps and that the new pass-summary caveat has its own block. It also establishes the low-height headline defect in PR69-002. I did not perform browser, WebGL, screen-reader, color-contrast, overlap or live-provider visual verification, and did not launch an app server.
- The requested UI-review skill's scanner ran on the archived sources. It reported only the existing generic-font rule at `styles.css:13`, score 2, and no high-severity result. I did not elevate a pre-existing font preference into a defect.

## Verification

All commands below ran against the exact archived assigned head unless explicitly marked current-tree comparison. No prior review result was assumed.

| Check | Observed result |
|---|---|
| `gh pr view 69/70/71 --repo Mohammed-Ashour/Khonsu ...`; `gh api repos/Mohammed-Ashour/Khonsu/branches/main` | Revision results recorded above. |
| `git diff --check main...341cc2627156eddc534a37d9b10516ba0aa17155` | Passed, no output. |
| `go test ./...` | Passed all packages. Tool package has no tests. Log `/tmp/pr69-go-test.log`. |
| `go vet ./...` | Passed, no output. |
| `go test -race ./pkg/server ./internal/catalog ./internal/sources/feed` | All three passed. |
| `npm ci --no-audit --no-fund` in archived `internal/webui` | Installed three packages successfully. |
| `npm test` there | 101 passed, 0 failed, 0 skipped. Log `/tmp/pr69-web-test.log`. |
| `npm run build`; `diff -qr /tmp/pr69-dist-original dist` | Build passed; no byte differences across bundle, HTML or CSS. |
| `go run ./internal/tools/notices > /tmp/pr69-notices.generated.md`; `diff -u THIRD_PARTY_NOTICES.md /tmp/pr69-notices.generated.md` | Passed; no differences. |
| `go list -deps` module unions for Linux/macOS/Windows, amd64/arm64, CGO disabled | 23 modules in complete six-target union; same 23 as generator's host-architecture three-OS union. No current architecture-specific module omission demonstrated. |
| Exact-version upstream license comparisons | All 22 packaged module licenses matched generated entries; Go and Three.js matched too. One summary-only exception remains. |
| HTTP source inventory | 31 unique URLs on changed lines retrieved with curl; two cited origins returned 404, other 29 returned 200, some after redirects. Additional primary documents retrieved separately. Python CA failure and curl retry statuses retained in scratch evidence. |
| `node /tmp/pr69-repro.mjs` | Reproduced missing headline age warning and negative-result warnings on both assigned snapshot and current combined HEAD; static low-height CSS match true for both. |
| UI scanner on archive | Completed; one pre-existing medium font-style signal only. |

Environment: Go 1.23.1 darwin/arm64 and Node v22.22.3. GoReleaser release execution, actual Windows/Linux/macOS binaries, Go 1.26 release-toolchain checks, live app/browser runs and later-PR lesson/source validation were not performed. Their absence is not represented as a passing result.

Test gaps worth closing with the fixes are complete exception-license validation, versioned-module provenance URLs, real headline rendering with multiple/no-window warnings, and short-height warning visibility. Existing server tests cover POST rejection, cross-site GET rejection and no default files; existing app tests cover middleware/host behavior. The extracted shared listener wrapper has no new direct test proving it activates for a loopback listener and stays off for a wildcard one. That is a coverage gap, not an observed functional failure.
