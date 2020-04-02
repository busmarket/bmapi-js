'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function Company(client) {
    this.post = client.post;
    this.get = client.get

}

const URL = '/company';


Company.prototype = {

    /***
     * ✅ Оповестить менеджера
     * 🔗 https://developer.bm.parts/api/v2/company.html#post-company-manager-notify
     *
     */
    managerNotify: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['text'],
            url: {
                base: URL,
                hash: 'post-company-manager-notify'
            }
        });
        if (!statusError)
            return this.post(`${URL}/manager/notify`, {...options});
    },

    /***
     * ✅ Контактная информация про компанию
     * 🔗 https://developer.bm.parts/api/v2/company.html#get-company-contact-info
     *
     */
    getContacts: function (options = {}) {
        return this.get(`${URL}/contact_info`);
    },


    /***
     * ✅ Список складов
     * 🔗 https://developer.bm.parts/api/v2/company.html#get-company-warehouses
     */
    getWarehouses: function (options = {}) {
        return this.get(`${URL}/warehouses`);
    },


    /***
     * ✅ Заказать обратный вызов
     * 🔗 https://developer.bm.parts/api/v2/company.html#get-company-callback
     *
     */
    callBack: function (options = {}) {
        return this.get(`${URL}/callback`);
    },


    /***
     * ✅ Информация про Вашего менеджера
     * 🔗 https://developer.bm.parts/api/v2/company.html#get-company-manager
     *
     */
    managerInfo: function (options = {}) {
        return this.get(`${URL}/manager`);
    },
};
module.exports = Company;
