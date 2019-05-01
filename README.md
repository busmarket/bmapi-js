![](https://login.bm.parts/static/img/bm_logo_.svg)

# BusMarket API JS client


```
⚠ This is a DEMO version of the library 
BusMarket API JS client.
```
For a comprehensive list of examples, 
check out the [API documentation](https://developer.bm.parts/).


### Installation

```
npm install bmapi --save
```

### Overview

Every resource is accessed via your BmApi instance:

```js
const BmApi = require('bmapi');
const myBmApi = new BmApi('<your_token>');
```

Using TypeScript:

```typescript
import BmApi = require("bmapi");
const myBmApi = BmApi('<your_token>');
```

### Engine

* [search](https://developer.bm.parts/api/v2/search_products.html)
  * `products({params})`
  * `suggests({params})`
  
* [aggregations](https://developer.bm.parts/api/v2/search_products.html)
  * `advertisements({params})`
  * `brands({params})`
  * `nodes({params})`
  * `cars({params})`
  * `models({params})`
  * `engines({params})`
  * `history()`

* [product](https://developer.bm.parts/api/v2/product.html)
  * `in_waiting({params})`
  * `in_stocks({params})`
  * `prices({params})`
  * `price({params})`
  * `details({params})`

Every resource method returns a promise.
For example, let's get list of products:

```js
const BmApi = require('bmapi');
const myBmApi = new BmApi('<your_token>');
(async() => {
  const response = await myBmApi.search.products({q: '115906'});
  console.info(response);
})();
```

### Documentation

Documentation is available at https://developer.bm.parts
