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
     * ✅ Изменить основной склад отгрузки
     * 🔗 https://developer.bm.parts/api/v2/profile.html#post-profile-change-warehouse
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
     * ✅ Список связанных контрагентов (включая текущего контрагента)
     * 🔗 https://developer.bm.parts/api/v2/profile.html#get-profile-bound-clients
     *
     */
    getBoundClients: function (options) {
        return this.get(`${URL}/bound_clients`, {client_as: 'obj', ...options});
    },

    /***
     * ✅ Получить настройки рассылок
     * 🔗 https://developer.bm.parts/api/v2/profile.html#get-profile-mailing
     *
     */
    getMailing: function () {
        return this.get(`${URL}/mailing`);
    },

    /***
     * ✅ Сохранить настройки рассылок
     * 🔗 https://developer.bm.parts/api/v2/profile.html#post-profile-mailing
     *
     */
    saveMailing: function (options = {}) {
        if (Reflect.ownKeys(options).length)
            return this.post(`${URL}/mailing`, options);
        else
            throw Error(ErrorMessages.profile.mailing_save)
    },

    /***
     * ✅ История поиска
     * 🔗 https://developer.bm.parts/api/v2/profile.html#get-profile-history
     */
    history: function (options = {}) {
        return this.get(`${URL}/history`, options);
    },

    /***
     * ✅ Переключиться в связанного контрагента
     * 🔗 https://developer.bm.parts/api/v2/profile.html#post-profile-masq
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
     * ✅ Данные профиля
     * 🔗 https://developer.bm.parts/api/v2/profile.html#get-profile-me
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
     * ✅ Обновить настройку приложения по ключу
     * 🔗 https://developer.bm.parts/api/v2/profile.html#post-profile-settings-string-app-name-update
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
     * ✅ Получить настройки клиентского приложения
     * 🔗 https://developer.bm.parts/api/v2/profile.html#get-profile-settings-string-app-name
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
     * ✅ Обновить настройку клиентского приложения
     * 🔗 https://developer.bm.parts/api/v2/profile.html#post-profile-settings-string-app-name
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
     * ✅ Создать настройку клиентского приложения
     * 🔗 https://developer.bm.parts/api/v2/profile.html#post-profile-settings-string-app-name
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
     * ✅ Удалить настройку клиентского приложения
     * 🔗 https://developer.bm.parts/api/v2/profile.html#delete-profile-settings-string-app-name
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
