module.exports = {
  extends: ['eslint-config-woda/typescript'],
  rules: {
    '@typescript-eslint/no-shadow': 'error',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
  },
};
