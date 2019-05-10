module.exports = {
  token: `\n\n⚠ BmApi. Authorization token is not defined!
  \nhttps://developer.bm.parts/api/v2/overview.html#api\n`,
  suggests: `\n\n⚠ BmApi. The parameter {q} is not defined!
  \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-suggests\n`,
  aggregations: {
    models: `\n\n⚠ BmApi. Required parameter {car_name} is not defined!
    \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-models\n`,
    engines: `\n\n⚠ BmApi. Required parameters {car_name, model_name} is not defined!
    \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-model-string-model-name\n`,
  },
  product: {
    in_waiting: '\n\n⚠ BmApi. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id7\n',
    in_stocks: '\n\n⚠ BmApi. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id8\n',
    prices: '\n\n⚠ BmApi. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id9\n',
    price: '\n\n⚠ BmApi. Required parameters {product_uuid, currency} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id10\n',
    get: '\n\n⚠ BmApi. Required parameters {product_uuid, currency} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id11\n'
  },
  profile: {
    change_warehouse: '\n\n⚠ BmApi. Required parameter {warehouse_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#post-profile-change-warehouse\n',
    mailing_save: '\n\n⚠ BmApi. Required parameters is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#post--profile-mailing\n',
    app_name: '\n\n⚠ BmApi. Required parameter {app_name} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#get--profile-settings-(string-app_name)\n',
    setting_save: '\n\n⚠ BmApi. Required parameters {app_name} or {settings} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#post--profile-settings-(string-app_name)\n',
  }
};
