'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function News(client) {
    let methods = ['get', 'post', 'put', 'delete'];
    for(let m of methods) {
        this[m] = client[m]
    }
}

News.prototype = {

    /***
     * Получить список новостей
     * https://developer.bm.parts/api/v2/news.html#get-news-list
     * Возвращает список новостей.
     *
     * Query Parameters (options = {}):
     * -----------------------------------------------------------
     * | page           | Страница выдачи.
     * -----------------------------------------------------------
     * | per_page       | Кол-во элементов в выдаче.
     * -----------------------------------------------------------
     *
     * Пример ответа:
     *
     {
            "news": [
                {
                    "image_url": "https://login.bm.parts/static/img/bm_logo_.svg",
                    "name": "Автомобиль года в Украине 2017: названы победители конкурса",
                    "uuid": "811C005056AC1EA911E85391BE8D8D17",
                    "description": "Машины оценивали компетентное жюри из 25 ведущих украинских автожурналистов ...",
                    "published_at": "2018-04-01T00:00:00Z"
                },
                ...
            ]
        }
     *
     */
    list: function (options = {}) {
        return this.get(`/news/list`, options);
    },


    /***
     * Получить новость по UUID
     * https://developer.bm.parts/api/v2/news.html#id4
     * Возвращает конкретную новость.
     *
     * Query Parameters (options = {}):
     * -----------------------------------------------------------
     * | news_uuid           | UUID новости.
     * -----------------------------------------------------------
     *
     * Пример ответа:
     *
        {
            "body": "В 2017 году легковым автомобилем года в Украине стал новый Renault Megane, который получил ...",
            "uuid": "811C005056AC1EA911E85393E244A48F",
            "description": "Современная спутниковая система безопасности Benish GUARD ...",
            "image_url": "https://cdn.bm.parts/promo/news/pogoda6.jpeg",
            "published_at": "2018-04-02T00:00:00Z",
            "name": "Самая популярная противоугонная система Benish GUARD стала еще более доступна"
            "gallery": [
                {
                  "is_video": true,
                  "resource_url": "https://youtu.be/dJV_XBJXFZU"
                }
            ]
        }
     *
     */
    article: function (options = {}) {
        if (Reflect.has(options, 'news_uuid')) {
            return this.get(`news/${options.news_uuid}`);
        }
        else {
            throw Error(ErrorMessages.news.news_uuid)
        }
    },

};

module.exports = News;
