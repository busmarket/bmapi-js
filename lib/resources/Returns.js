'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Returns(client) {
    this.get = client.get;
    this.post = client.post;
}

const URL = '/returns';
Returns.prototype = {


    /***
     * ✅ Список товаров для возврата.
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#post-trainings-register
     *
     * Query Parameters (options = {}):
     * --------------------------------------------------------------------------
     * no parameters needed
     * --------------------------------------------------------------------------
     */
    returnsList: function () {
        return this.get(`${URL}/products`);
    },


    /***
     * ✅ Создать заявку на возврат.
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#post-trainings-register
     *
     * Query Parameters (options = {}):
     * --------------------------------------------------------------------------
     * no parameters needed
     * --------------------------------------------------------------------------
     */
    returnsCauses: function () {
        return this.get(`${URL}/causes`);
    },


    /***
     * ✅ Список причин возврата.
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#post-returns-request
     *
     * Query Parameters (options = {}):

     * | code        |
     * --------------------------------------------------------------------------
     * | cause_code  | reason code
     * --------------------------------------------------------------------------
     * | count       |
     * --------------------------------------------------------------------------
     */
    returnsRequestCreate: function (options = {}) {
        const requireParameters = ['code', 'cause_code', 'count'];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#post-returns-request`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.post(`${URL}/request`);
    },


    /***
     * ✅ Оповестить об возврате.
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#post-returns-notify
     *
     * Query Parameters (options = {}):
     * --------------------------------------------------------------------------
     * | query_text       | Текст сообщения передается через POST запрос.
     * --------------------------------------------------------------------------
     */
    returnsNotify: function (options = {}) {
        const requireParameters = ['query_text'];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#post-returns-notify`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.post(`${URL}/notify`,options['query_text']);
    },


};


module.exports = Returns;
