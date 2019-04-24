
// @ts-ignore
import BmApi = require("../lib/bmapi");

const Autorization = 'eyJhbGciOiJIUzI1NiIsImlhdCI6MTU1MjY1OTUzOCwiZXhwIjoxNTg0MTk1NTM4fQ.eyJ1dWlkIjoiODEyRDAwMEMyOTk5QTdFNjExRTU3NjUyNDU1NUU2NkEiLCJhcHAiOiJidXNtYXJrZXQuZ3JvdXAifQ.osleOb37JhXKJ0w3hA7s-NZYaUk1FkevgOXdmiXRdJI';
const myBmApi = BmApi(`${Autorization}`);

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
  // const aggregations = await myBmApi.aggregations.brands({q: ''});
  // console.info(aggregations.data);

  /**
   * Get SUGGESTS
   * @type {BmApiResponse}
   */
  // const suggests = await myBmApi.search.suggests({q: '115906'});
  // console.info(suggests.data);

})();
