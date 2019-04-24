<<<<<<< HEAD
'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
function Aggregations(client) {
  this.client = client;
}

Aggregations.prototype = {
  advertisements: function(options = {}) {
    return this.client.get('search/products/aggregations/advertisements', options);
  },
  brands: function(options = {}) {
    return this.client.get('search/products/aggregations/brands', options);
  },
  nodes: function(options = {}) {
    return this.client.get('search/products/aggregations/nodes', options);
  },
  cars: function(options = {}) {
    return this.client.get('search/products/aggregations/cars', options);
  },
  models: function(options = {}) {
    if( Reflect.has(options, 'car_name') )
      return this.client.get(`search/products/aggregations/car/${options.car_name}/models`, options);
    else
      throw Error(ErrorMessages.aggregations.models);
  },
  engines: function(options = {}) {
    if( Reflect.has(options, 'car_name') && Reflect.has(options, 'model_name') )
      return this.client.get(`search/products/aggregations/car/${options.car_name}/model/${options.model_name}`, options);
    else
      throw Error(ErrorMessages.aggregations.engines);
  },
  history: function() {
    return this.client.get('search/products/aggregations/history');
  }
};

module.exports = Aggregations;
=======
'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
function Aggregations(client) {
  this.client = client;
}

Aggregations.prototype = {
  advertisements: function(options = {}) {
    return this.client.get('search/products/aggregations/advertisements', options);
  },
  brands: function(options = {}) {
    return this.client.get('search/products/aggregations/brands', options);
  },
  nodes: function(options = {}) {
    return this.client.get('search/products/aggregations/nodes', options);
  },
  cars: function(options = {}) {
    return this.client.get('search/products/aggregations/cars', options);
  },
  models: function(options = {}) {
    if( Reflect.has(options, 'car_name') )
      return this.client.get(`search/products/aggregations/car/${options.car_name}/models`, options);
    else
      throw Error(ErrorMessages.aggregations.models);
  },
  engines: function(options = {}) {
    if( Reflect.has(options, 'car_name') && Reflect.has(options, 'model_name') )
      return this.client.get(`search/products/aggregations/car/${options.car_name}/model/${options.model_name}`, options);
    else
      throw Error(ErrorMessages.aggregations.engines);
  },
  history: function() {
    return this.client.get('search/products/aggregations/history');
  }
};

module.exports = Aggregations;
>>>>>>> d28ae96296b35dd379fcaf81c4b12d71d6c2df27
