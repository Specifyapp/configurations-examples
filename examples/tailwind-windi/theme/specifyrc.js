const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../..', '.env') });

module.exports = {
  repository: process.env.REPOSITORY,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: 'Design Tokens / Theme',
      path: 'theme/tailwind-theme.js',
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
  ],
};
