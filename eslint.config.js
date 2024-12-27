import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Adjust file extensions if needed
    languageOptions: {
      globals: {
        ...globals.browser, // Browser globals (e.g., `window`, `document`)
        ...globals.node,    // Node.js globals (e.g., `process`, `__dirname`)
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
