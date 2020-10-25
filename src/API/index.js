import routes from './routes';

const setSearchParams = (url, obj = {}) =>
  Object.entries(obj).forEach(([key, value]) => url.searchParams.set(key, value));

const isObjWithKeys = (obj) => Object.keys(obj).length > 0;

const getPokemonsData = async (path, query = {}) => {
  const route = routes(path);
  const url = new URL(route);
  if (isObjWithKeys(query)) {
    setSearchParams(url, query);
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    const total = await response.headers.get('total-count');
    return { data, total };
  } catch (err) {
    throw new Error(err);
  }
};

export default getPokemonsData;
