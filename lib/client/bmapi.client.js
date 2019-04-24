const axios = require('axios');

const BmApiClient = apiToken => axios.create({
  baseURL: 'https://api.bm.parts',
  headers: {'Authorization': apiToken}
});

module.exports = BmApiClient;
