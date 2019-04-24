'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
function Search(client) {
  this.client = client;
}

Search.prototype = {
  products: function(options) {
    return this.client.get('search/products', options)
  },
  suggests: function(options = {}) {
    if( Reflect.has(options, 'q') )
      return this.client.get('search/suggests', options);
    else
      throw Error(ErrorMessages.suggests)
  }
};

module.exports = Search;
