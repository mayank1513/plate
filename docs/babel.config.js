const babelConfig = require('../babel.config');

module.exports = {
  plugins: [...babelConfig.plugins, '@babel/plugin-transform-modules-commonjs'],
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset'),
    ...babelConfig.presets,
  ],
};