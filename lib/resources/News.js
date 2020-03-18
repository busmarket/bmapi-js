'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function News(client) {
    this.get = client.get
}

const URL='/news'
News.prototype = {

    /***
     * Получить список новостей
     * https://developer.bm.parts/api/v2/news.html#get-news-list
     * Возвращает список новостей.
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
          * ==============================================================================
     * | page                | false        |              | Сираница выдачи
     * ------------------------------------------------------------------------------
     * | per_page            | false        |              | К-ко на странице
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    list: function (options = {}) {
        return this.get(`${URL}/list`, options);
    },


    /***
     * Получить новость по UUID
     * https://developer.bm.parts/api/v2/news.html#id4
     * Возвращает конкретную новость.
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * |   news_uuid         |   true      |              | UUID новости
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     *
     */
    article: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['news_uuid'],
            url: {
                base: URL,
                hash: 'uuid'
            }
        });
        if (!statusError)
            return this.get(`${URL}/${options.news_uuid}`);
    },

};

module.exports = News;
