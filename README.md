![](https://login.bm.parts/static/img/bm_logo_.svg)

# BusMarket API JS client


```
⚠ This is a DEMO version of the library 
BusMarket API JS client.
```
For a comprehensive list of examples, 
check out the [API documentation](https://develper.busmarket.ua/).


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

* search
  * `products({params})`
  * `suggests({params})`
  
* aggregations
  * `advertisements({params})`
  * `brands({params})`
  * `nodes({params})`
  * `cars({params})`
  * `models({params})`
  * `engines({params})`
  * `history()`


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
