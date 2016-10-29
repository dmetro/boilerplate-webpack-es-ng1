module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "ecmaFeatures": {
        "modules": true,
        "arrowFunctions": true,
        "classes": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "no-alert": "off",
        "indent": [
            "error",
            4
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};