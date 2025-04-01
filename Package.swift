// swift-tools-version:5.3

import Foundation
import PackageDescription

var sources = ["src/parser.c"]
if FileManager.default.fileExists(atPath: "src/scanner.c") {
    sources.append("src/scanner.c")
}

let package = Package(
    name: "TreeSitterTw",
    products: [
        .library(name: "TreeSitterTw", targets: ["TreeSitterTw"]),
    ],
    dependencies: [
        .package(url: "https://github.com/tree-sitter/swift-tree-sitter", from: "0.8.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterTw",
            dependencies: [],
            path: ".",
            sources: sources,
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterTwTests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterTw",
            ],
            path: "bindings/swift/TreeSitterTwTests"
        )
    ],
    cLanguageStandard: .c11
)
