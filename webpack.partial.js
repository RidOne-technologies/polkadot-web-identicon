const webpack = require('webpack');

module.exports = {
    node: {
        global: true,
      },
    resolve:{
        extensions: ['.ts','.js','.mjs']
      }
}