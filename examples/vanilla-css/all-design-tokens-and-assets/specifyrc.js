const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

const designDataPath = 'all-design-tokens/assets';

// Sort all design tokens by name before
// transforming them as CSS Custom Properties
const commonCssCustomPropertiesParser = [
  {
    name: 'to-css-custom-properties',
  },
];

const colorsRule = [
  {
    name: 'Design Tokens / Colors',
    path: `${designDataPath}/styles/variables/colors.css`,
    filter: {
      types: ['color'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const bordersRule = [
  {
    name: 'Design Tokens / Borders',
    path: `${designDataPath}/styles/variables/borders.css`,
    filter: {
      types: ['border'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const depthsRule = [
  {
    name: 'Design Tokens / Depths (Z-Index)',
    path: `${designDataPath}/styles/variables/depths.css`,
    filter: {
      types: ['depth'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const durationsRule = [
  {
    name: 'Design Tokens / Durations',
    path: `${designDataPath}/styles/variables/durations.css`,
    filter: {
      types: ['duration'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const gradientsRule = [
  {
    name: 'Design Tokens / Gradients',
    path: `${designDataPath}/styles/variables/gradients.css`,
    filter: {
      types: ['gradient'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const measurementsRule = [
  {
    name: 'Design Tokens / Measurements',
    path: `${designDataPath}/styles/variables/measurements.css`,
    filter: {
      types: ['measurement'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const shadowsRule = [
  {
    name: 'Design Tokens / Shadows',
    path: `${designDataPath}/styles/variables/shadows.css`,
    filter: {
      types: ['shadow'],
    },
    parsers: commonCssCustomPropertiesParser,
  },
];

const textStylesRule = [
  {
    name: 'Design Tokens / TextStyles',
    path: `${designDataPath}/styles/variables/textstyles.css`,
    filter: {
      types: ['textStyle'],
    },
    parsers: [
      {
        name: 'to-css-text-style',
        options: {
          exclude: ['color', 'text-indent', 'vertical-align', 'text-align'],
          relativeLineHeight: true,
          fontFamilyFormat: 'camelCase',
          genericFamily: 'serif',
        },
      },
    ],
  },
  {
    name: 'Design Tokens / Fonts',
    path: 'assets/fonts',
    filter: {
      types: ['font'],
    },
    parsers: [
      {
        name: 'convert-font',
        options: {
          formats: ['woff2', 'woff'],
          fileNameKey: ['fontFamily', 'fontWeight'],
          fileNameFormat: 'kebabCase',
        },
      },
    ],
  },
];

textStylesRule.push({
  name: 'Design Tokens / Fonts',
  path: `${designDataPath}/styles/variables/fonts.css`,
  filter: {
    types: ['font'],
  },
  parsers: [
    {
      name: 'to-css-font-import',
      // Import our font files with the same
      // properties (formats, path and file name format)
      options: {
        formats: textStylesRule[1].parsers[0].options.formats,
        fontsPath: path.relative(
          `${designDataPath}/styles/variables/fonts.css`,
          textStylesRule[1].path,
        ),
        fontFamilyTransform: textStylesRule[1].parsers[0].options.fileNameFormat,
      },
    },
  ],
});

module.exports = {
  repository: process.env.REPOSITORY,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    ...colorsRule,
    ...bordersRule,
    ...depthsRule,
    ...durationsRule,
    ...gradientsRule,
    ...measurementsRule,
    ...shadowsRule,
    ...textStylesRule,
  ],
};
