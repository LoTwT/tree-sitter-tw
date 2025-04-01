package tree_sitter_tw_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_tw "github.com/lotwt/tree-sitter-tw/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_tw.Language())
	if language == nil {
		t.Errorf("Error loading Tw grammar")
	}
}
