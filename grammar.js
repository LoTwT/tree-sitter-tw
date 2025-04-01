/**
 * @file Tw grammar for tree-sitter
 * @author LoTwT <l709937065@gmail.com>
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

const CSS = require("tree-sitter-css/grammar");

module.exports = grammar(CSS, {
  name: "tw",
  rules: {
    import_statement: ($) =>
      seq(
        "@import",
        $._value,
        sep(",", $._query),
        optional($.prefix_option),
        ";"
      ),

    prefix_option: ($) => seq("prefix(", $.prefix_value, ")"),

    prefix_value: ($) => /[a-zA-Z_][a-zA-Z0-9_]*/,
  },
});

/**
 * Creates a rule to optionally match one or more of the rules separated by `separator`
 *
 * @param {RuleOrLiteral} separator
 *
 * @param {RuleOrLiteral} rule
 *
 * @returns {ChoiceRule}
 */
function sep(separator, rule) {
  return optional(sep1(separator, rule));
}

/**
 * Creates a rule to match one or more of the rules separated by `separator`
 *
 * @param {RuleOrLiteral} separator
 *
 * @param {RuleOrLiteral} rule
 *
 * @returns {SeqRule}
 */
function sep1(separator, rule) {
  return seq(rule, repeat(seq(separator, rule)));
}
