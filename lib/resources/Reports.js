'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
function Reports(client) {
    this.get = client.get;
}

Reports.prototype = {

    /***
     * Оборот по брендам
     * https://developer.bm.parts/api/v2/reports.html#get-reports-brands-turnover
     *
     * -------------------------------------------------------
     * |   period        | Период выборки. По умолчанию: month
     * -------------------------------------------------------
     * @param options
     * @returns {*}
     */
    brandsTurnover: function(options = {"period": "month"}) {
        if( Reflect.has(options, 'period') )
            return this.get('reports/brands_turnover', options);
        else
            throw Error(ErrorMessages.reports.period)
    },

    /***
     * Сверка взаиморасчетов
     * https://developer.bm.parts/api/v2/reports.html#get-reports-reconciliation
     *
     * -------------------------------------------------------
     * | period        | Период выборки. По умолчанию: month
     * -------------------------------------------------------
     * @param options
     * @returns {*}
     */
    reconciliation: function(options = {"period": "month"}) {
        if( Reflect.has(options, 'period') )
            return this.get('reports/reconciliation', options);
        else
            throw Error(ErrorMessages.reports.period)
    },

    /***
     * Задолженность по срокам долга
     * https://developer.bm.parts/api/v2/reports.html#get-reports-reconciliation
     *
     * ------------------------------------------------------------------------------
     * | at_date        | Дата для расчета дней платежа. По умолчанию, текущая дата.
     * ------------------------------------------------------------------------------
     * ⚠ Предупреждение:
     * Формат возвращаемого значения может изменится!
     * ------------------------------------------------------------------------------
     *
     * @param options
     * @returns {*}
     */
    terms: function(options = {"at_date": new Date()}) {
        if( Reflect.has(options, 'at_date') )
            return this.get('reports/terms', options);
        else
            throw Error(ErrorMessages.reports.at_date)
    },

    /***
     * Сохранить сверку взаиморасчетов как файл
     * https://developer.bm.parts/api/v2/reports.html#get-reports-download-reconciliation-file-type
     *
     * ------------------------------------------------------------------------------
     * | period        | По умолчанию: month
     * ------------------------------------------------------------------------------
     * | file_type     | Тип файла. Возможны варианты: pdf, xlsx, xls.
     * ------------------------------------------------------------------------------
     * ⚠ Метод позволяет загрузить с сервера отчет в виде файла!
     * ------------------------------------------------------------------------------
     *
     * @param options
     * @returns {*}
     */
    reconciliationFile: function(options) {
        if( Reflect.has(options, 'period') && Reflect.has(options, 'file_type') )
            return this.get(`reports/download/reconciliation/${options.file_type}`, options);
        else
            throw Error(ErrorMessages.reports.reconciliation)
    }
};

module.exports = Reports;
