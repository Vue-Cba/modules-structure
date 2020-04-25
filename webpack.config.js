const path = require('path')

module.exports = {
  resolve:{
    alias:{
      "~": path.resolve(__dirname, './src'),
      "@": path.resolve(__dirname, './src/core'), 
      "#": path.resolve(__dirname, './src/modules')
    }
  },
  rules: [
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          // Requires sass-loader@^7.0.0
          options: {
            implementation: require('sass'),
            fiber: require('fibers'),
            indentedSyntax: true 
          },
          // Requires sass-loader@^8.0.0
          options: {
            implementation: require('sass'),
            sassOptions: {
              fiber: require('fibers'),
              indentedSyntax: true 
            },
          },
        },
      ],
    },
  ],
  }