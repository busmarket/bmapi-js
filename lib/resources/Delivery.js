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
};

module.exports = Delivery;