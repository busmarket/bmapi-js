'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Product(client) {
  this.get = client.get;
}

Product.prototype = {

  /***
   * Получить ожидаемое количество товара
   * https://developer.bm.parts/api/v2/product.html#get-product-product-uuid-in-waiting
   *
   * Query Parameters (options = {}):
   * -----------------------------------------------------------
   * | product_uuid   | Обязательный ID товара
   * -----------------------------------------------------------
   */
  inWaiting: function (options = {}) {
    if (Reflect.has(options, 'product_uuid'))
      return this.get(`product/${options.product_uuid}/in_waiting`);
    else
      throw Error(ErrorMessages.product.in_waiting)
  },

  /***
   * Получить остатки товара по всем складам
   * https://developer.bm.parts/api/v2/product.html#get-product-product-uuid-in-stocks
   *
   * Query Parameters (options = {}):
   * -----------------------------------------------------------
   * | product_uuid   | Обязательный ID товара
   * -----------------------------------------------------------
   * | id_type        | Указывает выполнять поиск товара
   * |                | по ID или по коду
   * -----------------------------------------------------------
   */
  inStocks: function (options = {}) {
    if (Reflect.has(options, 'product_uuid'))
      return this.get(`product/${options.product_uuid}/in_stocks`);
    else
      throw Error(ErrorMessages.product.in_stocks)
  },

  /***
   * Получить цену товара в основных валютах
   * https://developer.bm.parts/api/v2/product.html#get-product-product-uuid-prices
   *
   * Query Parameters (options = {}):
   * -----------------------------------------------------------
   * | product_uuid   | Обязательный ID товара
   * -----------------------------------------------------------
   * | id_type        | Указывает выполнять поиск товара
   * |                | по ID или по коду
   * -----------------------------------------------------------
   */
  prices: function (options = {}) {
    if (Reflect.has(options, 'product_uuid'))
      return this.get(`product/${options.product_uuid}/prices`);
    else
      throw Error(ErrorMessages.product.prices)
  },

  /***
   * Получить актуальную цену товара
   * https://developer.bm.parts/api/v2/product.html#get-product-product-uuid-price
   *
   * Query Parameters (options = {}):
   * -----------------------------------------------------------
   * | product_uuid   | Обязательный ID товара
   * -----------------------------------------------------------
   * | currency       | ID Валюты для отображения цены.
   * |                | По умолчанию, валюта основного договора.
   * -----------------------------------------------------------
   * | id_type        | Указывает выполнять поиск товара
   * |                | по ID или по коду
   * -----------------------------------------------------------
   */
  price: function (options = {}) {
    if (Reflect.has(options, 'product_uuid'))
      return this.get(`product/${options.product_uuid}/price`, options);
    else
      throw Error(ErrorMessages.product.price)
  },

  /**
   * Получить информацию по товару
   * https://developer.bm.parts/api/v2/product.html#get-product-string-product-uuid
   *
   * Query Parameters (options = {}):
   * -----------------------------------------------------------
   * | product_uuid   | Обязательный ID товара
   * -----------------------------------------------------------
   * | currency       | ID Валюты для отображения цены.
   * |                | По умолчанию, валюта основного договора.
   * -----------------------------------------------------------
   * | id_type        | Указывает выполнять поиск товара
   * |                | по ID или по коду
   * -----------------------------------------------------------
   */
  details: function (options = {}) {
    if (Reflect.has(options, 'product_uuid'))
      return this.get(`product/${options.product_uuid}`, options);
    else
      throw Error(ErrorMessages.product.get)
  }
};

module.exports = Product;
