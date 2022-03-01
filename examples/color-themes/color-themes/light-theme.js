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
        selector: ":root[data-theme='light']",
      },
    },
  },
];

module.exports = {
  repository: process.env.REPOSITORY_LIGHT_THEME,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: 'Colors / Light Theme',
      path: 'color-themes/assets/styles/colors/light-theme.css',
      filter: {
        types: ['color'],
      },
      parsers,
    },
    {
      name: 'Shadows / Light Theme',
      path: 'color-themes/assets/styles/shadows/light-theme.css',
      filter: {
        types: ['shadow'],
      },
      parsers,
    },
    {
      name: 'Gradients / Light Theme',
      path: 'color-themes/assets/styles/gradients/light-theme.css',
      filter: {
        types: ['gradient'],
      },
      parsers,
    },
    {
      name: 'Borders / Light Theme',
      path: 'color-themes/assets/styles/borders/light-theme.css',
      filter: {
        types: ['border'],
      },
      parsers,
    },
  ],
};
