/**
 * BmAPI JS Client v 1.0.0
 * Author: BusMarket Group
 * Site: https://busmarket.group
 * *******************************************
 * For a comprehensive list of examples,
 * check out the our documentation.
 * Site: https://developer.bm.parts/api/v2/
 * *******************************************
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
  inWaiting(params?: BmApiQueryProductInWaiting): Promise<BmApiResponse>;
  inStocks(params?: BmApiQueryProductInStocks): Promise<BmApiResponse>;
  prices(params?: BmApiQueryProductPrices): Promise<BmApiResponse>;
  price(params?: BmApiQueryProductPrice): Promise<BmApiResponse>;
  details(params?: BmApiQueryProductDetails): Promise<BmApiResponse>;
}
declare interface BmApiProfileMethods {
  changeWarehouse(params: BmApiQueryProfileChangeWarehouse): Promise<BmApiResponse>;
  getMailing(): Promise<BmApiResponse>;
  saveMailing(params: object): Promise<BmApiResponse>;
  history(params?: BmApiQueryProfileHistory): Promise<BmApiResponse>;
  me(): Promise<BmApiResponse>;
  settingsGet(params: BmApiQueryProfileSettings): Promise<BmApiResponse>;
  settingsSave(params: BmApiQueryProfileSettingsSaveCreate): Promise<BmApiResponse>;
  settingsCreate(params: BmApiQueryProfileSettingsSaveCreate): Promise<BmApiResponse>;
  settingsDelete(params: BmApiQueryProfileSettings): Promise<BmApiResponse>;
}
declare interface BmApiClaimsMethods {
  types(): Promise<BmApiResponse>;
  getIssues(): Promise<BmApiResponse>;
  setIssues(params: BmApiQueryClaimsSet): Promise<BmApiResponse>;
  attachments(params: BmApiQueryClaimsAttachments): Promise<BmApiResponse>;
  attachment(params: BmApiQueryClaimsAttachment): Promise<BmApiResponse>;
}

/***
 * Search products in the catalog.
 *
 * Full documentation:
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
 * Full documentation:
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
 * Full documentation:
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

/***
 * Get change main warehouse
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/profile.html#post--profile-change_warehouse
 */
declare interface BmApiQueryProfileChangeWarehouse {
  warehouse_uuid: string; // ID warehouse
}

/***
 * Get PROFILE HISTORY by Query Parameters
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/profile.html#get-profile-history
 */
declare interface BmApiQueryProfileHistory {
  filter: string; // vin, phrase or all
  direction: string; // asc or desc
  per_page: string; // default 30 (max 100)
  page: string; // number page
}

/***
 * Get client application settings
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/profile.html#get--profile-me
 */
declare interface BmApiQueryProfileSettings {
  app_name: string;
}
declare interface BmApiQueryProfileSettingsSaveCreate {
  app_name: string;
  version?: string;
  settings: string;
}

/***
 * Claims
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/claims.html#
 */
declare interface BmApiQueryClaimsSet {
  summary: string;
  description: string;
  issue_type: string;
}
declare interface BmApiQueryClaimsAttachments {
  issue_id: string;
}
declare interface BmApiQueryClaimsAttachment {
  attach_id: string;
  attach_name: string;
  issue_id: string;
}

/**
 * Full documentation:
 * https://developer.bm.parts/api/v2/search_products.html
 */
declare interface BmApiResources {
  claims: BmApiClaimsMethods;
  search: BmApiSearchMethods;
  aggregations: BmApiAggregationsMethods;
  product: BmApiProductMethods;
  profile: BmApiProfileMethods;
}

/***
 * Declaring the global module *** BM API ***
 */
declare module "bmapi" {
  export = BmApi
}
