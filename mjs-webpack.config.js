console.log('**** Custom config');

module.exports = {
  module: {
    rules: [
      {
        include: /node_modules/,
        test: /\.mjs$/,
        type: 'javascript/auto'
      }
    ]
  }
};
