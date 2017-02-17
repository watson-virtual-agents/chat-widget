module.exports = function(source) {
  return source.replace(/\n/g, '').replace(/\s\s+/g, ' ');
};
