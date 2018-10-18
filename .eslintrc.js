module.exports = {
  root: true,
  extends: 'airbnb/base',

  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 'off',
    'comma-dangle': 'off',
    'no-console': 'off',
    'object-curly-spacing': 'off',
    'max-len': ["error", 200]
  }
};
