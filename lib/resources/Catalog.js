'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

const URL = '/catalog';

function Catalog(client) {
    this.get = client.get;
}


Catalog.prototype = {

    /**
     * ✅ Новые поступления.
     * 🔗 https://developer.bm.parts/api/v2/catalog.html#get-catalog-new-arrivals
     */
    newArrivals: function (options = {}) {
        return this.get(`${URL}/new_arrivals`);
    },

    /**
     * ✅ Список брендов производителей.
     * 🔗 https://developer.bm.parts/api/v2/catalog.html#get-catalog-brands
     *
     */
    brands: function (options = {}) {
        return this.get(`${URL}/brands`, options);
    },


    /**
     * ✅ Список модификаций двигателей для модели автомобиля.
     * 🔗 https://developer.bm.parts/api/v2/catalog.html#get-catalog-cars-brand-string-car-brand-model-string-car-model-engines
     * 
     */
    enginesByModel: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['car_brand', 'car_model'],
            url: {
                base: URL,
                hash: 'get-catalog-cars-brand-string-car-brand-model-string-car-model-engines'
            }
        });
        if (!statusError)
            return this.get(`${URL}/cars/brand/${options.car_brand}/model/${options.car_model}/engines/`);

    },


    /**
     * ✅ Дерево автомобильных узлов.
     * 🔗 https://developer.bm.parts/api/v2/catalog.html#get-catalog-nodes-path
     * 
     */

    carNodesPath: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: [],
            url: {
                base: URL,
                hash: 'get-catalog-nodes-path'
            }
        });
        if (!statusError) {
            console.log(`${URL}/nodes/path${options.parent_path ? '/' + options.parent_path : ''}`);
            return this.get(`${URL}/nodes/path${options.parent_path ? '/' + options.parent_path : ''}`);
        }
    },


    /**
     * ✅ Список автомобильных узлов.
     * 🔗 https://developer.bm.parts/api/v2/catalog.html#get-catalog-nodes
     * 
     */
    carNodes: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: [],
            url: {
                base: URL,
                hash: 'get-catalog-nodes'
            }
        });
        if (!statusError)
            return this.get(`${URL}/nodes${options.parent_uuid ? '/' + options.parent_uuid : ''}`);
    },

};

module.exports = Catalog;
