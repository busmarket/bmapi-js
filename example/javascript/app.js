const BmApi = require('../../lib/bmapi');
const myBmApi = new BmApi(`<API_TOKEN>`);

(async () => {
  const response = await myBmApi.search.products();
  console.info( response.data );
})();