const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

const publicPath = 'public';
const fontFormats = ['woff', 'woff2', 'otf'];
const fontsFolderName = 'fonts';

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

const colorRules = [
  {
    name: 'Design Tokens / Colors',
    path: `${publicPath}/styles/variables/colors.css`,
    filter: {
      types: ['color'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const borderRules = [
  {
    name: 'Design Tokens / Borders',
    path: `${publicPath}/styles/variables/borders.css`,
    filter: {
      types: ['border'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const depthRules = [
  {
    name: 'Design Tokens / Depths (Z-Index)',
    path: `${publicPath}/styles/variables/depths.css`,
    filter: {
      types: ['depth'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const durationRules = [
  {
    name: 'Design Tokens / Durations',
    path: `${publicPath}/styles/variables/durations.css`,
    filter: {
      types: ['duration'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const gradientRules = [
  {
    name: 'Design Tokens / Gradients',
    path: `${publicPath}/styles/variables/gradients.css`,
    filter: {
      types: ['gradient'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const measurementRules = [
  {
    name: 'Design Tokens / Measurements',
    path: `${publicPath}/styles/variables/measurements.css`,
    filter: {
      types: ['measurement'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const shadowRules = [
  {
    name: 'Design Tokens / Shadows',
    path: `${publicPath}/styles/variables/shadows.css`,
    filter: {
      types: ['shadow'],
    },
    parsers: commonCssCustomPropertiesParsers,
  },
];

const textStyleRules = [
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

const fontRules = [
  {
    name: 'Design Tokens / Export fonts',
    path: `${publicPath}/${fontsFolderName}`,
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
          fontsPath: `../${fontsFolderName}`,
        },
      },
    ],
  },
];

module.exports = {
  repository: process.env.REPOSITORY,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    ...colorRules,
    ...borderRules,
    ...depthRules,
    ...durationRules,
    ...gradientRules,
    ...measurementRules,
    ...shadowRules,
    ...textStyleRules,
    ...fontRules,
  ],
};
