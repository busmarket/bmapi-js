'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Documents(client) {
    this.get = client.get;
}

Documents.prototype = {
    /***
     * ✅ Типы документов
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-filters-types
     */
    filterTypes: function () {
        return this.get(`/documents/filters/types`);
    },

    /***
     * ✅ Быстрый выбор дат
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-filters-dates
     */
    filterDates: function () {
        return this.get(`/documents/filters/dates`);
    },

    /***
     * ✅ Журнал документов сгруппированный по датам
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-grouped
     *
     * Query Parameters (options = {}):
     * --------------------------------------------------------------------------
     * | direction      | Направление сортировки. Может быть asc или desc.
     *  |                | По умолчанию: desc.
     * --------------------------------------------------------------------------
     * | period         |  Период выборки. По умолчанию: month.
     * --------------------------------------------------------------------------
     * | type           |  Фильтр по типу документа. По умолчанию: все документы.
     * --------------------------------------------------------------------------
     * | q              |  Фильтр по номеру документа.
     * --------------------------------------------------------------------------
     */
    filterGrouped: function (options = {}) {
        return this.get(`/documents/grouped`, options);
    },

    /***
     * ✅ Журнал документов сгруппированный по датам
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-grouped
     *
     * Query Parameters (options = {}):
     * --------------------------------------------------------------------------
     * | direction      | Направление сортировки. Может быть asc или desc.
     * |                | По умолчанию: desc.
     * --------------------------------------------------------------------------
     * | period         |  Период выборки. По умолчанию: month.
     * --------------------------------------------------------------------------
     * | type           |  Фильтр по типу документа. По умолчанию: все документы.
     * --------------------------------------------------------------------------
     * | q              |  Фильтр по номеру документа.
     * --------------------------------------------------------------------------
     * | page           | Страница выдачи.
     * --------------------------------------------------------------------------
     * | per_page       | Кол-во элементов в выдаче.
     * --------------------------------------------------------------------------
     */
    list: function (options = {}) {
        return this.get(`/documents/list`, options);
    },

    /***
     * ✅ Состояние рекламации
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-reclamation-string-act-uuid
     *
     * Query Parameters (options = {}):
     * -------------------------------------------------
     * | act_uuid      |    ID документа рекламации
     * -------------------------------------------------
     */
    reclamationStatus: function (options = {}) {
        if (Reflect.has(options, 'act_uuid'))
            return this.get(`/documents/reclamation/${options.act_uuid}`);
        else
            throw Error(ErrorMessages.documents.act_uuid)
    },

    /***
     * ✅ Сохранить документ
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-download-string-type-string-uuid-string-file-type
     *
     * Query Parameters (options = {}):
     * ---------------------------------------------------------------
     * | type       |    Тип документа
     * ---------------------------------------------------------------
     * | uuid       |    ID документа
     * ---------------------------------------------------------------
     * | file_type  |    Тип файла. Возможны варианты: pdf, xlsx, csv.
     * ---------------------------------------------------------------
     */
    downloadDocument: function (options = {}) {
        if (
            Reflect.has(options, 'type') &&
            Reflect.has(options, 'uuid') &&
            Reflect.has(options,'file_type')
        )
            return this.get(`/documents/download/${options.type}/${options.uuid}/${options.file_type}`);
        else
            throw Error(ErrorMessages.documents.download)
    },

    /***
     * ✅ Получить документ по ссылке
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-string-type-string-uuid
     *
     * Query Parameters (options = {}):
     * ---------------------------------------------------------------
     * | type       |    Тип документа
     * ---------------------------------------------------------------
     * | uuid       |    ID документа
     * ---------------------------------------------------------------
     */
    getDocument: function (options = {}) {
        if (
            Reflect.has(options, 'type') &&
            Reflect.has(options, 'uuid')
        )
            return this.get(`/documents/${options.type}${options.uuid}/`);
        else
            throw Error(ErrorMessages.documents.get_document)
    }
};

module.exports = Documents;