const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

module.exports = {
  repository: process.env.REPOSITORY,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: 'Design Tokens / Colors',
      path: 'public/styles/colors.css',
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
      name: 'Design Tokens / Text styles',
      path: 'public/styles/text-styles.css',
      filter: { types: ['textStyle'] },
      parsers: [{ name: 'to-css-text-style' }],
    },
    {
      name: 'Design Tokens / Fonts',
      path: 'public/fonts',
      filter: {
        types: ['font'],
      },
      parsers: [
        {
          name: 'convert-font',
          options: {
            formats: ['woff2', 'woff', 'otf'],
          },
        },
      ],
    },
    {
      name: 'Design Tokens / Import fonts',
      path: 'public/styles/fonts.css',
      filter: {
        types: ['font'],
      },
      parsers: [
        {
          name: 'to-css-font-import',
          options: {
            formats: ['woff2', 'woff', 'otf'],
            fontsPath: 'public/fonts',
          },
        },
      ],
    },
  ],
};
