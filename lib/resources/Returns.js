'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;


function Returns(client) {
    this.get = client.get;
    this.post = client.post;
}

const URL = '/returns';
Returns.prototype = {


    /***
     * ✅ Список товаров для возврата.
     * 🔗 https://developer.bm.parts/api/v2/returns.html#post-trainings-register
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    returnsList: function () {
        return this.get(`${URL}/products`);
    },

    /***
     * ✅ Список причин возврата.
     * 🔗 https://developer.bm.parts/api/v2/returns.html#post-returns-request
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * params: [{“code”: “000053284”, “cause_code”: “000026117”, “count”: 3}]
     *
     * | code                |     true     |               |  код товара
     * ------------------------------------------------------------------------------
     * | cause_code          |     true     |               |    reason code
     * ------------------------------------------------------------------------------
     * | count               |     true     |               |количество
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    returnsRequestCreate: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: [],
            url: {
                base: URL,
                hash: 'post-returns-request'
            }
        });
        if (!statusError)
            return this.post(`${URL}/request`,options);
    },

    /***
     * ✅ Создать заявку на возврат.
     * 🔗 https://developer.bm.parts/api/v2/returns.html#get-returns-causes
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    returnsCauses: function () {
        return this.get(`${URL}/causes`);
    },



    /***
     * ✅ Оповестить об возврате.
     * 🔗 https://developer.bm.parts/api/v2/returns.html#post-returns-notify
     *
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____________|||_isRequired_|||__default___|||__description_
     * ==============================================================================
     * | query_text          |     true     |               |  Текст сообщения передается через POST запрос
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    returnsNotify: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['query_text'],
            url: {
                base: URL,
                hash: 'post-returns-notify'
            }
        });
        if (!statusError)
            return this.post(`${URL}/notify`, options['query_text']);
    },
};


module.exports = Returns;
