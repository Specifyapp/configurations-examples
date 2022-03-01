const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '..', '.env') });

module.exports = {
  repository: process.env.REPOSITORY,
  personalAccessToken: process.env.PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: 'Design Tokens / Theme',
      path: 'theme-with-assets/tailwind-theme.js',
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
      path: 'theme-with-assets/public/fonts',
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
      path: 'theme-with-assets/public/fonts/fonts.css',
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
    {
      name: 'Icons',
      path: 'theme-with-assets/public/icons',
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
  ],
};
