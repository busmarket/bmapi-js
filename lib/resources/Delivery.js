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
     *
     * Query Parameters:
     * -----------------------------------------------------------------
     * | q               | Фильтр по названию города
     * -----------------------------------------------------------------
     * | page            | Навигация
     * -----------------------------------------------------------------
     * | per_page        | Кол-во ел. на странице
     * -----------------------------------------------------------------
     * 
     * @returns {*}
     */
    deliveryReceivers: function (options = {}) {
        return this.get(`/delivery/receivers`, {...options});
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
        try {
            return this.post(`/delivery/receivers`, {...options});
        } catch(err) {
            throw Error(ErrorMessages.delivery.receiversAdd)
        }
    },

    /**
     * ✅ Список перевозчиков
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get--delivery-carriers
     * 
     */
    deliveryCarriers: function() {
        return this.get(`/delivery/carriers`)
    },

    /**
     * ✅ Список областей
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-regions
     * 
     */
    deliveryRegions: function() {
        return this.get(`/delivery/regions`)
    },

    /**
     * ✅ Список городов области
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-region-string-region-uuid-cities
     *
     * Query Parameters:
     * -----------------------------------------------------------------
     * | region_uuid     | Область
     * -----------------------------------------------------------------
     * | q               | Фильтр по названию города
     * -----------------------------------------------------------------
     * | page            | Навигация
     * -----------------------------------------------------------------
     * | per_page        | Кол-во ел. на странице
     * -----------------------------------------------------------------
     * 
     * Если параметр region_uuid указан не верно 
     * будет возвращен ответ 422 Unprocessable Entity
     * 
     */
    deliveryRegionCities: function(options = {}) {
        if( Reflect.has(options, 'region_uuid') )
            return this.get(`/delivery/region/${options.region_uuid}/cities`, {...options})
        else
            throw Error(ErrorMessages.delivery.deliveryRegionCities)

    },

    /**
     * ✅ Настройки доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-configs
     * 
     */
    deliveryConfigs: function() {
        return this.get(`/delivery/configs`)
    },

    /**
     * ✅ Создать настройку доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-configs
     * 
     */
    createDeliveryConfigs: function(options = {}) {
        try {
            return this.post(`/delivery/configs`)
        } catch(err) {
            throw Error(ErrorMessages.delivery.createDeliveryConfigs)
        }
    },

    /**
     * ✅ Отследить ТТН
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-track
     *
     * Query Parameters:
     * -----------------------------------------------------------------
     * | tracking_number     | Номер ТТН перевозчика, либо внутренний 
     * |                     | номер ТТН документа
     * -----------------------------------------------------------------
     * 
     */
    deliveryTrack: function(options = {}) {
        if ( Reflect.has(options, 'tracking_number') )
            return this.post(`/delivery/track`, {...options})
        else
            throw Error(ErrorMessages.delivery.deliveryTrack)
    },

    /**
     * ✅ Удалить контактное лицо
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#delete-delivery-receiver-string-receiver-uuid
     *
     * Query Parameters:
     * -----------------------------------------------------------------
     * | receiver_uuid     | ID контактного лица (Обязательный)
     * -----------------------------------------------------------------
     * 
     * В случаи успешного выполнения возвращает 204 No Content
     * 
     */
    deliveryDeleteReceiver: function(options = {}) {
        if ( Reflect.has(options, 'receiver_uuid') )
            return this.delete(`/delivery/receiver/${options.receiver_uuid}`, {...options})
        else
            throw Error(ErrorMessages.delivery.deliveryDeleteReceiver)
    },

    /**
     * ✅ Информация о перевозчике
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carrier-string-carrier-uuid
     *
     * Query Parameters:
     * -----------------------------------------------------------------
     * | carrier_uuid     | ID перевозчика
     * -----------------------------------------------------------------
     * 
     * Возвращает детальную информацию про перевозичка 
     * и данные для возврата товара этим перевозчиком.
     * 
     */
    deliveryCarrier: function(options = {}) {
        if ( Reflect.has(options, 'carrier_uuid') )
            return this.get(`/delivery/carrier/${options.carrier_uuid}`, {...options})
        else
            throw Error(ErrorMessages.delivery.deliveryCarrier)
    },

    /**
     * ✅ Удалить настройку доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#delete-delivery-config-string-config-uuid
     *
     * Query Parameters:
     * -----------------------------------------------------------------
     * | config_uuid     | ID настройки доставки
     * -----------------------------------------------------------------
     * 
     * В случаи успешного выполнения возвращает 200 Success
     * 
     */
    deliveryDeleteConfig: function(options = {}) {
        if ( Reflect.has(options, 'config_uuid') )
            return this.delete(`/delivery/config/${options.config_uuid}`, {...options})
        else
            throw Error(ErrorMessages.delivery.deliveryDeleteConfig)
    },


};

module.exports = Delivery;