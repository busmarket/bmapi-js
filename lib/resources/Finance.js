'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function Finance(client) {
    this.get = client.get;
}

const URL = '/finance';

Finance.prototype = {
    /***
     * ✅ История курсов валют
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-currencies-rates-history
     */
    historyRates: function () {
        return this.get(`${URL}/currencies/rates/history`);
    },

    /***
     * ✅ Текущие курсы валют
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-currencies-rates
     *
     */
    currenciesRates: function () {
        return this.get(`${URL}/currencies/rates`);
    },

    /***
     * ✅ Список валют
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-currencies-list
     *
     */
    currenciesList: function () {
        return this.get(`${URL}/currencies/list`);
    },

    /***
     * ✅ Список договоров контрагента
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-contracts-list
     *
     */
    contractsList: function () {
        return this.get(`${URL}/contracts/list`);
    },

    /***
     * ✅ Информация про договор
     * 🔗 https://developer.bm.parts/api/v2/finance.html#get-finance-contracts-list
     *
     */
    contracts: function (options = {}) {
            const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['contract_uuid'],
            url: {
                base: URL,
                hash: 'get-finance-contracts-list'
            }
        });
        if (!statusError)
            return this.get(`${URL}/contract/${options.contract_uuid}`);
    }
};

module.exports = Finance;
