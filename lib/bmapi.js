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
  claims: require('./resources/Claims'),
  profile: require('./resources/Profile'),
  search: require('./resources/Search'),
  aggregations: require('./resources/Aggregations'),
  product: require('./resources/Product'),
  news: require('./resources/News'),
  advertising: require('./resources/Advertising'),
  reports: require('./resources/Reports'),
  catalog: require('./resources/Catalog'),
  documents: require('./resources/Documents'),
  finance: require('./resources/Finance'),
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
        return BmApiClient(apiToken).get(url, {params: params}).catch(e => e.response)
      },
      post: function (url, params = {}) {
        return BmApiClient(apiToken).post(url, {...params}).catch(e => e.response)
      },
      put: function (url, params = {}) {
        return BmApiClient(apiToken).put(url, {...params}).catch(e => e.response)
      },
      delete: function (url, params = {}) {
        return BmApiClient(apiToken).delete(url, {params: params}).catch(e => e.response)
      }
    }
  }

};

module.exports = BmApi;