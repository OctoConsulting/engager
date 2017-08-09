module.exports = {
  entry: [
    './src/Client/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
            }
      },
      {test: /\.css$/, loader:"style-loader!css-loader"}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  node:{
    fs: "empty",
    net: "empty",
    tls: "empty"
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
};
