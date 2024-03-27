package tree_sitter_cshtml_test

import (
	"testing"

	tree_sitter "github.com/smacker/go-tree-sitter"
	"github.com/tree-sitter/tree-sitter-cshtml"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_cshtml.Language())
	if language == nil {
		t.Errorf("Error loading Cshtml grammar")
	}
}
