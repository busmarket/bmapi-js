'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Delivery(client) {
    let methods = ['get', 'post', 'put', 'delete'];
    for(let m of methods) {
        this[m] = client[m]
    }
}

Delivery.prototype = {
    /***
     * ✅ Список складов перевозчика
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carriers-warehouses
     *
     * Если параметр `city` или `carrier` указан не верно
     * будет возвращен ответ [422 Unprocessable Entity]
     */
    carriersWarehouses: function (options = {}) {
        if (Reflect.has(options, 'city') && Reflect.has(options, 'carrier'))
            return this.get(`/delivery/carriers/warehouses`, options);
        else
            throw Error(ErrorMessages.delivery.warehouses)
    },

    /***
     * ✅ Получить список городов для перевозчика
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carrier-cities
     */
    carriersCities: function (options = {}) {
        if (
            Reflect.has(options, 'region') &&
            Reflect.has(options, 'carrier')
        )
            return this.get(`/delivery/carrier/cities`, {is_address: false, ...options});
        else
            throw Error(ErrorMessages.delivery.cities)
    },

    /**
     * ✅ Получить название улицы города
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-city-streets
     * @param options
     * @returns {*}
     */
    cityStreets: function (options = {}) {
        if (
            Reflect.has(options, 'street') &&
            Reflect.has(options, 'city')
        )
            return this.get(`/delivery/city/streets`, {...options});
        else
            throw Error(ErrorMessages.delivery.streets)
    },

    /**
     * ✅ Подтверждение создания настройки доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-confirm
     * @param options
     * @returns {*}
     */
    configConfirm: function (options = {}) {
        if (Reflect.has(options, 'code'))
            return this.post(`/delivery/config/confirm`, {...options});
        else
            throw Error(ErrorMessages.delivery.confirm)
    },

    /**
     * ✅ Установить настройку доставки по умолчанию
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-confirm
     * @param options
     * @returns {*}
     */
    configDefault: function (options = {}) {
        if (Reflect.has(options, 'config_uuid'))
            return this.post(`/delivery/config/default`, {...options});
        else
            throw Error(ErrorMessages.delivery.default)
    },

    /**
     * ✅ Получить таблицу выездов
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-confirm
     *
     * Query Parameters:
     * ---------------------------------------------------------------
     * | warehouse  | ID склада. По умолчанию основной склад
     * ---------------------------------------------------------------
     * | city       | ID города доставки. По умолчанию основной город
     * ---------------------------------------------------------------
     * @param options
     * @returns {*}
     */
    deliveryDepartures: function (options = {}) {
        if (
            Reflect.has(options, 'warehouse') &&
            Reflect.has(options, 'city')
        )
            return this.get(`/delivery/departures`, {...options});
        else
            throw Error(ErrorMessages.delivery.departures)
    },

    /**
     * ✅ Список получателей
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-receivers
     * @returns {*}
     */
    deliveryReceivers: function () {
        return this.get(`/delivery/receivers`);
    },

    /**
     * ✅ Создать получателя
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-confirm
     *
     * Метод возвращает статус 201 Created при успешном создании
     * контактного лица.
     *
     * Query Parameters:
     * -----------------------------------------------------------------
     * | surname     | Фамилия
     * -----------------------------------------------------------------
     * | name        | Имя
     * -----------------------------------------------------------------
     * | middle_name | Отчество
     * -----------------------------------------------------------------
     * | phone       | Телефон в формате 380998765432 либо +380998765432
     * -----------------------------------------------------------------
     * @param options
     * @returns {*}
     */
    deliveryReceiversAdd: function (options = {}) {
        if (
            Reflect.has(options, 'surname') &&
            Reflect.has(options, 'name') &&
            Reflect.has(options, 'middle_name') &&
            Reflect.has(options, 'phone')
        )
            return this.post(`/delivery/receivers`, {...options});
        else
            throw Error(ErrorMessages.delivery.receiversAdd)
    },
};

module.exports = Delivery;