package cmd

import (
	"context"
	"fmt"
	"io"
	"net/url"
	"strings"

	"github.com/Mohammed-Ashour/khonsu/internal/knowledge"
	"github.com/urfave/cli/v3"
)

func init() { RootCmd.Commands = append(RootCmd.Commands, newLearnCommand()) }

func newLearnCommand() *cli.Command {
	flags := append(cacheFlags(),
		&cli.BoolFlag{Name: "text", Usage: "Print the lesson in the terminal instead of opening the web app; works offline"},
		&cli.StringFlag{Name: "addr", Value: "127.0.0.1:8080", Usage: "HTTP bind address; port 0 picks a free port"},
		&cli.StringFlag{Name: "file", Usage: "Serve satellites from a local TLE or GP JSON file instead of live data"},
		&cli.BoolFlag{Name: "no-open", Usage: "Do not open a browser"},
	)
	return &cli.Command{
		Name:      "learn",
		Usage:     "List the guided lessons, or open one in the web app",
		ArgsUsage: "[lesson]",
		Category:  "UI",
		Description: "With no lesson, lists the lessons and stories. With a lesson, starts the web app on it,\n" +
			"or prints it with --text. Every sentence lists its sources.",
		Flags:  flags,
		Action: runLearn,
	}
}

func runLearn(ctx context.Context, c *cli.Command) error {
	base, err := knowledge.Load()
	if err != nil {
		return err
	}
	id := c.Args().First()
	if id == "" {
		listLessons(c.Writer, base.Lessons)
		return nil
	}
	if c.Args().Len() > 1 {
		return fmt.Errorf("learn takes one lesson; got %d", c.Args().Len())
	}
	lesson, ok := base.Lesson(id)
	if !ok {
		return fmt.Errorf("no lesson %q; run khonsu learn to list them", id)
	}
	if c.Bool("text") {
		printLesson(c.Writer, lesson)
		return nil
	}
	return serveWeb(ctx, c, "?lesson="+url.QueryEscape(lesson.ID))
}

func listLessons(w io.Writer, lessons []knowledge.Lesson) {
	groups := []struct {
		title string
		keep  func(knowledge.Lesson) bool
	}{
		{"How orbits work", func(l knowledge.Lesson) bool { return !l.Story && len(l.Orbits) > 0 }},
		{"Reading the data", func(l knowledge.Lesson) bool { return !l.Story && len(l.Orbits) == 0 }},
		{"Stories", func(l knowledge.Lesson) bool { return l.Story }},
	}
	width := 0
	for _, lesson := range lessons {
		width = max(width, len(lesson.ID))
	}
	for i, group := range groups {
		if i > 0 {
			fmt.Fprintln(w)
		}
		fmt.Fprintln(w, group.title)
		empty := true
		for _, lesson := range lessons {
			if group.keep(lesson) {
				fmt.Fprintf(w, "  %-*s  %s\n", width, lesson.ID, lesson.Title)
				empty = false
			}
		}
		if empty {
			fmt.Fprintln(w, "  None yet.")
		}
	}
	fmt.Fprintln(w, "\nOpen one with: khonsu learn <lesson>   Read it here: khonsu learn <lesson> --text")
}

// printLesson writes a lesson as plain text. Sources are numbered once, in order of first
// use, and questions are answered at the end so the reader can predict first.
func printLesson(w io.Writer, lesson knowledge.Lesson) {
	var sources []knowledge.Source
	refs := func(list []knowledge.Source) string {
		marks := make([]string, 0, len(list))
		for _, source := range list {
			n := 0
			for i, seen := range sources {
				if seen.URL == source.URL {
					n = i + 1
				}
			}
			if n == 0 {
				sources = append(sources, source)
				n = len(sources)
			}
			marks = append(marks, fmt.Sprintf("[%d]", n))
		}
		return strings.Join(marks, "")
	}
	fmt.Fprintln(w, lesson.Title)
	fmt.Fprintln(w, strings.Repeat("=", len([]rune(lesson.Title))))
	fmt.Fprintln(w, lesson.Summary)
	if lesson.When != "" || lesson.Where != "" {
		fmt.Fprintln(w, strings.Trim(lesson.When+" · "+lesson.Where, " ·"))
	}
	var answers []string
	for i, step := range lesson.Steps {
		heading := fmt.Sprintf("Step %d of %d", i+1, len(lesson.Steps))
		if step.Satellite != "" {
			heading += fmt.Sprintf(" · satellite NORAD %s", step.Satellite)
		}
		fmt.Fprintf(w, "\n%s\n", heading)
		for _, statement := range step.Text {
			fmt.Fprintf(w, "  %s %s\n", statement.Text, refs(statement.Sources))
		}
		if step.Chart != nil {
			fmt.Fprintf(w, "  Chart in the web app: %s\n", step.Chart.Title)
		}
		if step.Picture != nil || len(step.Pictures) > 0 || step.View != nil && *step.View != "" || len(step.Compare) > 0 {
			fmt.Fprintln(w, "  The web app shows a picture on the globe here.")
		}
		if step.Hint != "" {
			fmt.Fprintf(w, "  Try: %s\n", step.Hint)
		}
		if q := step.Question; q != nil {
			fmt.Fprintf(w, "  Predict (question %d): %s\n", len(answers)+1, q.Prompt)
			for j, choice := range q.Choices {
				fmt.Fprintf(w, "    %c) %s\n", 'a'+j, choice)
			}
			answers = append(answers, fmt.Sprintf("  %d. %c) %s\n     %s %s", len(answers)+1, 'a'+q.Answer, q.Choices[q.Answer], q.Explain.Text, refs(q.Explain.Sources)))
		}
	}
	if len(answers) > 0 {
		fmt.Fprintln(w, "\nAnswers")
		for _, answer := range answers {
			fmt.Fprintln(w, answer)
		}
	}
	fmt.Fprintln(w, "\nSources")
	for i, source := range sources {
		fmt.Fprintf(w, "  [%d] %s, %s: %s\n", i+1, source.Label, source.Title, source.URL)
	}
}
