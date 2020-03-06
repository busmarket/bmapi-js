module.exports = {
  token: `\n\n🚨️️ BmApi. Authorization token is not defined!
  \n🔗 https://developer.bm.parts/api/v2/overview.html#api\n\n`,
  suggests: `\n\n🚨️️ BmApi. The parameter {q} is not defined!
  \n🔗 https://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-suggests\n\n`,
  aggregations: {
    models: `\n\n🚨️️ BmApi. Required parameter {car_name} is not defined!
    \n🔗 https://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-models\n\n`,
    engines: `\n\n🚨️️ BmApi. Required parameters {car_name, model_name} are not defined!
    \n🔗 https://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-products-aggregations-car-string-car-name-model-string-model-name\n\n`,
  },
  product: {
    in_waiting: '\n\n🚨️️ BmApi. Required parameter {product_uuid} is not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/product.html#id7\n\n',
    in_stocks: '\n\n🚨️️ BmApi. Required parameter {product_uuid} is not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/product.html#id8\n\n',
    prices: '\n\n🚨️️ BmApi. Required parameter {product_uuid} is not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/product.html#id9\n\n',
    price: '\n\n🚨️️ BmApi. Required parameters {product_uuid, currency} are not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/product.html#id10\n\n',
    get: '\n\n🚨️️ BmApi. Required parameters {product_uuid, currency} are not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/product.html#id11\n\n'
  },
  profile: {
    change_warehouse: '\n\n🚨️️ BmApi. Required parameter {warehouse_uuid} is not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/profile.html#post-profile-change-warehouse\n\n',
    mailing_save: '\n\n🚨️️ BmApi. Required parameters is not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/profile.html#post--profile-mailing\n\n',
    app_name: '\n\n🚨️️ BmApi. Required parameter {app_name} is not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/profile.html#get--profile-settings-(string-app_name)\n\n',
    setting_save: '\n\n🚨️️ BmApi. Required parameters {app_name} or {settings} are not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/profile.html#post--profile-settings-(string-app_name)\n\n',
  },
  claims: {
    attachment: '\n\n🚨️️ BmApi. Required parameters {attachment, issue_id} are not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-\n\n',
    issue_comments: '\n\n🚨️️ BmApi. Required parameter {issue_id} is not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-\n',
    attachments: '\n\n🚨️️ BmApi. Required parameter {issue_id} is not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/claims.html#get--claims-issue-(string-issue_id)-attachments-\n\n',
    form_data: '\n\n🚨️️ BmApi. Required parameter {attachment} must be FormData!' +
      '\n🔗 https://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-\n\n',
    set_issue_comment: '\n\n🚨️️ BmApi. Required parameters {issue_id, comment} are not defined!' +
      '\n🔗 https://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-comment-\n\n'
  },
  news: {
    news_uuid: '\n\n🚨️️ BmApi. Required parameter {news_uuid} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/news.html#uuid\n\n'
  },
  advertising: {
    progress: '\n\n🚨️️ BmApi. Required parameter {promo_uuid} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/advertising.html#get-advertising-promo-promo-uuid-progress\n\n'
  },
  reports: {
    period: '\n\n🚨️️ BmApi. Required parameter {period} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/reports.html#get-reports-brands-turnover\n\n' +
        '⚡️ Указание периода!' +
        '\n🔗 https://developer.bm.parts/api/v2/overview.html#overview-period\n\n',
    at_date: '\n\n🚨️️ BmApi. Required parameter {at_date} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/reports.html#get-reports-terms\n\n',
    reconciliation: '\n\n🚨️️ BmApi. Required parameters {period}, {file_type} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/reports.html#get-reports-download-reconciliation-file-type\n\n'
  },
  documents: {
    act_uuid: '\n\n🚨️️ BmApi. Required parameter {act_uuid} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-reclamation-string-act-uuid\n\n',
    download: '\n\n🚨 BmApi. Required parameters {type}, {uuid}, {file_type} are not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-download-string-type-string-uuid-string-file-type\n\n',
    get_document: '\n\n🚨 BmApi. Required parameters {type}, {uuid} are not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-string-type-string-uuid\n\n',
  },
  delivery: {
    warehouses: '\n\n🚨️BmApi. Required parameters {city}, {carrier} are not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carriers-warehouses\n\n',
    cities: '\n\n🚨️BmApi. Required parameters {region}, {carrier} are not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carriers-warehouses\n\n',
    streets: '\n\n🚨️BmApi. Required parameters {street}, {city} are not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carrier-cities\n\n',
    confirm: '\n\n🚨️BmApi. Required parameter {code} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-confirm\n\n',
    default: '\n\n🚨️BmApi. Required parameter {config_uuid} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-default\n\n',
    departures: '\n\n🚨️BmApi. Required parameters {warehouse}, {city} are not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-default\n\n',
    receiversAdd: '\n\n🚨️BmApi. All required parameters {surname}, {name}, {middle_name}, {phone} are not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-default\n\n',
    createDeliveryConfigs: '\n\n🚨️BmApi. There is an error in the `createConfigsDelivery` method!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-configs\n\n',
    deliveryTrack: '\n\n🚨️BmApi. Required parameter {tracking_number} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-track\n\n',
    deliveryRegionCities: '\n\n🚨️BmApi. Required parameter {region_uuid} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-region-string-region-uuid-cities\n\n',    
    deliveryDeleteReceiver: '\n\n🚨️BmApi. Required parameter {receiver_uuid} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#delete-delivery-receiver-string-receiver-uuid\n\n',    
    deliveryCarrier: '\n\n🚨️BmApi. Required parameter {carrier_uuid} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carrier-string-carrier-uuid\n\n',
    deliveryDeleteConfig: '\n\n🚨️BmApi. Required parameter {config_uuid} is not defined!' +
        '\n🔗 https://developer.bm.parts/api/v2/delivery.html#delete-delivery-config-string-config-uuid\n\n',
    
  },
  params_error:function(params,url) {
    return `\n\n🚨️️ BmApi.${params.length>1?'One or more r':'R'}equired parameter${params.length>1?'s':''} { ${params.join(', ')} } ${params.length>1?'are':'is'} not defined!
    🔗  https://developer.bm.parts/api/v2${url||'/'} \n\n`
  }
};
