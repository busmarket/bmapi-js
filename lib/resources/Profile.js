'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Profile(client) {
  let methods = ['get', 'post', 'put', 'delete'];
  for(let m of methods) {
    this[m] = client[m]
  }
}

Profile.prototype = {

  /***
   * Изменить основной склад отгрузки
   * https://developer.bm.parts/api/v2/profile.html#post-profile-change-warehouse
   *
   * Query Parameters (options = {}):
   * -----------------------------------------------------------
   * | warehouse_uuid   | ID Склада
   * -----------------------------------------------------------
   *
   * В случаи успешного изменения склада, вернет `status 200` и ответ:
   * { "result": true, "error": "" }
   *
   */
  changeWarehouse: function (options = {}) {
    if (Reflect.has(options, 'warehouse_uuid'))
      return this.post(`profile/change_warehouse`, options);
    else
      throw Error(ErrorMessages.profile.change_warehouse)
  },

  /***
   * Получить настройки рассылок
   * https://developer.bm.parts/api/v2/profile.html#get-profile-mailing
   *
   */
  mailingGet: function () {
    return this.get(`/profile/mailing`);
  },

  /***
   * Сохранить настройки рассылок
   * https://developer.bm.parts/api/v2/profile.html#post--profile-mailing
   *
   */
  mailingSave : function (options = {}) {
    if (Reflect.ownKeys(options).length)
      return this.post(`/profile/mailing`, options);
    else
      throw Error(ErrorMessages.profile.mailing_save)
  },

  /***
   * История поиска
   * https://developer.bm.parts/api/v2/profile.html#get--profile-history
   *
   * Query Parameters (options = {}):
   * -----------------------------------------------------------------------------------
   * | filter       | Указывает какие типы записей возвращать из истории.
   * |              | Может принимать значения vin, phrase or all. По умолчанию: all
   * -----------------------------------------------------------------------------------
   * | direction    | Направление сортировки, записи сортируются по дате.
   * |              | Может быть asc или desc. По умолчанию: desc
   * -----------------------------------------------------------------------------------
   * | per_page     | Количество записей возвращаемых за выдачу. По умолчанию, 30.
   * -----------------------------------------------------------------------------------
   * | page         | Страница выдачи.
   * -----------------------------------------------------------------------------------
   *
   * Response:
   *
   * {
   *   "history": [
   *     {
   *       "car_model": "",
   *       "is_vin": false,
   *       "searched_at": "2019-01-22T12:45:28Z",
   *       "search_string": "motul омыватель",
   *       "not_found": false
   *     }, ...
   *   ]
   * }
   *
   * -----------------------------------------------------------------------------------
   * | searched_at	      | Дата и время поиска.
   * -----------------------------------------------------------------------------------
   * | search_string	    | Поисковая строка
   * -----------------------------------------------------------------------------------
   * | is_vin	            | Признак, что это был поисковый запрос по VIN коду автомобиля.
   * -----------------------------------------------------------------------------------
   * | car_model	        | Марка и модель авто
   * -----------------------------------------------------------------------------------
   * | not_found	        | Поиск не вернул результаты
   * -----------------------------------------------------------------------------------
   *
   */
  history: function (options = {}) {
    return this.get(`profile/history`, options);
  },

  /***
   * Данные профиля
   * https://developer.bm.parts/api/v2/profile.html#get--profile-me
   */
  me: function (options = {}) {
    return this.get(`profile/me`, options);
  },

  /***
   * Получить настройки клиентского приложения
   * https://developer.bm.parts/api/v2/profile.html#get--profile-settings-(string-app_name)
   *
   * Query Parameters (options = {}):
   * ------------------------------------------
   * | app_name        | Название приложения
   * ------------------------------------------
   *
   */
  settingsGet: function (options = {}) {
    if (Reflect.has(options, 'app_name'))
      return this.get(`/profile/settings/${options.app_name}`);
    else
      throw Error(ErrorMessages.profile.app_name)
  },


  /***
   * Обновить настройку клиентского приложения
   * https://developer.bm.parts/api/v2/profile.html#post--profile-settings-(string-app_name)
   *
   * Query Parameters (options = {}):
   * ----------------------------------------------------------------------------------
   * | app_name        | Название приложения
   * ----------------------------------------------------------------------------------
   * | version         | Версия приложения (Опционально)
   * ----------------------------------------------------------------------------------
   * | settings        | Валидная JSON-строка с настройками (не более 2000 символов)
   * ----------------------------------------------------------------------------------
   *
   */
  settingsSave: function (options = {}) {
    if (Reflect.has(options, 'app_name') && Reflect.has(options, 'settings'))
      return this.post(`/profile/settings/${options.app_name}`);
    else
      throw Error(ErrorMessages.profile.setting_save)
  },


  /***
   * Создать настройку клиентского приложения
   * https://developer.bm.parts/api/v2/profile.html#post--profile-settings-(string-app_name)
   *
   * Query Parameters (options = {}):
   * ----------------------------------------------------------------------------------
   * | app_name        | Название приложения
   * ----------------------------------------------------------------------------------
   * | version         | Версия приложения (Опционально)
   * ----------------------------------------------------------------------------------
   * | settings        | Валидная JSON-строка с настройками (не более 2000 символов)
   * ----------------------------------------------------------------------------------
   *
   */
  settingsCreate: function (options = {}) {
    if (Reflect.has(options, 'app_name') && Reflect.has(options, 'settings'))
      return this.put(`/profile/settings/${options.app_name}`, options);
    else
      throw Error(ErrorMessages.profile.setting_save)
  },


  /***
   * Удалить настройку клиентского приложения
   * https://developer.bm.parts/api/v2/profile.html#delete--profile-settings-(string-app_name)
   *
   * Query Parameters (options = {}):
   * ------------------------------------------
   * | app_name        | Название приложения
   * ------------------------------------------
   *
   */
  settingsDelete: function (options = {}) {
    if (Reflect.has(options, 'app_name'))
      return this.delete(`/profile/settings/${options.app_name}`, options);
    else
      throw Error(ErrorMessages.profile.app_name)
  },

};

module.exports = Profile;
