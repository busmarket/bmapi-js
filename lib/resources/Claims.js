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
   * Контент файла прикрепленного к задаче
   * https://developer.bm.parts/api/v2/claims.html#get--claims-issue-(string-issue_id)-attachment-(string-attach_id)-(path-attach_name)
   *
   * --------------------------------------------------------
   * issue_id       |   ID жалобы
   * --------------------------------------------------------
   * attach_id      |   ID файла
   * --------------------------------------------------------
   * attach_name    |   Имя файла
   * --------------------------------------------------------
   */
  attachment: function (options = {}) {
    if (Reflect.has(options, 'issue_id') && Reflect.has(options, 'attach_id') && Reflect.has(options, 'attach_name'))
      return this.get(`/claims/issue/${options.issue_id}/attachment/${options.attach_id}/${options.attach_name}`, options);
    else
      throw Error(ErrorMessages.claims.attachment)
  },

};

module.exports = Claims;
