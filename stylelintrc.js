module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-recommended",
    ],
    rules: {
      "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: [
            "tailwind",
            "apply",
            "variants",
            "responsive",
            "screen",
          ],
        },
      ],
    },
  }
  