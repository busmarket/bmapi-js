/**
 * BmAPI JS Client v 1.0.0
 * Author: BusMarket Group
 *
 * Site: https://busmarket.group
 *
 * For a comprehensive list of examples,
 * check out the our documentation:
 * https://developer.bm.parts/api/v2/
 */
declare var BmApi: (apiToken: string) => BmApiResources;

/**
 * Response for all methods
 */
declare interface BmApiResponse {
  data?: any;
  status?: number;
  statusText?: string;
  headers?: any;
  config?: any;
}

declare interface BmApiSearchMethods {
  products(params?: BmApiQueryProducts): Promise<BmApiResponse>;
  suggests(params?: BmApiQuerySuggests): Promise<BmApiResponse>;
}
declare interface BmApiAggregationsMethods {
  advertisements(params?: BmApiQueryProducts): Promise<BmApiResponse>;
  brands(params?: BmApiQueryProducts): Promise<BmApiResponse>;
  nodes(params?: BmApiQueryProducts): Promise<BmApiResponse>;
  cars(params?: BmApiQueryProducts): Promise<BmApiResponse>;
  models(params?: BmApiQueryCarModels): Promise<BmApiResponse>;
  engines(params?: BmApiQueryModelEngines): Promise<BmApiResponse>;
  history(): Promise<BmApiResponse>;
}
declare interface BmApiProductMethods {
  in_waiting(params?: BmApiQueryProductInWaiting): Promise<BmApiResponse>;
  in_stocks(params?: BmApiQueryProductInStocks): Promise<BmApiResponse>;
  prices(params?: BmApiQueryProductPrices): Promise<BmApiResponse>;
  price(params?: BmApiQueryProductPrice): Promise<BmApiResponse>;
  details(params?: BmApiQueryProductDetails): Promise<BmApiResponse>;
}

/***
 * Search products in the catalog.
 *
 * Full documentation about
 * `https://api.bm.parts/SEARCH/PRODUCTS`
 * you can read by link:
 * https://developer.bm.parts/api/v2/search_products.html?highlight=search%20products#get-search-products
 */
declare interface BmApiQueryProducts {
  q?: string;
  brands?: string;
  nodes?: string;
  new_arrival?: string;
  advertisement?: string;
  cars?: string;
  new_product?: string;
  promo?: string;
  warehouses?: string;
  currency?: string;
  page?: string;
  per_page?: string;
}

/***
 * Search for products in the catalog through suggests
 *
 * Full documentation about
 * `https://api.bm.parts/SEARCH/SUGGESTS`
 * you can read by link:
 * https://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-suggests
 */
declare interface BmApiQuerySuggests {
  q: string;
}

declare interface BmApiQueryCarModels {
  car_name: string;
}
declare interface BmApiQueryModelEngines {
  car_name: string;
  model_name: string;
}

/***
 * Get PRODUCT by Query Parameters
 *
 * Full documentation you can read by link:
 * https://developer.bm.parts/api/v2/product.html
 */
declare interface BmApiQueryProductInWaiting {
  product_uuid: string; // ID products
}
declare interface BmApiQueryProductInStocks {
  product_uuid: string; // ID products
  id_type?: string; // Product search by ID or by code
}
declare interface BmApiQueryProductPrices {
  product_uuid: string; // ID products
  id_type?: string; // Product search by ID or by code
}
declare interface BmApiQueryProductPrice {
  product_uuid: string; // ID products
  id_type?: string; // Product search by ID or by code
  currency?: string; // ID currency
}
declare interface BmApiQueryProductDetails {
  product_uuid: string; // ID products
  id_type?: string; // Product search by ID or by code
  currency?: string; // ID currency
}

/**
 * Full documentation about `https://api.bm.parts/SEARCH/<name>`
 * you can read by link:
 * https://developer.bm.parts/api/v2/search_products.html
 */
declare interface BmApiResources {
  search: BmApiSearchMethods;
  aggregations: BmApiAggregationsMethods;
  product: BmApiProductMethods;
}

/***
 * Declaring the global module *** BmApi ***
 */
declare module "bmapi" {
  export = BmApi
}
