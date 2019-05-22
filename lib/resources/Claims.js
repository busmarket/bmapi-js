'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Claims(client) {
  let methods = ['get', 'post', 'put', 'delete'];
  for(let m of methods) {
    this[m] = client[m]
  }
}

Claims.prototype = {

  /***
   * Типы задач
   * https://developer.bm.parts/api/v2/claims.html#get-claims-issues-types
   * Возвращает список доступных типов для задач.
   *
   */
  types: function (options = {}) {
      return this.get(`/claims/issues/types`, options);
  },

  /***
   * Получить список жалоб клиента
   * https://developer.bm.parts/api/v2/claims.html#get--claims-issues-
   *
   */
  getIssues: function (options = {}) {
    return this.get(`/claims/issues`, options);
  },

  /***
   * Создать обращение
   * https://developer.bm.parts/api/v2/claims.html#post-claims-issues
   *
   * --------------------------------------------------------
   * summary      |   Обязательный Краткое описание
   * --------------------------------------------------------
   * description  |   Детальное описание
   * --------------------------------------------------------
   * issue_type   |   Тип задачи см. Типы задач
   * --------------------------------------------------------
   */
  setIssues: function (options = {}) {
    return this.post(`/claims/issues`, options);
  },

  /***
   * Файлы прикрепленные к жалобе
   * https://developer.bm.parts/api/v2/claims.html#get--claims-issue-(string-issue_id)-attachments-
   *
   * --------------------------------------------------------
   * issue_id     |   ID жалобы
   * --------------------------------------------------------
   */
  attachments: function (options = {}) {
    if (Reflect.has(options, 'issue_id'))
      return this.get(`/claims/issue/${options.issue_id}/attachments`, options);
    else
      throw Error(ErrorMessages.claims.attachments)
  },

  /***
   * Прикрепить файл к обращению
   * https://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-attachment-
   *
   * ----------------------------------------------------------------
   * issue_id       |   ID жалобы
   * ----------------------------------------------------------------
   * attachment     |   Обязательный прикрепляемый файл.
   *                |
   *                |   Форму с файлом необходимо передавать
   *                |   POST запросом с типом multipart/form-data.
   * ----------------------------------------------------------------
   */
  attachment: function (options = {}) {
    if (Reflect.has(options, 'attachment') && Reflect.has(options, 'issue_id'))
      if(options.attachment instanceof FormData)
        return this.post(`/claims/issue/${options.issue_id}/attachment`, options);
      else
        throw Error(ErrorMessages.claims.form_data);
    else
      throw Error(ErrorMessages.claims.attachment)
  },

  /***
   * Список комментариев к жалобе
   * https://developer.bm.parts/api/v2/claims.html#get--claims-issue-(string-issue_id)-comments-
   *
   * ----------------------------------------------------------------
   * issue_id       |   ID жалобы
   * ----------------------------------------------------------------
   *
   * Возвращает список комментариев к обращению отсортированные по дате обновления.
   */
  getIssueComments: function (options = {}) {
    if (Reflect.has(options, 'issue_id'))
      return this.get(`/claims/issue/${options.issue_id}/comments`, options);
    else
      throw Error(ErrorMessages.claims.issue_comments)
  },

  /***
   * Добавить комментарий к задаче
   * https://developer.bm.parts/api/v2/claims.html#post--claims-issue-(string-issue_id)-comment-
   *
   * ----------------------------------------------------------------
   * issue_id       |   ID жалобы
   * ----------------------------------------------------------------
   * comment        |   Обязательный Текст комментария
   * ----------------------------------------------------------------
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
    if (Reflect.has(options, 'issue_id') && Reflect.has(options, 'comment'))
      return this.post(`/claims/issue/${options.issue_id}/comment/`, options);
    else
      throw Error(ErrorMessages.claims.set_issue_comment)
  },

};

module.exports = Claims;
