# Feature

in this project we apply context api to perform things which is given below---
1. crud operation using Context api .
2. theme changeing funcationality .
3. webpack implementation

# Webpack 
webpack is Module bundlers are the way to organize and combine many files of JavaScript code into one file.
Webpack is a widely used module bundler that provides a powerful and flexible configuration for handling complex web applications. It can handle not only JavaScript but also other assets like CSS, images, and fonts.

here step by step follow up to make single file build

1. npm install webpack webpack-cli --save-dev

2. make file webpack.config.js in root directory of application
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

3. for Babel support like es6 feature etc. 
npm install @babel/core @babel/preset-react babel-loader --save-dev.


4. create file in root directory name is babel.config.js

npm install style-loader css-loader --save-dev


module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-react',
    '@babel/preset-env',
  ];

  return {
    presets
  };
};


5. for webpack you used this command
npm install -g webpack
npx webpack

6. for build you used this command

npm run build

7. for run build file on local this command

server -s build
