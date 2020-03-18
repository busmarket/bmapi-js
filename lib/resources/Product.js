'use strict';
const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;


function Product(client) {
    this.get = client.get;
}

const URL = '/product';

Product.prototype = {

    /***
     * Получить ожидаемое количество товара
     * https://developer.bm.parts/api/v2/product.html#get-product-product-uuid-in-waiting
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | product_uuid  |    true      |              | ID товара.
     * ------------------------------------------------------------------------------
     * ==============================================================================
     -
     */
    inWaiting: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['product_uuid'],
            url: {
                base: URL,
                hash: 'get-product-product-uuid-in-waiting'
            }
        });
        if (!statusError)
            return this.get(`${URL}/${options.product_uuid}/in_waiting`);

    },

    /***
     * Получить остатки товара по всем складам
     * https://developer.bm.parts/api/v2/product.html#get-product-product-uuid-in-stocks
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | product_uuid  |    true      |              | ID товара.
     * ------------------------------------------------------------------------------
     * | id_type       |    false     |              | Указывает выполнять поиск товара по ID или по коду
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     *
     */
    inStocks: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['product_uuid'],
            url: {
                base: URL,
                hash: 'get-product-product-uuid-in-stocks'
            }
        });
        if (!statusError)
            return this.get(`${URL}/${options.product_uuid}/in_stocks`);

    },

    /***
     * Получить цену товара в основных валютах
     * https://developer.bm.parts/api/v2/product.html#get-product-product-uuid-prices
     *
     *  * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | product_uuid  |    true      |              | ID товара.
     * ------------------------------------------------------------------------------
     * | id_type       |    false     |              | Указывает выполнять поиск товара по ID или по коду
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    prices: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['product_uuid'],
            url: {
                base: URL,
                hash: 'get-product-product-uuid-prices'
            }
        });
        if (!statusError)
            return this.get(`${URL}/${options.product_uuid}/prices`);

    },

    /***
     * Получить актуальную цену товара
     * https://developer.bm.parts/api/v2/product.html#get-product-product-uuid-price
     *
     *  * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | product_uuid  |    true      |              | ID товара.
     * ------------------------------------------------------------------------------
     * | currency      |    false     |              | ID Валюты для отображения цены.
     * |               |              |              | По умолчанию, валюта основного договора
     * ------------------------------------------------------------------------------
     * | id_type       |    false     |              | Указывает выполнять поиск товара по ID или по коду
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    curPrice: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['product_uuid'],
            url: {
                base: URL,
                hash: 'get-product-product-uuid-price'
            }
        });
        if (!statusError)
            return this.get(`${URL}/${options.product_uuid}/price`, options);
    },

    /**
     * Получить информацию по товару
     * https://developer.bm.parts/api/v2/product.html#get-product-string-product-uuid
     *
     *  * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | product_uuid  |    true      |              | ID товара.
     * ------------------------------------------------------------------------------
     * | currency      |    false     |              | ID Валюты для отображения цены.
     * |               |              |              | По умолчанию, валюта основного договора
     * ------------------------------------------------------------------------------
     * | id_type       |    false     |              | Указывает выполнять поиск товара по ID или по коду
     * ------------------------------------------------------------------------------
     * | products_as   |    false     |    obj       | Возвращаемый формат товаров.
     * |               |              |              | Возможные варианты: obj, arr.
     * ------------------------------------------------------------------------------
     * | g              |    false     |              | Поисковая фраза для сохранения в историю поиска
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    details: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['product_uuid'],
            url: {
                base: URL,
                hash: 'get-product-string-product-uuid'
            }
        });
        if (!statusError)
            return this.get(`${URL}/${options.product_uuid}`, {...{products_as: 'obj'}, ...options});

    }
};

module.exports = Product;
