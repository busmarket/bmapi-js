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
  getIssueComments(params: BmApiQueryClaimsGetIssueComments): Promise<BmApiResponse>;
  setIssueComments(params: BmApiQueryClaimsSetIssueComments): Promise<BmApiResponse>;
}
declare interface BmApiNewsMethods {
  list(params: BmApiQueryNewsList): Promise<BmApiResponse>;
  article(params: BmApiQueryNewsArticle): Promise<BmApiResponse>;
}
declare interface BmApiAdvertisingMethods {
  bannerRandom(params: BmApiQueryAdvertisingBannerRandomList): Promise<BmApiResponse>;
  bannersList(params: BmApiQueryAdvertisingBannersList): Promise<BmApiResponse>;
  list(params: BmApiQueryAdvertisingList): Promise<BmApiResponse>;
  progress(params: BmApiQueryAdvertisingProgress): Promise<BmApiResponse>;
  promo(params: BmApiQueryAdvertisingPromo): Promise<BmApiResponse>;
}
declare interface BmApiReportsMethods {
  brandsTurnover(params: BmApiQueryReportsBrandsTurnover): Promise<BmApiResponse>;
  reconciliation(params: BmApiQueryReportsReconciliation): Promise<BmApiResponse>;
  terms(params: BmApiQueryReportsTerms): Promise<BmApiResponse>;
  reconciliationFile(params: BmApiQueryReportsReconciliationFile): Promise<BmApiResponse>;
}
declare interface BmApiCatalogMethods {
  newArrivals(): Promise<BmApiResponse>;
  brands(params: BmApiQueryCatalogBrandsList): Promise<BmApiResponse>;
}
declare interface BmApiDocumentsMethods {
  filterTypes(): Promise<BmApiResponse>;
  filterDates(): Promise<BmApiResponse>;
  filterGrouped(params: BmApiQueryDocumentsFilterGrouped): Promise<BmApiResponse>;
  list(params: BmApiQueryDocumentsList): Promise<BmApiResponse>;
  reclamationStatus(params: BmApiQueryDocumentsReclamationStatus): Promise<BmApiResponse>;
  getDocument(params: BmApiQueryDocument): Promise<BmApiResponse>;
  downloadDocument(params: BmApiQueryDocumentsDownload): Promise<BmApiResponse>;
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
  issue_id: string;
  attachment: FormData;
}
declare interface BmApiQueryClaimsGetIssueComments {
  issue_id: string;
}
declare interface BmApiQueryClaimsSetIssueComments {
  issue_id: string;
  comment: string;
}

/***
 * News
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/news.html
 */
declare interface BmApiQueryNewsArticle {
  news_uuid: string;
}
declare interface BmApiQueryNewsList {
  page?: number;
  per_page?: number;
}

/***
 * News
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/catalog.html
 */
declare interface BmApiQueryCatalogBrandsList {
  page?: number;
  per_page?: number;
}

/***
 * Reports
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/reports.html
 */
declare interface BmApiQueryReportsBrandsTurnover {
  period: string;
}
declare interface BmApiQueryReportsReconciliation {
  period: string;
}
declare interface BmApiQueryReportsTerms {
  at_date: any;
}
declare interface BmApiQueryReportsReconciliationFile {
  period: string;
  file_type: string;
}

/***
 * Advertising
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/advertising.html
 */
declare interface BmApiQueryAdvertisingBannerRandomList {
  banner_code?: string;
  advert?: string;
}
declare interface BmApiQueryAdvertisingBannersList {
  banner_code?: string;
  advert?: string;
}
declare interface BmApiQueryAdvertisingList {
  banner_code?: string;
  promo?: string;
  public?: boolean;
  filter?: string; // current | archived | all
  page?: number;
  per_page?: number
}
declare interface BmApiQueryAdvertisingProgress {
  promo_uuid: string;
}
declare interface BmApiQueryAdvertisingPromo {
  promo_uuid: string;
  public?: boolean
}

/***
 * Documents
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/documents.html
 */
declare interface BmApiQueryDocumentsFilterGrouped {
  direction?: string;
  period?: string;
  type?: string;
  q?: string;
}
declare interface BmApiQueryDocumentsList {
  direction?: string;
  period?: string;
  type?: string;
  q?: string;
  page?: number;
  per_page?: number;
}
declare interface BmApiQueryDocumentsReclamationStatus {
  act_uuid: string
}
declare interface BmApiQueryDocument {
  uuid: string
  type: string
}
declare interface BmApiQueryDocumentsDownload {
  uuid: string
  type: string
  file_type: string
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
  news: BmApiNewsMethods;
  advertising: BmApiAdvertisingMethods,
  reports: BmApiReportsMethods,
  catalog: BmApiCatalogMethods,
  documents: BmApiDocumentsMethods
}

/***
 * Declaring the global module *** BM API ***
 */
declare module "bmapi" {
  export = BmApi
}
