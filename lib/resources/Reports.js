'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;


function Reports(client) {
    this.get = client.get;
}

const URL = '/reports';

Reports.prototype = {

    /***
     * Оборот по брендам
     * https://developer.bm.parts/api/v2/reports.html#get-reports-brands-turnover
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | period        |    true      |    month     | Период выборки.
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * Сверка взаиморасчетов
     * https://developer.bm.parts/api/v2/reports.html#get-reports-reconciliation
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | period        |    true      |    month     | Период выборки.
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * Задолженность по срокам долга
     * https://developer.bm.parts/api/v2/reports.html#get-reports-reconciliation
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | at_date        |    true      | текущая дата| Дата для расчета дней платежа.
     * ------------------------------------------------------------------------------
     * ==============================================================================

     * ⚠ Предупреждение:
     * Формат возвращаемого значения может изменится!
     * ------------------------------------------------------------------------------
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
     * Сохранить сверку взаиморасчетов как файл
     * https://developer.bm.parts/api/v2/reports.html#get-reports-download-reconciliation-file-type
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | period        |    true      |  month       | Период выборки.
     * ------------------------------------------------------------------------------
     * | file_type     |    true      |              | Тип файла. Возможны варианты: pdf, xlsx, xls.
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     * ⚠ Предупреждение:
     * Метод позволяет загрузить с сервера отчет в виде файла!!
     * ------------------------------------------------------------------------------
     *
     * @param options
     * @returns {*}
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
