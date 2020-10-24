const host = 'https://api.pokemontcg.io/';
const prefix = 'v1';

const routes = (path) => [host, prefix, path].join('/');

export default routes;
