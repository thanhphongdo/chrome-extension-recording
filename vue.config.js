const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// Generate pages object
const pagesObj = {};

const chromeName = ['popup', 'options', 'background'];

chromeName.forEach((name) => {
  pagesObj[name] = {
    entry: `src/${name}/index.ts`,
    template: 'public/index.html',
    filename: `${name}.html`,
  };
});

// pagesObj.content_script = {
//   entry: `src/content_script/index.ts`,
//   filename: 'content_script.js'
// }

const plugins = process.env.NODE_ENV === 'production'
  ? [
    {
      from: path.resolve('src/manifest.production.json'),
      to: `${path.resolve('dist')}/manifest.json`,
    },
  ]
  : [
    {
      from: path.resolve('src/manifest.development.json'),
      to: `${path.resolve('dist')}/manifest.json`,
    },
  ];

module.exports = {
  pages: pagesObj,
  configureWebpack: {
    plugins: [CopyWebpackPlugin(plugins)],
  },
};
