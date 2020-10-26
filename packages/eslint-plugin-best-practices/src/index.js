const requireIndex = require('requireindex');

exports.rules = requireIndex(`${__dirname}/rules`);
exports.configs = requireIndex(`${__dirname}/configs`);
exports.processors = {
  '.json': {
    preprocess(text) {
      // As JS file
      return [`module.exports = ${text}`];
    },
  },
};
