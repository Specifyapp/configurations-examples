module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['eslint:recommended'],
  rules: {
    'prettier/prettier': [
      1,
      {},
      {
        usePrettierrc: true,
      },
    ],
  },
};
