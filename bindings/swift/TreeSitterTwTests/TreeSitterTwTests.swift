import XCTest
import SwiftTreeSitter
import TreeSitterTw

final class TreeSitterTwTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_tw())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Tw grammar")
    }
}
