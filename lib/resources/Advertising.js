'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Advertising(client) {
    this.get = client.get;
}

Advertising.prototype = {

    /***
     * Получить случайный баннер
     * https://developer.bm.parts/api/v2/advertising.html#get-advertising-banner-random
     *
     * Query Parameters (options = {}):
     * -----------------------------------------------------------
     * | banner_code    | Тип баннера (busmarket_, app, home, )
     * -----------------------------------------------------------
     * | advert         | ID Акции
     * -----------------------------------------------------------
     */
    bannerRandom: function (options = {}) {
        return this.get(`/advertising/banner/random`);
    },

    /***
     * Получить список баннеров
     * https://developer.bm.parts/api/v2/advertising.html#get-advertising-banners
     *
     * Query Parameters (options = {}):
     * -----------------------------------------------------------
     * | banner_code    | Тип баннера (busmarket_, app, home, )
     * -----------------------------------------------------------
     * | advert         | ID Акции
     * -----------------------------------------------------------
     */
    bannersList: function (options = {}) {
        return this.get(`/advertising/banners`);
    },

    /***
     * Получить список акций
     * https://developer.bm.parts/api/v2/advertising.html#get-advertising-list
     *
     * Метод возвращает список активных рекламных компаний.
     *
     * Query Parameters (options = {}):
     * -----------------------------------------------------------
     * | banner_code    | Тип баннера (busmarket_, app, home, )
     * -----------------------------------------------------------
     * |                | Список ID для фильтрации. Пример:
     * | promo          | ?promo=811C005056AC1EA911E853995D337585
     * |                | &promo=811C005056AC1EA911E853995D123456
     * -----------------------------------------------------------
     * | public         | Публичное описание акции.
     * -----------------------------------------------------------
     * |                | Фильтр по акциям может принимать значения
     * | filter         | current, archived, all.
     * |                | По умолчанию, current.
     * -----------------------------------------------------------
     * | page           | Страница выдачи.
     * -----------------------------------------------------------
     * | per_page       | Кол-во элементов в выдаче.
     * -----------------------------------------------------------
     *
     */
    list: function (options = {}) {
        return this.get(`/advertising/list`, options);
    },

    /***
     * Прогресс акции
     * https://developer.bm.parts/api/v2/advertising.html#get-advertising-promo-promo-uuid-progress
     *
     * Query Parameters (options = {}):
     * -----------------------------------------------------------
     * |                | ID акции (Обязательный).
     * | promo_uuid     | Чтобы получить прогресс по всем акциям
     * |                | используйте параметр _all
     * -----------------------------------------------------------
     *
     */
    progress: function (options = {}) {
        if (Reflect.has(options, 'promo_uuid')) {
            return this.get(`/advertising/promo/${options.promo_uuid}/progress`, options);
        }
        else {
            throw Error(ErrorMessages.advertising.progress)
        }
    },

    /***
     * Получить акцию
     * https://developer.bm.parts/api/v2/advertising.html#get-advertising-promo-promo-uuid
     *
     * Query Parameters (options = {}):
     * --------------------------------------------------------------
     * |                | ID акции (Обязательный).
     * | promo_uuid     | Чтобы получить прогресс по всем акциям
     * |                | используйте параметр _all
     * --------------------------------------------------------------
     * | public         | Публичное описание акции.
     * |                | Достаточно наличиия параметра без значения
     * --------------------------------------------------------------
     *
     */
    promo: function (options = {}) {
        if (Reflect.has(options, 'promo_uuid')) {
            return this.get(`/advertising/promo/${options.promo_uuid}`, options);
        }
        else {
            throw Error(ErrorMessages.advertising.progress)
        }
    },
};

module.exports = Advertising;
