/**
 * BmAPI JS Client v 1.0.0
 * Author: BusMarket Group
 * Site: https://busmarket.group
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
 * @type {{products: Products}}
 */
const ApiResources = {
  search: require('./resources/Search'),
  aggregations: require('./resources/Aggregations'),
  product: require('./resources/Product'),
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
   * Init *** Requests Methods ***
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
        return BmApiClient(apiToken).get(url, {params: params})
      }
    }
  }

};

module.exports = BmApi;
