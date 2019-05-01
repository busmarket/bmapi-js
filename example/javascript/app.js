const BmApi = require('../../lib/bmapi');
const myBmApi = new BmApi('[authorization_token]');
(async () => {
  const response = await myBmApi.product.details({product_uuid: `97A05EE1CD6E19884724E5B05B015344`});
  console.info(response.data);
})();
