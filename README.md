![](https://login.bm.parts/static/img/bm_logo_.svg)

# BusMarket API JS client


### Installation

npm i @busmarket/bmapi-js

```
⚠ You can find a full list of examples here.
https://developer.bm.parts/
```

### Overview

Using JavaScript:

```js
const BmApi = require('@busmarket/bmapi-js');
const myBmApi = new BmApi('<your_token>');
```

Using TypeScript:

```typescript
import BmApi = require("@busmarket/bmapi-js");
const myBmApi = BmApi('<your_token>');
```

### Engine
Every resource method returns a promise.
For example, let's get list of products:

```js
const BmApi = require('@busmarket/bmapi-js');
const myBmApi = new BmApi('<your_token>');
(async() => {
  const response = await myBmApi.search.products({q: '115906'});
  console.info(response.data);
})();
```

### Browser
Also, you can use CDN. Following code bellow:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="node_modules/@busmarket/bmapi-js/dist/cdn.bmapi.js"></script>
    <script>
      const MyBmApi = new BmApi(`<YOUR_BMAPI_TOKEN>`);
      ( async function() {
          const QueryResponse = await MyBmApi.aggregations.brands({q: '115906'});
          console.info(QueryResponse.data);
      })();
    </script>
</body>
</html>
```

### Documentation

Documentation is available at https://developer.bm.parts
