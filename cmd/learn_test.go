package cmd

import (
	"bytes"
	"context"
	"strings"
	"testing"
	"time"

	"github.com/urfave/cli/v3"
)

func runLearnCommand(t *testing.T, args ...string) (string, error) {
	t.Helper()
	var stdout, stderr bytes.Buffer
	command := newLearnCommand()
	command.Writer, command.ErrWriter = &stdout, &stderr
	command.ExitErrHandler = func(context.Context, *cli.Command, error) {}
	err := command.Run(context.Background(), append([]string{"learn"}, args...))
	return stdout.String(), err
}

func TestLearnListsLessonsByGroup(t *testing.T) {
	out, err := runLearnCommand(t)
	if err != nil {
		t.Fatal(err)
	}
	for _, want := range []string{"How orbits work", "Reading the data", "Stories", "light-and-heat", "puerto-rico-goes-dark", "khonsu learn <lesson> --text"} {
		if !strings.Contains(out, want) {
			t.Errorf("list lacks %q:\n%s", want, out)
		}
	}
	if strings.Index(out, "light-and-heat") > strings.Index(out, "Stories") {
		t.Error("a lesson is listed under Stories")
	}
}

func TestLearnPrintsALessonWithSourcesAndAnswersLast(t *testing.T) {
	out, err := runLearnCommand(t, "--text", "orbit-decides-the-data")
	if err != nil {
		t.Fatal(err)
	}
	for _, want := range []string{"How orbit shapes the view", "Step 1 of 3", "Predict (question 1)", "Answers", "Sources", "[1] ESA, Types of orbits: https://"} {
		if !strings.Contains(out, want) {
			t.Errorf("text lacks %q:\n%s", want, out)
		}
	}
	if strings.Index(out, "MODIS covers Earth every 1 to 2 days") < strings.Index(out, "Answers") {
		t.Error("the answer is printed before the reader can predict")
	}
	if strings.Count(out, "https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits") != 1 {
		t.Error("a source is listed more than once")
	}
}

func TestLearnRejectsUnknownLessons(t *testing.T) {
	if _, err := runLearnCommand(t, "--text", "nope"); err == nil || !strings.Contains(err.Error(), "khonsu learn") {
		t.Fatalf("err = %v", err)
	}
	if _, err := runLearnCommand(t, "a", "b"); err == nil {
		t.Fatal("two lessons were accepted")
	}
}

func TestLearnOpensTheLessonInTheWebApp(t *testing.T) {
	opened := make(chan string, 1)
	original := openBrowser
	openBrowser = func(url string) error { opened <- url; return nil }
	t.Cleanup(func() { openBrowser = original })
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	done := make(chan error, 1)
	go func() {
		_, err := runLearnCommandContext(ctx, "--addr", "127.0.0.1:0", "--file", "../examples/tui-demo/iss.tle", "light-and-heat")
		done <- err
	}()
	select {
	case url := <-opened:
		if !strings.HasSuffix(url, "/?lesson=light-and-heat") {
			t.Errorf("opened %q", url)
		}
	case err := <-done:
		t.Fatalf("server stopped early: %v", err)
	case <-time.After(10 * time.Second):
		t.Fatal("browser was not opened")
	}
	cancel()
	<-done
}

func runLearnCommandContext(ctx context.Context, args ...string) (string, error) {
	var stdout, stderr lockedBuffer
	command := newLearnCommand()
	command.Writer, command.ErrWriter = &stdout, &stderr
	command.ExitErrHandler = func(context.Context, *cli.Command, error) {}
	err := command.Run(ctx, append([]string{"learn"}, args...))
	return stdout.String(), err
}
