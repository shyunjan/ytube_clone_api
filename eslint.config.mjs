// @ts-check
import { defineConfig } from "eslint/config";
// import { includeIgnoreFile } from '@eslint/compat';
// import { fileURLToPath } from 'node:url';
import jsEslint from "@eslint/js";
import tsEslint from "typescript-eslint";
// import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

// const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default defineConfig([
  {
    files: ["**/*.ts", "**/*.js"],
    ignores: [
      "eslint.config.mjs",
      // includeIgnoreFile(gitignorePath),
    ],
    extends: [
      jsEslint.configs.recommended,
      ...tsEslint.configs.recommendedTypeChecked,
      // eslintConfigPrettier,
      eslintPluginPrettierRecommended,
    ],
    languageOptions: {
      globals: { ...globals.node, ...globals.jest },
      sourceType: "commonjs",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // typescript-eslint strongly recommend that you do not use the no-undef lint rule on TypeScript projects.
      // see: https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
      "no-undef": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-floating-promises": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "prettier/prettier": ["error", { endOfLine: "auto" }],
    },
  },
]);
