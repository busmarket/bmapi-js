'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;
const BmApiMethodError = ErrorMessages.BmApiMethodError;

function Claims(client) {
    let methods = ['get', 'post', 'put', 'delete'];
    for (let m of methods) {
        this[m] = client[m]
    }
}

const URL = '/claims';
Claims.prototype = {

    /***
     * Типы задач
     * https://developer.bm.parts/api/v2/claims.html#get-claims-issues-types
     * Возвращает список доступных типов для задач.
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * ------------------------------------------------------------------------------
     * ==============================================================================
     */
    types: function (options = {}) {
        return this.get(`/claims/issues/types`, options);
    },

    /***
     * Получить список жалоб клиента
     * https://developer.bm.parts/api/v2/claims.html#get-claims-issues
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * ------------------------------------------------------------------------------
     * ==============================================================================
     */
    getIssues: function (options = {}) {
        return this.get(`/claims/issues`, options);
    },

    /***
     * Создать обращение
     * https://developer.bm.parts/api/v2/claims.html#post-claims-issues
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  summary            | true        |              | Обязательный Краткое описание
     * ------------------------------------------------------------------------------
     * |  description        | true         |              | Детальное описание
     * ------------------------------------------------------------------------------
     * |  issue_type         | true         |              | Тип задачи см. Типы задач
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * Файлы прикрепленные к жалобе
     * https://developer.bm.parts/api/v2/claims.html#get-claims-issue-string-issue-id-attachments
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  issue_id           | true        |              | ID жалобы
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * Контент файла прикрепленного к задаче
     * https://developer.bm.parts/api/v2/claims.html#get-claims-issue-string-issue-id-attachment-string-attach-id-path-attach-name
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  issue_id           | true        |              | ID жалобы
     * ------------------------------------------------------------------------------
     * |  attach_id          | true        |              | ID файла
     * ------------------------------------------------------------------------------
     * |  attach_name        | true        |              | Имя файла
     * ------------------------------------------------------------------------------
     * ==============================================================================
     * Чтобы получить файл необходимо передать идентификатор жалобы, идентификатор и имя файла.
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
     * Прикрепить файл к обращению
     * https://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  issue_id           | true        |              | ID жалобы
     * ------------------------------------------------------------------------------
     * |  attachment         | true        |              | Form DATA with file
     * ------------------------------------------------------------------------------
     * ==============================================================================
     * *
     */
    addAttachment: function (options = {}) {
        // if (Reflect.has(options, 'attachment') && Reflect.has(options, 'issue_id'))
        //     if (options.attachment instanceof FormData)
        //         return this.post(`/claims/issue/${options.issue_id}/attachment`, options);
        //     else
        //         throw Error(ErrorMessages.claims.form_data);
        // else
        //     throw Error(ErrorMessages.claims.attachment)
        //
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['attachment', 'issue_id'],
            url: {
                base: URL,
                hash: 'get-claims-issue-string-issue-id-attachments'
            }
        });
        if (!statusError && options.attachment instanceof FormData)
            return this.post(`/claims/issue/${options.issue_id}/attachment`, options);
        else if (!options.attachment instanceof FormData) {
            BmApiMethodError('attachment', 'get-claims-issue-string-issue-id-attachments')
        }
    },

    /***
     * Список комментариев к жалобе
     * https://developer.bm.parts/api/v2/claims.html#get-claims-issue-string-issue-id-comments
     * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  issue_id           | true        |              | ID жалобы
     * ------------------------------------------------------------------------------
     * ==============================================================================
     * Возвращает список комментариев к обращению отсортированные по дате обновления.
     */
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
     * Добавить комментарий к задаче
     * https://developer.bm.parts/api/v2/claims.html#post-claims-issue-string-issue-id-comment
     *
     *  Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |  issue_id           | true        |              | ID жалобы
     * ------------------------------------------------------------------------------
     * |  comment            | true        |              | Обязательный Текст комментария
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     *
     * Метод возвращает статус 201 CREATED при успешном создании комментария,
     * загрузить обновленный список комментариев
     * можно по URL который возвращается в заголовке Location.
     *
     * ----------------------------------------------------------------
     * Пример ответа:
     *
     * HTTP/1.0 201 CREATED
     * Content-Type: application/json; charset=utf-8
     * Location: https://api.bm.parts/claims/issue/CLAIMS-1/comments/
     * ----------------------------------------------------------------
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
