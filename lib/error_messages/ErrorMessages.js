module.exports = {
  token: `\n\n⚠ BmApi. Authorization token is not defined!
  \nhttps://developer.bm.parts/api/v2/overview.html#api\n`,
  suggests: `\n\n⚠ BmApi. The parameter {q} is not defined!
  \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-suggests\n`,
  aggregations: {
    models: `\n\n⚠ BmApi. Required parameter {car_name} is not defined!
    \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-models\n`,
    engines: `\n\n⚠ BmApi. Required parameters {car_name, model_name} are not defined!
    \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-model-string-model-name\n`,
  },
  product: {
    in_waiting: '\n\n⚠ BmApi. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id7\n',
    in_stocks: '\n\n⚠ BmApi. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id8\n',
    prices: '\n\n⚠ BmApi. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id9\n',
    price: '\n\n⚠ BmApi. Required parameters {product_uuid, currency} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id10\n',
    get: '\n\n⚠ BmApi. Required parameters {product_uuid, currency} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id11\n'
  },
  profile: {
    change_warehouse: '\n\n⚠ BmApi. Required parameter {warehouse_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#post-profile-change-warehouse\n',
    mailing_save: '\n\n⚠ BmApi. Required parameters is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#post--profile-mailing\n',
    app_name: '\n\n⚠ BmApi. Required parameter {app_name} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#get--profile-settings-(string-app_name)\n',
    setting_save: '\n\n⚠ BmApi. Required parameters {app_name} or {settings} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#post--profile-settings-(string-app_name)\n',
  },
  claims: {
    attachment: '\n\n⚠ BmApi. Required parameters {attachment, issue_id} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-\n',
    issue_comments: '\n\n⚠ BmApi. Required parameter {issue_id} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-\n',
    attachments: '\n\n⚠ BmApi. Required parameter {issue_id} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#get--claims-issue-(string-issue_id)-attachments-\n',
    form_data: '\n\n⚠ BmApi. Required parameter {attachment} must be FormData!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-\n',
    set_issue_comment: '\n\n⚠ BmApi. Required parameters {issue_id, comment} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-comment-\n'
  },
  news: {
    news_uuid: '\n\n⚠ BmApi. Required parameter {news_uuid} is not defined!' +
        '\nhttps://developer.bm.parts/api/v2/news.html#uuid\n'
  }
};
