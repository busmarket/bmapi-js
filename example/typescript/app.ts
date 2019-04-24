// @ts-ignore
import BmApi = require("../../dist/bmapi");

const Authorization = '[authorization_token]';
const myBmApi = BmApi(`${Authorization}`);

(async() => {
  /***
   * Get PRODUCT
   * @type {BmApiResponse}
   */
  const search = await myBmApi.search.products({q: '115906'});
  console.info(search.data.products);

  /**
   * Get AGGREGATION
   * @type {BmApiResponse}
   */
  // const aggregations = await myBmApi.aggregations.brands({q: '115906'});
  // console.info(aggregations.data);

  /**
   * Get SUGGESTS
   * @type {BmApiResponse}
   */
  // const suggests = await myBmApi.search.suggests({q: '115906'});
  // console.info(suggests.data);

})();
