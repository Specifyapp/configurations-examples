const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

const parsers = [
  {
    name: 'sort-by',
    options: {
      keys: ['name'],
    },
  },
  {
    name: 'to-css-custom-properties',
    options: {
      formatConfig: {
        selector: ":root[data-theme='dark']",
      },
    },
  },
];

module.exports = {
  repository: process.env.REPOSITORY_DARK_THEME,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: 'Colors / Dark Theme',
      path: 'color-themes/assets/styles/colors/dark-theme.css',
      filter: {
        types: ['color'],
      },
      parsers,
    },
    {
      name: 'Shadows / Dark Theme',
      path: 'color-themes/assets/styles/shadows/dark-theme.css',
      filter: {
        types: ['shadow'],
      },
      parsers,
    },
    {
      name: 'Gradients / Dark Theme',
      path: 'color-themes/assets/styles/gradients/dark-theme.css',
      filter: {
        types: ['gradient'],
      },
      parsers,
    },
    {
      name: 'Borders / Dark Theme',
      path: 'color-themes/assets/styles/borders/dark-theme.css',
      filter: {
        types: ['border'],
      },
      parsers,
    },
  ],
};
