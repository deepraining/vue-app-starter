module.exports = {
  module: {
    rules: [
      {
        loader: 'style-loader!css-loader!less-loader',
        test: /\.less$/,
      },
      {
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.scss$/,
      },
    ],
  },
};
