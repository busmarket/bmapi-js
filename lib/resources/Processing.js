'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function Processing(client) {
    this.get = client.get;
    this.post = client.post;
}

const URL = '/processing';


Processing.prototype = {

    /**
     * ✅ Отгрузить зарезервированные заказы (синхронно).
     * 🔗 https://developer.bm.parts/api/v2/processing.html#post-processing-reserve-process
     */
    reserveProcess: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['orders_array', 'delivery_config', 'warehouse', 'key', 'key', 'expired_at', 'route_code', 'route_at', 'departure_at', 'comment'],
            url: {
                base: URL,
                hash: 'post-processing-reserve-process'
            }
        });
        if (!statusError)
            return this.post(`${URL}/reserve/process`, {...options});
    },

    /**
     * ✅ Получить список доступных выездов.
     * 🔗 https://developer.bm.parts/api/v2/processing.html#get-processing-departures
     *
     */
    getDepartures: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['delivery_config', 'warehouse'],
            url: {
                base: URL,
                hash: 'post-processing-reserve-process'
            }
        });
        if (!statusError)
            return this.get(`${URL}/departures`, options);
    },

    /**
     * ✅ Отгрузить корзину (синхронно).
     * 🔗 https://developer.bm.parts/api/v2/processing.html#post-processing-sync
     */
    processSync: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['cart', 'delivery_config', 'warehouse', 'key', 'key', 'expired_at', 'route_code', 'route_at', 'departure_at', 'comment', 'save_unprocessed'],
            url: {
                base: URL,
                hash: 'post-processing-reserve-process'
            }
        });
        if (!statusError)
            return this.post(`${URL}/sync`, {...options});
    },

    /**
     * ✅ Excel из неотгруженных товаров.
     * 🔗 https://developer.bm.parts/api/v2/processing.html#excel
     *
     */
    downloadUnshipped: function (options = {}) {
        return this.get(`${URL}/download/unshipped${options.task_id ? '/' + options.task_id : ''}`);
    },

    /**
     * ✅ Проверить доступность отгрузки корзины.
     * 🔗 https://developer.bm.parts/api/v2/processing.html#get-processing-cart-string-cart-uuid-pre-check
     *
     */
    cartPreCheck: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['cart_uuid'],
            url: {
                base: URL,
                hash: 'post-processing-reserve-process'
            }
        });
        if (!statusError)
            return this.get(`${URL}/cart/${options.cart_uuid}/pre_check`);
    },

    /**
     * ✅ Проверка результатов асинхронной отгрузки.
     * 🔗 https://developer.bm.parts/api/v2/processing.html#get-processing-shipment-task-id
     *
     */
    checkShipmentStatus: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['task_id'],
            url: {
                base: URL,
                hash: 'post-processing-reserve-process'
            }
        });
        if (!statusError)
            return this.get(`${URL}/shipment/${options.task_id}`);
    },


};

module.exports = Processing;
