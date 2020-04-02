'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function Search(client) {
    this.get = client.get;
}

const URL = '/search';

Search.prototype = {

    /**
     * ✅ История поиска по товарам.
     * 🔗 https://developer.bm.parts/api/v2/search_products.html#get-search-products-history
     *
     */
    history: function () {
        return this.get(`${URL}/products/history`);
    },

    /**
     * ✅ Предложения поиска.
     * 🔗 https://developer.bm.parts/api/v2/search_products.html#get-search-products-suggest
     *
     */
    suggestProducts: function (options) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['q'],
            url: {
                base: 'search_products',
                hash: 'get-search-products-suggest'
            }
        });
        if (!statusError)
            return this.get(`${URL}/products/suggest`, {products_as: 'obj', ...options});
    },

    /**
     * ✅ Предложения поиска.
     * 🔗 https://developer.bm.parts/api/v2/search_products.html#get-search-suggests
     */
    searchSuggests: function (options) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['q'],
            url: {
                base: 'search_products',
                hash: 'get-search-suggests'
            }
        });
        if (!statusError)
            return this.get(`${URL}/suggests`, {products_as: 'obj', ...options});
    },

    /***
     * ✅ Поиск товаров по каталогу
     * 🔗 https://developer.bm.parts/api/v2/search_products.html#get-search-products
     */
    products: function (options) {
        return this.get(`${URL}/products`, {...options})
    },

};

module.exports = Search;
