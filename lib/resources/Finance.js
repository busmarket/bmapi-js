'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Finance(client) {
    this.get = client.get;
}
const URL = '/finance';

Finance.prototype = {
    /***
     * ✅ История курсов валют
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-currencies-rates-history
     *
     * Возвращает историю только по определенным валютам,
     * набор валют указать нельзя
     */
    historyRates: function () {
        return this.get(`${URL}/currencies/rates/history`);
    },

    /***
     * ✅ Текущие курсы валют
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-currencies-rates
     */
    currenciesRates: function () {
        return this.get(`${URL}/currencies/rates`);
    },

    /***
     * ✅ Список валют
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-currencies-list
     */
    currenciesList: function () {
        return this.get(`${URL}/currencies/list`);
    },

    /***
     * ✅ Список договоров контрагента
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-contracts-list
     */
    contractsList: function () {
        return this.get(`${URL}/contracts/list`);
    },

    /***
     * ✅ Информация про договор
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-contracts-list
     *
     * Query Parameters (options = {}):
     * ---------------------------------------------------------------
     * | contract_uuid   |   ID договора или ключевое слово default
     * ---------------------------------------------------------------
     */
    contracts: function (options = {}) {
        const requireParameters = ['contract_uuid'];
        const optionsKeys = Object.keys(options);
        const url=`${URL}.html#get-finance-contracts-list`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters,url));
        else
            return this.get(`${URL}/contract/${options.contract_uuid}`);
    }
};

module.exports = Finance;
