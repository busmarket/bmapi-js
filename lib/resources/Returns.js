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
     */
    returnsList: function () {
        return this.get(`${URL}/products`);
    },

    /***
     * ✅ Список причин возврата.
     * 🔗 https://developer.bm.parts/api/v2/returns.html#post-returns-request
     *
     */
    returnsRequestCreate: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ["params"],
            url: {
                base: URL,
                hash: 'post-returns-request'
            }
        });
        if (!statusError)
            return this.post(`${URL}/request`, options);
    },

    /***
     * ✅ Создать заявку на возврат.
     * 🔗 https://developer.bm.parts/api/v2/returns.html#get-returns-causes
     *
     */
    returnsCauses: function () {
        return this.get(`${URL}/causes`);
    },


    /***
     * ✅ Оповестить об возврате.
     * 🔗 https://developer.bm.parts/api/v2/returns.html#post-returns-notify
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
