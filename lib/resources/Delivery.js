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
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_____|__isRequired__|___default____|___description     |
     * ================================================================
     * | city        |     true     |              |  ID Области       |
     * ----------------------------------------------------------------
     * | carrier     |     true     |              |  ID перевозчика   |
     * ================================================================
     *
     * Если параметр `city` или `carrier` указан не верно
     * будет возвращен ответ [422 Unprocessable Entity]
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
     *
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY____|||_isRequired_|||__default___|||__description     |
     * ================================================================
     * | region      |     true     |              |  ID Области       |
     * ----------------------------------------------------------------
     * | carrier     |     true     |              |  ID перевозчика   |
     * ----------------------------------------------------------------
     * | is_address  |     false    |   false      |  Адресная доставка|
     * ================================================================
     *
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____|||_isRequired_|||__default___|||__description___________________|
     * ==============================================================================
     * | code        |     true     |              | Код подтверждения из сообщения _|
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     * *В случаи успешного подтверждения возвращаеться статус 201
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY_____|||_isRequired_|||__default___|||__description___________________|
     * ==============================================================================
     * | config_uuid  |     true     |              |ID настройки доставки_
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY_____|||_isRequired_|||__default___|||__description__________________|
     * ==============================================================================
     * | city         |     true     |              | ID Города
     * ------------------------------------------------------------------------------
     * | street       |     true     |              | Частичное название улицы
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY_____|||_isRequired_|||_________default___________|||__description_
     * ==============================================================================
     * | warehouse    |    true      | По умолчанию основной склад | ID склада
     * ------------------------------------------------------------------------------
     * | city         |    true      | По умолчанию основной город | ID города доставки
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * | q            |   false      |           | Фильтр по названию города
     * ------------------------------------------------------------------------------
     * | page         |   false      |           | Навигация
     * ------------------------------------------------------------------------------
     * | per_page     |   false      |           | Кол-во ел. на странице
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    deliveryReceivers: function (options = {}) {
        return this.get(`${URL}/receivers`, {...options});

    },


    /**
     * ✅ Создать получателя
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-receivers
     *
     * Метод возвращает статус 201 Created при успешном создании
     * контактного лица.
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * | surname      |  true        |           | Фамилия
     * ------------------------------------------------------------------------------
     * | name         |  true        |           | Имя
     * ------------------------------------------------------------------------------
     * | middle_name  |  true        |           | Отчество
     * ------------------------------------------------------------------------------
     * | phone        |  true        |           | Телефон в формате 380966477711 либо +380956477711
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     *  * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * |              |              |           |
     * ==============================================================================
     */
    deliveryCarriers: function () {
        return this.get(`${URL}/carriers`)
    },


    /**
     * ✅ Список областей
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-regions
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * |              |              |           |
     * ==============================================================================
     */
    deliveryRegions: function () {
        return this.get(`${URL}/regions`)
    },


    /**
     * ✅ Настройки доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-configs
     *
     * * Query Parameters (options = {}):
     * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * |              |              |           |
     * ==============================================================================
     */
    deliveryConfigs: function () {
        return this.get(`${URL}/configs`)
    },


    /**
     * ✅ Создать настройку доставки
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-configs
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * | receiver          |    true      |           | ID контактного лица
     * ------------------------------------------------------------------------------
     * | city              |    true      |           | ID города
     * ------------------------------------------------------------------------------
     * | carrier           |    true      |           | ID перевозчика
     * ------------------------------------------------------------------------------
     * | carrier_warehouse |    true      |           | ID города
     * ------------------------------------------------------------------------------
     * | full_insurance    |              |  false    | Полная страховка
     * ------------------------------------------------------------------------------
     * | is_default        |    true      |           | Настройка по умолчанию
     * ------------------------------------------------------------------------------
     * | address           |    true      |           | Адрес для адресной доставки
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * | tracking_number   |    true      |           | Номер ТТН перевозчика, либо
     *                                                  внутренний номер ТТН документа
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * | region_uuid       |  true        |           | Область
     * ------------------------------------------------------------------------------
     * | q                 |  false       |           | Фильтр по названию города
     * ------------------------------------------------------------------------------
     * | page              |  false       |           | Навигация
     * ------------------------------------------------------------------------------
     * | per_page          |  false       |           | Кол-во ел. на странице
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     * Если параметр region_uuid указан не верно
     * будет возвращен ответ 422 Unprocessable Entity
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * | receiver_uuid     |  true        |           | ID контактного лица (Обязательный)
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     * В случаи успешного выполнения возвращает 204 No Content
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * | carrier_uuid      |  true        |           | ID перевозчика
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     * Возвращает детальную информацию про перевозичка
     * и данные для возврата товара этим перевозчиком.
     *
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
     * ==============================================================================
     * | config_uuid       |  true        |           | ID настройки доставки
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
