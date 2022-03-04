const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

const publicPath = 'all-design-tokens-and-assets/public';
const fontFormats = ['woff', 'woff2'];
const fontsFolder = 'assets/fonts';

// Sort all design tokens by name before
// transforming them as CSS Custom Properties
const commonCssCustomPropertiesParsers = [
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

const colorRule = [
  {
    name: 'Design Tokens / Colors',
    path: `${publicPath}/styles/variables/colors.css`,
    filter: {
      types: ['color'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const borderRule = [
  {
    name: 'Design Tokens / Borders',
    path: `${publicPath}/styles/variables/borders.css`,
    filter: {
      types: ['border'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const depthRule = [
  {
    name: 'Design Tokens / Depths (Z-Index)',
    path: `${publicPath}/styles/variables/depths.css`,
    filter: {
      types: ['depth'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const durationRule = [
  {
    name: 'Design Tokens / Durations',
    path: `${publicPath}/styles/variables/durations.css`,
    filter: {
      types: ['duration'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const gradientRule = [
  {
    name: 'Design Tokens / Gradients',
    path: `${publicPath}/styles/variables/gradients.css`,
    filter: {
      types: ['gradient'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const measurementRule = [
  {
    name: 'Design Tokens / Measurements',
    path: `${publicPath}/styles/variables/measurements.css`,
    filter: {
      types: ['measurement'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const shadowRule = [
  {
    name: 'Design Tokens / Shadows',
    path: `${publicPath}/styles/variables/shadows.css`,
    filter: {
      types: ['shadow'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const textStyleRule = [
  {
    name: 'Design Tokens / TextStyles',
    path: `${publicPath}/styles/text-styles.css`,
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
];

const fontRule = [
  {
    name: 'Design Tokens / Export fonts',
    path: `${publicPath}/${fontsFolder}`,
    filter: {
      types: ['font'],
    },
    parsers: [
      {
        name: 'convert-font',
        options: {
          formats: fontFormats,
        },
      },
    ],
  },
  {
    name: 'Design Tokens / CSS font imports',
    path: `${publicPath}/styles/fonts.css`,
    filter: {
      types: ['font'],
    },
    parsers: [
      {
        name: 'to-css-font-import',
        options: {
          formats: fontFormats,
          fontsPath: `../${fontsFolder}`,
        },
      },
    ],
  },
];

const vectorsRule = [
  {
    name: 'Icons',
    path: `${publicPath}/assets/icons`,
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
  },
];

module.exports = {
  repository: process.env.REPOSITORY,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    ...colorRule,
    ...borderRule,
    ...depthRule,
    ...durationRule,
    ...gradientRule,
    ...measurementRule,
    ...shadowRule,
    ...textStyleRule,
    ...fontRule,
    ...vectorsRule,
  ],
};
