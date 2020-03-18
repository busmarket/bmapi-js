/**
 * BmAPI JS Client v 1.0.0
 * Author: BusMarket Group
 *
 * Site: https://busmarket.group
 * Documentation: https://developer.bm.parts
 */

'use strict';

/**
 * Importing the *** API Client ***
 * @type {BmApiClient}
 */
const BmApiClient = require('./client/bmapi.client');
const ErrorMessages = require('./error_messages/ErrorMessages');

/**
 * Init all *** API RESOURCES ***
 */
const ApiResources = {
    profile: require('./resources/Profile'),
    claims: require('./resources/Claims'),
    product: require('./resources/Product'),
    catalog: require('./resources/Catalog'),
    documents: require('./resources/Documents'),
    finance: require('./resources/Finance'),
    delivery: require('./resources/Delivery'),
    shopping: require('./resources/Shopping'),
    company: require('./resources/Company'),
    aggregations: require('./resources/Aggregations'),
    search: require('./resources/Search'),
    news: require('./resources/News'),
    reports: require('./resources/Reports'),
    processing: require('./resources/Processing'),
    returns: require('./resources/Returns'),
    advertising: require('./resources/Advertising'),
    trainings: require('./resources/Trainings'),
    garage: require('./resources/Garage'),
};

function BmApi(apiToken) {
    /**
     * Checking the PROTOTYPE property
     */
    if (!(this instanceof BmApi)) {
        return new BmApi(apiToken);
    }

    /**
     * API TOKEN check
     */
    if (!apiToken) {
        throw Error(ErrorMessages.token);
    }

    /**
     * Including the *** API TOKEN *** in every request method
     * @type {*|{get}}
     */
    const apiClient = this._apiClient(apiToken);

    /**
     * Initialization request methods
     */
    this._apiResources(apiClient);
}

BmApi.prototype = {

    _apiResources: function (apiClient) {
        for (let name in ApiResources) {
            this[name] = new ApiResources[name](apiClient);
        }
    },

    _apiClient: function (apiToken) {
        return {
            get: function (url, params = {}) {
                return BmApiClient(apiToken).get(encodeURI(url), {params: params}).catch(e => e.response)
            },
            post: function (url, params = {}) {
                return BmApiClient(apiToken).post(encodeURI(url), {...params}).catch(e => e.response)
            },
            put: function (url, params = {}) {
                return BmApiClient(apiToken).put(encodeURI(url), {...params}).catch(e => e.response)
            },
            delete: function (url, params = {}) {
                return BmApiClient(apiToken).delete(encodeURI(url), {params: params}).catch(e => e.response)
            }
        }
    }

};

module.exports = BmApi;
