module.exports = function(target, source) {
  // deep clone
  const newObj = JSON.parse(JSON.stringify(target));

  Object.keys(source).forEach((key) => {
    const type = Object.prototype.toString.call(source[key]);

    if (type === '[object Array]') {
      newObj[key] = [...target[key], ...source[key]];
    } else if (type === '[object Object]') {
      newObj[key] = {...target[key], ...source[key]};
    } else {
      newObj[key] = source[key];
    }
  });

  return newObj;
};
