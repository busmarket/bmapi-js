'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Finance(client) {
    this.get = client.get;
}

Finance.prototype = {
    /***
     * ✅ История курсов валют
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-currencies-rates-history
     *
     * Возвращает историю только по определенным валютам,
     * набор валют указать нельзя
     */
    historyRates: function () {
        return this.get(`/finance/currencies/rates/history`);
    },

    /***
     * ✅ Текущие курсы валют
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-currencies-rates
     */
    currenciesRates: function () {
        return this.get(`/finance/currencies/rates`);
    },

    /***
     * ✅ Список валют
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-currencies-list
     */
    currenciesList: function () {
        return this.get(`/finance/currencies/list`);
    },

    /***
     * ✅ Список договоров контрагента
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-contracts-list
     */
    contractsList: function () {
        return this.get(`/finance/contracts/list`);
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
    contracts: function (options = {contract_uuid: 'default'}) {
        return this.get(`/finance/contract/${options.contract_uuid}`);
    }
};

module.exports = Finance;