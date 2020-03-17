'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function Profile(client) {
    let methods = ['get', 'post', 'put', 'delete'];
    for (let m of methods) {
        this[m] = client[m]
    }
}

const URL = '/profile';
Profile.prototype = {

    /***
     * Изменить основной склад отгрузки
     * https://developer.bm.parts/api/v2/profile.html#post-profile-change-warehouse
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * | warehouse_uuid | true         |              | ID Склада
     * -------------------------------------------------------------------
     * ================================================================
     *
     * В случаи успешного изменения склада, вернет `status 200` и ответ:
     * { "result": true, "error": "" }
     *
     */
    changeWarehouse: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['warehouse_uuid'],
            url: {
                base: URL,
                hash: 'post-profile-change-warehouse'
            }
        });
        if (!statusError)
            return this.post(`${URL}/change_warehouse`, options);

    },

    /***
     * Список связанных контрагентов (включая текущего контрагента)
     * https://developer.bm.parts/api/v2/profile.html#get-profile-bound-clients
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * | clients_as     |    true      |   obj        | Возвращаемый формат даных о клиентах.
     * |                |              |              | Возможные варианты: obj, arr
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    getBoundClients: function (options) {
        return this.get(`${URL}/bound_clients`, {client_as: 'obj', ...options});
    },

    /***
     * Получить настройки рассылок
     * https://developer.bm.parts/api/v2/profile.html#get-profile-mailing
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    getMailing: function () {
        return this.get(`${URL}/mailing`);
    },

    /***
     * Сохранить настройки рассылок
     * https://developer.bm.parts/api/v2/profile.html#post-profile-mailing
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    saveMailing: function (options = {}) {
        if (Reflect.ownKeys(options).length)
            return this.post(`${URL}/mailing`, options);
        else
            throw Error(ErrorMessages.profile.mailing_save)
    },

    /***
     * История поиска
     * https://developer.bm.parts/api/v2/profile.html#get-profile-history
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -----------------------------------------------------------------------------------
     * | filter         |  false       |              | Указывает какие типы записей возвращать из истории.
     * |                |              |              | Может принимать значения vin, phrase or all. По умолчанию: all
     * -----------------------------------------------------------------------------------
     * | direction      |  false       |              |  Направление сортировки, записи сортируются по дате.
     * |                |              |              |  Может быть asc или desc. По умолчанию: desc
     * -----------------------------------------------------------------------------------
     * | per_page       |  false       |              |  Количество записей возвращаемых за выдачу. По умолчанию, 30.
     * -----------------------------------------------------------------------------------
     * | page           |  false       |              |  Страница выдачи.
     * -----------------------------------------------------------------------------------
     *
     * Response:
     *
     * {
     *   "history": [
     *     {
     *       "car_model": "",
     *       "is_vin": false,
     *       "searched_at": "2019-01-22T12:45:28Z",
     *       "search_string": "motul омыватель",
     *       "not_found": false
     *     }, ...
     *   ]
     * }
     *
     * -----------------------------------------------------------------------------------
     * | searched_at          | Дата и время поиска.
     * -----------------------------------------------------------------------------------
     * | search_string        | Поисковая строка
     * -----------------------------------------------------------------------------------
     * | is_vin                | Признак, что это был поисковый запрос по VIN коду автомобиля.
     * -----------------------------------------------------------------------------------
     * | car_model            | Марка и модель авто
     * -----------------------------------------------------------------------------------
     * | not_found            | Поиск не вернул результаты
     * -----------------------------------------------------------------------------------
     *
     */
    history: function (options = {}) {
        return this.get(`${URL}/history`, options);
    },

    /***
     * Переключиться в связанного контрагента
     * https://developer.bm.parts/api/v2/profile.html#post-profile-masq
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * | client_uuid    |   true       |              | ID связанного контрагента
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    profileMasq: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['client_uuid'],
            url: {
                base: URL,
                hash: 'post-profile-masq'
            }
        });
        if (!statusError)
            return this.post(`${URL}/masq`, options);
    },

    /***
     * Данные профиля
     * https://developer.bm.parts/api/v2/profile.html#get-profile-me
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * | clients_as     |    true      |   obj        | Возвращаемый формат даных о клиентах.
     * |                |              |              | Возможные варианты: obj, arr
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    me: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['clients_as'],
            url: {
                base: URL,
                hash: 'get-profile-me'
            }
        });
        if (!statusError)
            return this.get(`${URL}/me`, {clients_as: 'obj', ...options});
    },

    /***
     * Обновить настройку приложения по ключу
     * https://developer.bm.parts/api/v2/profile.html#post-profile-settings-string-app-name-update
     *
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * |  app_name      |    true      |              |  Название приложения
     * -------------------------------------------------------------------
     * ================================================================
     */
    updateApp: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['app_name'],
            url: {
                base: URL,
                hash: 'post-profile-settings-string-app-name-update'
            }
        });
        if (!statusError)
            return this.post(`/${URL}/settings/${options.app_name}/update`);
    },

    /***
     * Получить настройки клиентского приложения
     * https://developer.bm.parts/api/v2/profile.html#get-profile-settings-string-app-name
     *
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * |  app_name      |              |              |  Название приложения
     * -------------------------------------------------------------------
     * ================================================================
     */
    settingsGet: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['app_name'],
            url: {
                base: URL,
                hash: 'get-profile-settings-string-app-name'
            }
        });
        if (!statusError)
            return this.get(`/${URL}/settings/${options.app_name}`);
    },

    /***
     * Обновить настройку клиентского приложения
     * https://developer.bm.parts/api/v2/profile.html#post-profile-settings-string-app-name
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * | app_name       | true         |              | Название приложения
     * -------------------------------------------------------------------
     * | version        | false        |              | Версия приложения (Опционально)
     * -------------------------------------------------------------------
     * | settings       | true         |              | Валидная JSON-строка с настройками (не более 2000 символов)
     * -------------------------------------------------------------------
     * ================================================================
     */
    settingsSave: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['app_name', 'settings'],
            url: {
                base: URL,
                hash: 'post-garage-car-string-car-uuid'
            }
        });
        if (!statusError)
            return this.post(`${URL}/settings/${options.app_name}`);

    },

    /***
     * Создать настройку клиентского приложения
     * https://developer.bm.parts/api/v2/profile.html#post-profile-settings-string-app-name
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * | app_name       | true         |              | Название приложения
     * -------------------------------------------------------------------
     * | version        | false        |              | Версия приложения (Опционально)
     * -------------------------------------------------------------------
     * | settings       | true         |              | Валидная JSON-строка с настройками (не более 2000 символов)
     * -------------------------------------------------------------------
     * ================================================================
     */
    settingsCreate: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['app_name', 'settings'],
            url: {
                base: URL,
                hash: 'post-garage-car-string-car-uuid'
            }
        });
        if (!statusError)
            return this.post(`${URL}/settings/${options.app_name}`);

    },

    /***
     * Удалить настройку клиентского приложения
     * https://developer.bm.parts/api/v2/profile.html#delete-profile-settings-string-app-name
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * | app_name       | true         |              | Название приложения
     * -------------------------------------------------------------------
     * ================================================================
     */
    settingsDelete: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['app_name'],
            url: {
                base: URL,
                hash: 'delete-profile-settings-string-app-name'
            }
        });
        if (!statusError)
             return this.delete(`${URL}/settings/${options.app_name}`, options);

    },
};

module.exports = Profile;
