module.exports = {
  token: `\n\n⚠ BmApi API. Authorization token is not defined!
  \nhttps://developer.bm.parts/api/v2/overview.html#api\n`,
  suggests: `\n\n⚠ BmApi API. The parameter {q} is not defined!
  \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-suggests\n`,
  aggregations: {
    models: `\n\n⚠ BmApi API. Required parameter {car_name} is not defined!
    \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-models\n`,
    engines: `\n\n⚠ BmApi API. Required parameters {car_name, model_name} is not defined!
    \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-model-string-model-name\n`,
  },
  product: {
    in_waiting: '\n\n⚠ BmApi API. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id7\n',
    in_stocks: '\n\n⚠ BmApi API. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id8\n',
    prices: '\n\n⚠ BmApi API. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id9\n',
    price: '\n\n⚠ BmApi API. Required parameters {product_uuid, currency} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id10\n',
    get: '\n\n⚠ BmApi API. Required parameters {product_uuid, currency} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id11\n'
  }
};
