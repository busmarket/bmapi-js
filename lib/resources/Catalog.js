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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    newArrivals: function (options = {}) {
        return this.get(`${URL}/new_arrivals`);
    },

    /**
     * ✅ Список брендов производителей.
     * 🔗 https://developer.bm.parts/api/v2/catalog.html#get-catalog-brands
     *
     * Возвращает список объектов в которых
     * name - представляет имя бренда,
     * products_count - количество товаров в данном бренде.
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  page               | false        |              | Страница выдачи
     * ------------------------------------------------------------------------------
     * |  per_page           | false        |              | Страница выдачи
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    brands: function (options = {}) {
        return this.get(`${URL}/brands`, options);
    },


    /**
     * ✅ Список модификаций двигателей для модели автомобиля.
     * 🔗 https://developer.bm.parts/api/v2/catalog.html#get-catalog-cars-brand-string-car-brand-model-string-car-model-engines
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  car_brand          | true         |              | ID автомобильной марки
     * ------------------------------------------------------------------------------
     * |  car_model          | true         |              | ID модели
     * ------------------------------------------------------------------------------
     * |  q                  | false        |              | Фильтр по названию
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  parent_path        | false        |              | Полный путь к узлу,
     * |                     |              |              | например: Легковые автомобили/Двигатель/Ременный привод
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  parent_uuid        | false        |              | ID родительского узла
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
