<<<<<<< HEAD
const axios = require('axios');
const BmApiClient = apiToken => axios.create({
  baseURL: 'https://api.bm.parts',
  headers: {'Authorization': apiToken}
});
module.exports = BmApiClient;
=======
const axios = require('axios');
const BmApiClient = apiToken => axios.create({
  baseURL: 'https://api.bm.parts',
  headers: {'Authorization': apiToken}
});
module.exports = BmApiClient;
>>>>>>> d28ae96296b35dd379fcaf81c4b12d71d6c2df27
