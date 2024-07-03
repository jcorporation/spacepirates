import globals from "globals";
import pluginJs from "@eslint/js";

export default [
    pluginJs.configs.recommended,
    {
        files: [
            "_site/assets/js/data_names.js",
            "_site/assets/js/default.js",
            "_site/assets/js/zufallsgenerator.js",
            "_site/assets/js/zufallstabellen.js",
            "_site/sw.js"
        ],
        linterOptions: {
            reportUnusedDisableDirectives: "off"
        },
        languageOptions: {
            sourceType: "script"
        },
        rules: {
            "block-scoped-var": "error",
            "camelcase": "error",
            "default-case-last": "error",
            "eqeqeq": ["error", "always", {"null": "ignore"}],
            "no-alert": "error",
            "no-caller": "error",
            "no-console": "off",
            "no-eq-null": "error",
            "no-eval": "error",
            "no-implied-eval": "error",
            "no-invalid-this": "error",
            "no-redeclare": ["error", {"builtinGlobals": false}],
            "no-restricted-globals": "error",
            "no-restricted-properties": "error",
            "no-return-assign": "error",
            "no-self-compare": "error",
            "no-shadow": "error",
            "no-shadow-restricted-names": "error",
            "no-useless-concat": "error",
            "prefer-const": "error"
        }
    }
];
