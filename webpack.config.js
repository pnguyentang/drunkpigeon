const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file name
    path: path.resolve(__dirname, 'dist') // Output directory
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Static files directory
    },
    setupMiddlewares: function(middlewares, devServer) {
      devServer.app.get('/api', function(req, res) {
        res.json({ message: 'Hello from the API' });
      });
      return middlewares;
    },
    port: 3000 // Development server port
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // HTML template file
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Files to be processed by Babel
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader' // Babel loader
        }
      }
    ]
  }
};
