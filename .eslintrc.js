module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:prettier/recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
      classPrivateProperties: true,
    },
    babelOptions: {},
  },
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'object-curly-spacing': 'off',
    'max-len': ['error', 200],
  },
};
