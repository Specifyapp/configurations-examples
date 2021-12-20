module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
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
