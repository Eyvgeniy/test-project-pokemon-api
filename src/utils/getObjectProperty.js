const getObjectProperty = (obj, path, defaultValue = undefined) => {
  const keys = path.split('.');
  const iter = (obj, keys) => {
    const [first, ...rest] = keys;
    const existKey = Object.keys(obj).find((key) => key === first);
    if (existKey === undefined) {
      return defaultValue;
    }
    const nestedObj = obj[existKey];
    if (rest.length === 0) {
      return nestedObj;
    }
    return iter(nestedObj, rest);
  };
  return iter(obj, keys);
};

export default getObjectProperty;
