/**
 * @file Tw grammar for tree-sitter
 * @author LoTwT <l709937065@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "tw",

  rules: {
    // TODO: add the actual grammar rules
    source_file: $ => "hello"
  }
});
