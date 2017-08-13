// MIT © 2017 azu
"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/textlint-rule-abbr-within-parentheses");
// ruleName, rule, { valid, invalid }
tester.run("textlint-rule-abbr-within-parentheses", rule, {
    valid: [
        "This is Open Source Software(OSS)",
        "これはOpen Source Software（OSS）なルールです",
        "JavaScript(JS)"
    ],
    invalid: [
        {
            text: "LTS（Long-Term Support）",
            output: "Long-Term Support（LTS）",
            errors: [
                {
                    message: "Abbreviation should be within parentheses.",
                    index: 9
                }
            ]

        },
        {
            text: "JS(JavaScript)",
            output: "JavaScript(JS)",
            errors: [
                {
                    message: "Abbreviation should be within parentheses.",
                    index: 0
                }
            ]
        },
        {
            text: "This rule is OSS(Open Source Software)",
            output: "This rule is Open Source Software(OSS)",
            errors: [
                {
                    message: "Abbreviation should be within parentheses.",
                    index: 14
                }
            ]
        },
        {
            text: "これはOSS（Open Source Software）なルールです",
            output: "これはOpen Source Software（OSS）なルールです",
            errors: [
                {
                    message: "Abbreviation should be within parentheses.",
                    index: 4
                }
            ]
        }

    ]
});