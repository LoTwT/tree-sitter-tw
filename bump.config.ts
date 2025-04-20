import { defineConfig } from "bumpp";

export default defineConfig({
  files: [
    "package.json",
    "Cargo.toml",
    "Cargo.lock",
    "CMakeLists.txt",
    "Makefile",
    "pyproject.toml",
    "tree-sitter.json",
  ],
});
