'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

const BmApiError = ErrorMessages.BmApiError;


function Delivery(client) {
    let methods = ['get', 'post', 'put', 'delete'];
    for (let m of methods) {
        this[m] = client[m]
    }
}

const URL = '/delivery';


Delivery.prototype = {



    /***
     * ✅ Список складов перевозчика
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carriers-warehouses
     */
    carriersWarehouses: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['city', 'carrier'],
            url: {
                base: URL,
                hash: 'get-delivery-carriers-warehouses'
            }
        });
        if (!statusError)
            return this.get(`${URL}/carriers/warehouses`);
    },


    /***
     * ✅ Получить список городов для перевозчика
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carrier-cities
     */
    carriersCities: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['region', 'carrier'],
            url: {
                base: URL,
                hash: 'get-delivery-carrier-cities'
            }
        });
        if (!statusError)
            return this.get(`${URL}/carrier/cities`, {is_address: false, ...options});
    },


    /**
     * ✅ Подтверждение создания настройки доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-confirm
     */
    configConfirm: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['code'],
            url: {
                base: URL,
                hash: 'post-delivery-config-confirm'
            }
        });
        if (!statusError)
            return this.post(`${URL}/config/confirm`, {...options});
    },


    /**
     * ✅ Установить настройку доставки по умолчанию
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-default
     *
     */
    configDefault: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['config_uuid'],
            url: {
                base: URL,
                hash: 'post-delivery-config-default'
            }
        });
        if (!statusError)
            return this.post(`${URL}/config/default`, {...options});
    },


    /**
     * ✅ Получить название улицы города
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-city-streets
     *
     */
    cityStreets: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['city'],
            url: {
                base: URL,
                hash: 'get-delivery-city-streets'
            }
        });
        if (!statusError)
            return this.get(`${URL}/city/streets`, {...options});
    },


    /**
     * ✅ Получить таблицу выездов
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-departures
     *
     */
    deliveryDepartures: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['warehouse', 'city'],
            url: {
                base: URL,
                hash: 'get-delivery-departures'
            }
        });
        if (!statusError)
            return this.get(`${URL}/departures`, {...options});
    },


    /**
     * ✅ Список получателей
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-receivers
     *
     */
    deliveryReceivers: function (options = {}) {
        return this.get(`${URL}/receivers`, {...options});

    },


    /**
     * ✅ Создать получателя
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-receivers
     */
    deliveryReceiversAdd: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['surname', 'name', 'middle_name', 'phone'],
            url: {
                base: URL,
                hash: 'post-delivery-receivers'
            }
        });
        if (!statusError)
            return this.post(`${URL}/receivers`, {...options});
    },


    /**
     * ✅ Список перевозчиков
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get--delivery-carriers
     *
     */
    deliveryCarriers: function () {
        return this.get(`${URL}/carriers`)
    },


    /**
     * ✅ Список областей
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-regions
     *
     */
    deliveryRegions: function () {
        return this.get(`${URL}/regions`)
    },


    /**
     * ✅ Настройки доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-configs
     */
    deliveryConfigs: function () {
        return this.get(`${URL}/configs`)
    },


    /**
     * ✅ Создать настройку доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-configs
     *
     */
    deliveryCreateConfigs: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['receiver', 'city', 'carrier', 'carrier_warehouse', 'is_default', 'address'],
            url: {
                base: URL,
                hash: 'post-delivery-configs'
            }
        });
        if (!statusError)
            return this.post(`${URL}/configs`, {full_insurance: false, ...options})
    },


    /**
     * ✅ Отследить ТТН
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-track
     *
     */
    deliveryTrack: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['tracking_number'],
            url: {
                base: URL,
                hash: 'get-delivery-track'
            }
        });
        if (!statusError)
            return this.get(`${URL}/track`, {...options});

    },


    /**
     * ✅ Список городов области
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-region-string-region-uuid-cities
     *
     */
    deliveryRegionCities: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['region_uuid'],
            url: {
                base: URL,
                hash: 'get-delivery-region-string-region-uuid-cities'
            }
        });
        if (!statusError)
            return this.get(`${URL}/region/${options.region_uuid}/cities`, {...options});


    },


    /**
     * ✅ Удалить контактное лицо
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#delete-delivery-receiver-string-receiver-uuid
     *
     */
    deliveryDeleteReceiver: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['receiver_uuid'],
            url: {
                base: URL,
                hash: 'delete-delivery-receiver-string-receiver-uuid'
            }
        });
        if (!statusError)
            return this.delete(`${URL}/receiver/${options.receiver_uuid}`);
    },


    /**
     * ✅ Информация о перевозчике
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carrier-string-carrier-uuid
     */
    deliveryCarrier: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['carrier_uuid'],
            url: {
                base: URL,
                hash: 'get-delivery-carrier-string-carrier-uuid'
            }
        });
        if (!statusError)
            return this.get(`${URL}/carrier/${options.carrier_uuid}`, {...options});
    },


    /**
     * ✅ Удалить настройку доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#delete-delivery-config-string-config-uuid
     */
    deliveryDeleteConfig: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['config_uuid'],
            url: {
                base: URL,
                hash: 'delete-delivery-config-string-config-uuid'
            }
        });
        if (!statusError)
            return this.delete(`${URL}/config/${options.config_uuid}`, {...options})

    },


};

module.exports = Delivery;
