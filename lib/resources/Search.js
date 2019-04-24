<<<<<<< HEAD
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
=======
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
>>>>>>> d28ae96296b35dd379fcaf81c4b12d71d6c2df27
