'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
function Aggregations(client) {
  this.get = client.get;
}

Aggregations.prototype = {
  /***
   * Агрегация по акциям
   * https://developer.bm.parts/api/v2/search_products.html#get-search-products-aggregations-advertisements
   *
   * @param options
   * @returns {*}
   */
  advertisements: function(options = {}) {
    return this.get('search/products/aggregations/advertisements', options);
  },

  /***
   * Агрегация по брендам
   * https://developer.bm.parts/api/v2/search_products.html#get-search-products-aggregations-brands
   *
   * @param options
   * @returns {*}
   */
  brands: function(options = {}) {
    return this.get('search/products/aggregations/brands', options);
  },

  /***
   * Агрегация по сборочным узлам
   * https://developer.bm.parts/api/v2/search_products.html#get-search-products-aggregations-nodes
   *
   * @param options
   * @returns {*}
   */
  nodes: function(options = {}) {
    return this.get('search/products/aggregations/nodes', options);
  },

  /***
   * Агрегация по автомобильным брендам
   * https://developer.bm.parts/api/v2/search_products.html#get-search-products-aggregations-cars
   *
   * @param options
   * @returns {*}
   */
  cars: function(options = {}) {
    return this.get('search/products/aggregations/cars', options);
  },

  /***
   * Агрегация по моделям для марки автомобиля
   * https://developer.bm.parts/api/v2/search_products.html#get-search-products-aggregations-car-string-car-name-models
   *
   * @param options
   * @returns {*}
   */
  models: function(options = {}) {
    if( Reflect.has(options, 'car_name') )
      return this.get(`search/products/aggregations/car/${options.car_name}/models`, options);
    else
      throw Error(ErrorMessages.aggregations.models);
  },

  /***
   * Агрегация по двигателям для модели
   * https://developer.bm.parts/api/v2/search_products.html#get-search-products-aggregations-car-string-car-name-model-string-model-name
   *
   * @param options
   * @returns {never|*}
   */
  engines: function(options = {}) {
    if( Reflect.has(options, 'car_name') && Reflect.has(options, 'model_name') )
      return this.request(`search/products/aggregations/car/${options.car_name}/model/${options.model_name}`, options);
    else
      throw Error(ErrorMessages.aggregations.engines);
  },

  /***
   * История поиска по товарам
   * (Возвращает только последние 10 результатов поиска. Указывать количество нельзя.)
   * https://developer.bm.parts/api/v2/search_products.html#get-search-products-history
   *
   * @returns {*}
   */
  history: function() {
    return this.get('search/products/aggregations/history');
  }
};

module.exports = Aggregations;
