'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;
const BmApiMethodError = ErrorMessages.BmApiMethodError;

function Claims(client) {
    let methods = ['get', 'post', 'put', 'delete'];
    methods.map(item => {
        this[item] = client[item]
    })
}

const URL = '/claims';
Claims.prototype = {

    /***
     * ✅ Типы задач
     * 🔗 https://developer.bm.parts/api/v2/claims.html#get-claims-issues-types
     */
    types: function (options = {}) {
        return this.get(`/claims/issues/types`, options);
    },

    /***
     * ✅ Получить список жалоб клиента
     * 🔗 https://developer.bm.parts/api/v2/claims.html#get-claims-issues
     */
    getIssues: function (options = {}) {
        return this.get(`/claims/issues`, options);
    },

    /***
     * ✅ Создать обращение
     * 🔗 https://developer.bm.parts/api/v2/claims.html#post-claims-issues
     */
    setIssues: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['summary', 'description', 'issue_type'],
            url: {
                base: URL,
                hash: 'post-claims-issues'
            }
        });
        if (!statusError)
            return this.post(`/claims/issues`, options);
    },


    /***
     * ✅ Файлы прикрепленные к жалобе
     * 🔗 https://developer.bm.parts/api/v2/claims.html#get-claims-issue-string-issue-id-attachments
     */
    attachments: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['issue_id'],
            url: {
                base: URL,
                hash: 'get-claims-issue-string-issue-id-attachments'
            }
        });
        if (!statusError)
            return this.get(`/claims/issue/${options.issue_id}/attachments`, options);

    },

    /***
     * ✅ Контент файла прикрепленного к задаче
     * 🔗 https://developer.bm.parts/api/v2/claims.html#get-claims-issue-string-issue-id-attachment-string-attach-id-path-attach-name
     */
    claimAttachments: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['issue_id', 'attach_id', 'attach_name'],
            url: {
                base: URL,
                hash: 'get-claims-issue-string-issue-id-attachment-string-attach-id-path-attach-name'
            }
        });
        if (!statusError)
            return this.get(`${URL}/issue/${options.issue_id}/attachment/${options.attach_id}/${options.attach_name}`);

    },


    /***
     * ✅ Прикрепить файл к обращению
     * 🔗 https://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-
     * 
     */
    addAttachment: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['attachment', 'issue_id'],
            url: {
                base: URL,
                hash: 'get-claims-issue-string-issue-id-attachments'
            }
        });
        
        if (!statusError && options.attachment instanceof FormData) {
            return this.post(`/claims/issue/${options.issue_id}/attachment`, options);
        }
       
        if (!options.attachment instanceof FormData) {
            BmApiMethodError('attachment', 'get-claims-issue-string-issue-id-attachments')
        }
    },

    /***
     * ✅ Список комментариев к жалобе
     * 🔗 https://developer.bm.parts/api/v2/claims.html#get-claims-issue-string-issue-id-comments
     *
     * */
    getIssueComments: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['issue_id'],
            url: {
                base: URL,
                hash: 'get-claims-issue-string-issue-id-comments'
            }
        });

        if (!statusError)
            return this.get(`/claims/issue/${options.issue_id}/comments`, options);
    },

    /***
     * ✅ Добавить комментарий к задаче
     * 🔗 https://developer.bm.parts/api/v2/claims.html#post-claims-issue-string-issue-id-comment
     *
     */
    setIssueComment: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['issue_id', 'comment'],
            url: {
                base: URL,
                hash: 'post-claims-issue-string-issue-id-comment'
            }
        });
        if (!statusError)
            return this.post(`/claims/issue/${options.issue_id}/comment/`, options);

    },

};

module.exports = Claims;
