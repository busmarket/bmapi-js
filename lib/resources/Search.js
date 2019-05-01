'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
function Search(client) {
  this.get = client.get;
}

Search.prototype = {

  /***
   * Поиск товаров по каталогу
   * https://developer.bm.parts/api/v2/search_products.html#id18
   *
   * ------------------------------------------------------------------------------------------------------------
   * | q	            | Поисковая фраза. Например &q=115 906 или &q=амортизатор передний.
   * ------------------------------------------------------------------------------------------------------------
   * | brands	        | Указание по каким брендам выполнять фильтрацию: &brands=SOLGY&brands=SACHS.
   * ------------------------------------------------------------------------------------------------------------
   * | nodes	        | Фильтрация по сборочному узлу: &nodes=Легковые автомобили/Подвеска.
   * ------------------------------------------------------------------------------------------------------------
   * | new_arrival    | Фильтр по новому поступлению, необходимо передать ID нового поступления.
   * ------------------------------------------------------------------------------------------------------------
   * | advertisement  | Фильтр по рекламным акциям, необходимо передать ID рекламной акции.
   * ------------------------------------------------------------------------------------------------------------
   * | cars           | Фильтр по автомобилям, например &cars=BMW&cars=MERCEDES-BENZ>SPRINTER 2-t.
   * ------------------------------------------------------------------------------------------------------------
   * | new_product    | Показывать только новые товары, примает 1 или 0.
   * |                | По умолчанию - показывать все товары.
   * ------------------------------------------------------------------------------------------------------------
   * | promo          | Показывать только акционные товары, примает 1 или 0.
   * |                | По умолчанию - показывать все товары.
   * ------------------------------------------------------------------------------------------------------------
   * |                | ID складов по которым возвращать остатки:
   * | warehouses     | &warehouses=816D000C2999A7E611E6EC6B4A1915AF&warehouses=ACF9000C2947F7AE11E28A2B02C4AD32.
   * |                | По умолчанию - возвращает остатки для основного склада.
   * ------------------------------------------------------------------------------------------------------------
   * | currency       | Валюта в которой возвращать цены из товаров.
   * |                | По умолчанию - валюта договора.
   * ------------------------------------------------------------------------------------------------------------
   *
   * @param options
   * @returns {*}
   */
  products: function(options) {
    return this.get('search/products', options)
  },

  /***
   * Предложения поиска
   * https://developer.bm.parts/api/v2/search_products.html#get-search-suggests
   *
   * ---------------------------------------
   * | q        | Поисковая фраза.
   * ---------------------------------------
   * @param options
   * @returns {*}
   */
  suggests: function(options = {}) {
    if( Reflect.has(options, 'q') )
      return this.get('search/suggests', options);
    else
      throw Error(ErrorMessages.suggests)
  }
};

module.exports = Search;