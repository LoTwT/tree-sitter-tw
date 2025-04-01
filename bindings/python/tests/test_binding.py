from unittest import TestCase

import tree_sitter
import tree_sitter_tw


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_tw.language())
        except Exception:
            self.fail("Error loading Tw grammar")
