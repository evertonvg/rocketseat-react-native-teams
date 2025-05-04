module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./src'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@storage': './src/storage',
          '@theme': './src/theme',
          '@services': './src/services',
          '@hooks': './src/hooks',  
          '@contexts': './src/contexts',
          '@utils': './src/utils',
        },
      }],
      // ['babel-plugin-styled-components']
    ],
  };
};
