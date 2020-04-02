'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function Advertising(client) {
    this.get = client.get;
}

const URL = '/advertising';

Advertising.prototype = {


    /**
     * ✅ Получить случайный баннер.
     * 🔗 https://developer.bm.parts/api/v2/advertising.html#get-advertising-banner-random
     */
    bannerRandom: function (options = {}) {
        return this.get(`${URL}/banner/random`,options);
    },


    /**
     * ✅ Получить список баннеров.
     * 🔗 https://developer.bm.parts/api/v2/advertising.html#get-advertising-banners
     */
    bannersList: function (options = {}) {
        return this.get(`${URL}/banners`,options);
    },


    /**
     * ✅ Получить список акций.
     * 🔗 https://developer.bm.parts/api/v2/advertising.html#get-advertising-list
     */
    listAdvertisings: function (options = {}) {
        return this.get(`${URL}/list`, options);
    },


    /**
     * ✅ Прогресс акции.
     * 🔗 https://developer.bm.parts/api/v2/advertising.html#get-advertising-promo-promo-uuid-progress
     */
    progress: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['promo_uuid'],
            url: {
                base: URL,
                hash: 'get-advertising-promo-promo-uuid-progress'
            }
        });
        if (!statusError)
            return this.get(`${URL}/promo/${options.promo_uuid}/progress`, options);
    },


    /**
     * ✅ Получить акцию.
     * 🔗 https://developer.bm.parts/api/v2/advertising.html#get-advertising-promo-promo-uuid
     */
    promo: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['promo_uuid','public'],
            url: {
                base: URL,
                hash: 'get-advertising-promo-promo-uuid'
            }
        });
        if (!statusError)
            return this.get(`${URL}/promo/${options.promo_uuid}`, options);

    },
};

module.exports = Advertising;
