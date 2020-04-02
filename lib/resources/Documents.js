'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;


const URL = '/documents'

function Documents(client) {
    this.get = client.get;
}

Documents.prototype = {

    /**
     * ✅ Группы документов.
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-filters-groups
     *
     */
    filterGroups: function () {
        return this.get(`${URL}/filters/groups`);
    },


    /**
     * ✅ Типы документов.
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-filters-types
     *
     */
    filterTypes: function () {
        return this.get(`${URL}/filters/types`);
    },


    /**
     * ✅ Быстрый выбор дат.
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-filters-dates
     *
     */
    filterDates: function () {
        return this.get(`${URL}/filters/dates`);
    },


    /**
     * ✅ Журнал документов сгруппированный по датам.
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-grouped
     *
     */
    filterGrouped: function (options = {}) {
        return this.get(`/documents/grouped`, options);
    },


    /***
     * ✅ Список документов
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-list
     *
     */
    listDocuments: function (options = {}) {
        return this.get(`/documents/list`, options);
    },


    /***
     * ✅ Состояние рекламации
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-reclamation-string-act-uuid
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default      |||__description_
     * ==============================================================================
     * | act_uuid            | true         |                 |  ID документа рекламации
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    reclamationStatus: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['act_uuid'],
            url: {
                base: URL,
                hash: 'get-trainings-list'
            }
        });
        if (!statusError)
            return this.get(`${URL}/reclamation/${options.act_uuid}`);
    },


    /***
     * ✅ Сохранить документ
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-download-string-type-string-uuid-string-file-type
     *
     */
    downloadDocument: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['type', 'uuid', 'file_type'],
            url: {
                base: URL,
                hash: 'get-documents-download-string-type-string-uuid-string-file-type'
            }
        });
        if (!statusError)
            return this.get(`${URL}/download/${options.type}/${options.uuid}/${options.file_type}`);
    },


    /***
     * ✅ Получить документ по ссылке
     * 🔗 https://developer.bm.parts/api/v2/documents.html#get-documents-string-type-string-uuid
     */
    getDocument: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['type', 'uuid'],
            url: {
                base: URL,
                hash: 'get-documents-string-type-string-uuid'
            }
        });
        if (!statusError)
            return this.get(`${URL}/${options.type}${options.uuid}/`);
    }
};

module.exports = Documents;
