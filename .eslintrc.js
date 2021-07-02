module.exports = {
    root: true,
    parser: "@babel/eslint-parser",
    parserOptions: {
        requireConfigFile: false
    },
    env: {
        "browser": true,
        "jest/globals": true
    },
    rules: {
        "semi": [ "error", "never" ],
        "quotes": [
            "error",
            "double",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "brace-style": [ "error", "1tbs" ],
        "block-spacing": [ "error", "always" ],
        "max-len": [
            "error",
            {
                "code": 80,
                "ignoreUrls": true
            }
        ],
        "no-console": [
            process.env.NODE_ENV === "production" ? "error" : "warn"
        ]
    },
    extends: [
        "eslint:recommended",
        "plugin:jest/recommended"
    ]
}