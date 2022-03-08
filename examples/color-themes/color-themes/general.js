const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

const commonCssCustomPropertiesParser = [
  {
    name: 'sort-by',
    options: {
      keys: ['name'],
    },
  },
  {
    name: 'to-css-custom-properties',
  },
];

const depthsRule = [
  {
    name: 'Design Tokens / Depths',
    path: 'color-themes/assets/styles/depths.css',
    filter: {
      types: ['depth'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const durationsRule = [
  {
    name: 'Design Tokens / Durations',
    path: 'color-themes/assets/styles/durations.css',
    filter: {
      types: ['duration'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const measurementsRule = [
  {
    name: 'Design Tokens / Measurements',
    path: 'color-themes/assets/styles/measurements.css',
    filter: {
      types: ['measurement'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const textStylesRule = [
  {
    name: 'Design Tokens / TextStyles',
    path: 'color-themes/assets/styles/text-styles.css',
    filter: {
      types: ['textStyle'],
    },
    parsers: [
      {
        name: 'to-css-text-style',
        options: {
          exclude: ['color', 'text-indent', 'vertical-align', 'text-align'],
          relativeLineHeight: true,
          genericFamily: 'serif',
        },
      },
    ],
  },
  {
    name: 'Design Tokens / Fonts',
    path: 'color-themes/assets/fonts',
    filter: {
      types: ['font'],
    },
    parsers: [
      {
        name: 'convert-font',
        options: {
          formats: ['woff2', 'woff'],
          fileNameKey: ['fontPostScriptName'],
        },
      },
    ],
  },
];
textStylesRule.push({
  name: 'Design Tokens / Fonts',
  path: 'color-themes/assets/styles/fonts.css',
  filter: {
    types: ['font'],
  },
  parsers: [
    {
      name: 'to-css-font-import',
      options: {
        formats: textStylesRule[1].parsers[0].options.formats,
        fontsPath: '../fonts/',
      },
    },
  ],
});

const vectorsRule = [
  {
    name: 'Icons',
    path: 'color-themes/assets/icons',
    filter: {
      types: ['vector'],
    },
    parsers: [
      {
        name: 'svgo',
        options: {
          svgo: {
            plugins: [
              {
                removeDimensions: true,
              },
              {
                removeAttrs: {
                  attrs: '*:(fill|stroke)',
                },
              },
              {
                addAttributesToSVGElement: {
                  // 1. Don't know why, can't use the object format
                  // on the attributes prop.
                  // 2. The svg also has a focusable attribute set
                  // to false which prevents the icon itself
                  // from receiving focus in IE, because otherwise
                  // the button will have two Tab stops, which is
                  // not the expected or desired behavior.
                  attributes: ['width="1em"', 'height="1em"', 'focusable="false"'],
                },
              },
            ],
          },
        },
      },
    ],
  }
];

module.exports = {
  repository: process.env.REPOSITORY_GENERAL,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    ...depthsRule,
    ...durationsRule,
    ...measurementsRule,
    ...textStylesRule,
    ...vectorsRule,
  ],
};