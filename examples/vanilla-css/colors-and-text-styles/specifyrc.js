const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

const publicPath = 'colors-and-text-styles/public';
const fontFormats = ['woff', 'woff2'];
const fontsFolder = 'assets/fonts';

module.exports = {
  repository: process.env.REPOSITORY,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: 'Design Tokens / Colors',
      path: `${publicPath}/styles/colors.css`,
      filter: {
        types: ['color'],
      },
      parsers: [
        {
          name: 'to-css-custom-properties',
        },
      ],
    },
    {
      name: 'Design Tokens / Fonts',
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
      name: 'Design Tokens / Import fonts',
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
    {
      name: 'Design Tokens / Text styles',
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
  ],
};
