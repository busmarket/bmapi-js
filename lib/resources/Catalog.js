'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Catalog(client) {
  this.get = client.get;
}

Catalog.prototype = {
  /***
   * Новые поступления
   * https://developer.bm.parts/api/v2/catalog.html#get-catalog-new-arrivals
   */
  newArrivals: function (options = {}) {
    return this.get(`/catalog/new_arrivals`);
  },

  /***
   * Список брендов производителей
   * https://developer.bm.parts/api/v2/catalog.html#get-catalog-brands
   *
   * Возвращает список объектов в которых
   * name - представляет имя бренда,
   * products_count - количество товаров в данном бренде.
   *
   * Query Parameters:
   * -----------------------------------------------------------
   * | page           | Страница выдачи.
   * -----------------------------------------------------------
   * | per_page       | Кол-во элементов в выдаче.
   * -----------------------------------------------------------
   *
   */
  brands: function (options = {}) {
    return this.get(`/catalog/brands`, options);
  }
};

module.exports = Catalog;
