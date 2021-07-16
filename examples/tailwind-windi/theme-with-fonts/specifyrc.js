const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../..', '.env') });

module.exports = {
  repository: process.env.REPOSITORY,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: 'Design Tokens / Theme',
      path: 'theme-with-fonts/tailwind-theme.js',
      parsers: [
        {
          name: 'to-tailwind',
          options: {
            formatName: 'kebabCase',
            formatConfig: {
              objectName: 'extend',
              module: 'commonjs',
            },
          },
        },
      ],
    },
    {
      name: 'Assets / Font files',
      path: 'theme-with-fonts/public/fonts',
      filter: {
        types: ['font'],
      },
      parsers: [
        {
          name: 'convert-font',
          options: {
            formats: ['woff2'],
          },
        },
      ],
    },
    {
      name: 'Design Tokens / Font face',
      path: 'theme-with-fonts/public/fonts/fonts.css',
      filter: {
        types: ['font'],
      },
      parsers: [
        {
          name: 'to-css-font-import',
          options: {
            formats: ['woff2'],
          },
        },
      ],
    },
  ],
};
