module.exports = {
  root: true,
  extends: '@react-native-community',

  rules: {
    'max-len': ['error', {code: 100}],
    'prefer-promise-reject-errors': ['on'],
    'react/jsx-filename-extension': ['on'],
    // 'react/prop-types': ['warn'],
    'no-return-assign': ['on'],
  },
};
