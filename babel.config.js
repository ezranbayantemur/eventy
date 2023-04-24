module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@types': './src/types',
          '@pages': './src/pages',
          '@components': './src/components',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
