module.exports = {
    "extends": "standard",
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        // override default options for rules from base configurations
        "comma-dangle": ["error", "never"],
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
        "no-console": "off",

        "quote-props": ["error", "always"],

        "space-before-function-paren": ["error", {
            "anonymous": "always",
            "named": "never",
            "asyncArrow": "always"
        }]
    }
};
