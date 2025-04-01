import { defineConfig } from "bumpp";
import { x } from "tinyexec";

export default defineConfig({
  execute(config) {
    x("tree-sitter", ["version", config.state.newVersion]);
  },
});
