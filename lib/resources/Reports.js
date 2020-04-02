'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;


function Reports(client) {
    this.get = client.get;
}

const URL = '/reports';

Reports.prototype = {

    /***
     * ✅ Оборот по брендам
     * 🔗 https://developer.bm.parts/api/v2/reports.html#get-reports-brands-turnover
     *
     */
    brandsTurnover: function (options = {"period": "month"}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['period'],
            url: {
                base: URL,
                hash: 'get-reports-brands-turnover'
            }
        });
        if (!statusError)
            return this.get(`${URL}/brands_turnover`, {period: 'month', ...options});
    },

    /***
     * ✅ Сверка взаиморасчетов
     * 🔗 https://developer.bm.parts/api/v2/reports.html#get-reports-reconciliation
     *
     */
    reconciliation: function (options = {"period": "month"}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['period'],
            url: {
                base: URL,
                hash: 'get-reports-reconciliation'
            }
        });
        if (!statusError)
            return this.get(`${URL}/reconciliation`, {period: 'month', ...options});
    },

    /***
     * ✅ Задолженность по срокам долга
     * 🔗 https://developer.bm.parts/api/v2/reports.html#get-reports-reconciliation
     *
     */
    terms: function (options = {"at_date": new Date()}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['at_date'],
            url: {
                base: URL,
                hash: 'get-reports-reconciliation'
            }
        });
        if (!statusError)
            return this.get('reports/terms', options);
    },

    /***
     * ✅ Сохранить сверку взаиморасчетов как файл
     * 🔗 https://developer.bm.parts/api/v2/reports.html#get-reports-download-reconciliation-file-type
     */
    reconciliationFile: function (options) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['period', 'file_type'],
            url: {
                base: URL,
                hash: 'get-reports-reconciliation'
            }
        });
        if (!statusError)
            return this.get(`reports/download/reconciliation/${options.file_type}`, options);
    }
};

module.exports = Reports;
