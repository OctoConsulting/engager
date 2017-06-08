module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      exclude: /node_modules/
    }]
  }
}
