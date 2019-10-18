module.exports = {
  token: `\n\n⚠️ BmApi. Authorization token is not defined!
  \nhttps://developer.bm.parts/api/v2/overview.html#api\n\n`,
  suggests: `\n\n⚠️ BmApi. The parameter {q} is not defined!
  \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-suggests\n\n`,
  aggregations: {
    models: `\n\n⚠️ BmApi. Required parameter {car_name} is not defined!
    \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-models\n\n`,
    engines: `\n\n⚠️ BmApi. Required parameters {car_name, model_name} are not defined!
    \nhttps://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-model-string-model-name\n\n`,
  },
  product: {
    in_waiting: '\n\n⚠️ BmApi. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id7\n\n',
    in_stocks: '\n\n⚠️ BmApi. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id8\n\n',
    prices: '\n\n⚠️ BmApi. Required parameter {product_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id9\n\n',
    price: '\n\n⚠️ BmApi. Required parameters {product_uuid, currency} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id10\n\n',
    get: '\n\n⚠️ BmApi. Required parameters {product_uuid, currency} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/product.html#id11\n\n'
  },
  profile: {
    change_warehouse: '\n\n⚠️ BmApi. Required parameter {warehouse_uuid} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#post-profile-change-warehouse\n\n',
    mailing_save: '\n\n⚠️ BmApi. Required parameters is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#post--profile-mailing\n\n',
    app_name: '\n\n⚠️ BmApi. Required parameter {app_name} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#get--profile-settings-(string-app_name)\n\n',
    setting_save: '\n\n⚠️ BmApi. Required parameters {app_name} or {settings} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/profile.html#post--profile-settings-(string-app_name)\n\n',
  },
  claims: {
    attachment: '\n\n⚠️ BmApi. Required parameters {attachment, issue_id} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-\n\n',
    issue_comments: '\n\n⚠️ BmApi. Required parameter {issue_id} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-\n',
    attachments: '\n\n⚠️ BmApi. Required parameter {issue_id} is not defined!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#get--claims-issue-(string-issue_id)-attachments-\n\n',
    form_data: '\n\n⚠️ BmApi. Required parameter {attachment} must be FormData!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-\n\n',
    set_issue_comment: '\n\n⚠️ BmApi. Required parameters {issue_id, comment} are not defined!' +
      '\nhttps://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-comment-\n\n'
  },
  news: {
    news_uuid: '\n\n⚠️ BmApi. Required parameter {news_uuid} is not defined!' +
        '\nhttps://developer.bm.parts/api/v2/news.html#uuid\n\n'
  },
  advertising: {
    progress: '\n\n⚠️ BmApi. Required parameter {promo_uuid} is not defined!' +
        '\nhttps://developer.bm.parts/api/v2/advertising.html#get-advertising-promo-promo-uuid-progress\n\n'
  },
  reports: {
    period: '\n\n⚠️️ BmApi. Required parameter {period} is not defined!' +
        '\nhttps://developer.bm.parts/api/v2/reports.html#get-reports-brands-turnover\n\n' +
        '⚡️ Указание периода!' +
        '\nhttps://developer.bm.parts/api/v2/overview.html#overview-period\n\n',
    at_date: '\n\n⚠️️ BmApi. Required parameter {at_date} is not defined!' +
        '\nhttps://developer.bm.parts/api/v2/reports.html#get-reports-terms\n\n',
    reconciliation: '\n\n⚠️️ BmApi. Required parameter {period}, {file_type} is not defined!' +
        '\nhttps://developer.bm.parts/api/v2/reports.html#get-reports-download-reconciliation-file-type\n\n'
  }
};
