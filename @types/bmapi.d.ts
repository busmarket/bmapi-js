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
declare interface BmApiProfileMethods {
    changeWarehouse(params: BmApiQueryProfileChangeWarehouse): Promise<BmApiResponse>;

    getBoundClients(params: BmApiQueryProfileBoundClients): Promise<BmApiResponse>;

    getMailing(): Promise<BmApiResponse>;

    profileMasq(params: BmApiQueryProfileMasq): Promise<BmApiResponse>;

    saveMailing(params: object): Promise<BmApiResponse>;

    history(params?: BmApiQueryProfileHistory): Promise<BmApiResponse>;

    me(params: BmApiQueryProfileMe): Promise<BmApiResponse>;

    updateApp(params: BmApiQueryProfileSettings): Promise<BmApiResponse>;

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

    claimAttachments(params: BmApiQueryClaimsCurAttachment): Promise<BmApiResponse>;

//TODO can't test
    addAttachment(params: BmApiQueryClaimsAttachment): Promise<BmApiResponse>;

//todo end
    getIssueComments(params: BmApiQueryClaimsGetIssueComments): Promise<BmApiResponse>;

    setIssueComments(params: BmApiQueryClaimsSetIssueComments): Promise<BmApiResponse>;
}

declare interface BmApiCatalogMethods {

    newArrivals(): Promise<BmApiResponse>;

    brands(params: BmApiQueryCatalogBrandsList): Promise<BmApiResponse>;

    enginesByModel(params: BmApiQueryCatalogEnginesByModel): Promise<BmApiResponse>;

    carNodesPath(params: BmApiQueryCatalogCarNodesPath): Promise<BmApiResponse>;

    carNodes(params: BmApiQueryCatalogCarNodes): Promise<BmApiResponse>;//++

}

declare interface BmApiDocumentsMethods {

    filterGroups(): Promise<BmApiResponse>;

    filterTypes(): Promise<BmApiResponse>;

    filterDates(): Promise<BmApiResponse>;

    filterGrouped(params: BmApiQueryDocumentsFilterGrouped): Promise<BmApiResponse>;

    listDocuments(params: BmApiQueryDocumentsList): Promise<BmApiResponse>;

    reclamationStatus(params: BmApiQueryDocumentsReclamationStatus): Promise<BmApiResponse>;

    downloadDocument(params: BmApiQueryDocumentsDownload): Promise<BmApiResponse>;

    getDocument(params: BmApiQueryDocument): Promise<BmApiResponse>;
}

declare interface BmApiFinanceMethods {

    historyRates(): Promise<BmApiResponse>;

    currenciesRates(): Promise<BmApiResponse>;

    currenciesList(): Promise<BmApiResponse>;

    contractsList(): Promise<BmApiResponse>;

    contracts(params: BmApiQueryFinanceContract): Promise<BmApiResponse>;
}

declare interface BmApiDeliveryMethods {

    carriersWarehouses(params: BmApiQueryDeliveryContract): Promise<BmApiResponse>;

    carriersCities(params: BmApiQueryDeliveryCities): Promise<BmApiResponse>;

    configConfirm(params: BmApiQueryDeliveryConfirm): Promise<BmApiResponse>;

    configDefault(params: BmApiQueryDeliveryConfirmDefault): Promise<BmApiResponse>;

    cityStreets(params: BmApiQueryDeliveryStreets): Promise<BmApiResponse>;

    deliveryDepartures(params: BmApiQueryDeliveryDepartures): Promise<BmApiResponse>;

    deliveryReceivers(params: BmApiQueryDeliveryReceivers): Promise<BmApiResponse>;

    deliveryReceiversAdd(params: BmApiQueryDeliveryReceiversAdd): Promise<BmApiResponse>;

    deliveryCarriers(): Promise<BmApiResponse>;

    deliveryRegions(): Promise<BmApiResponse>;

    deliveryConfigs(): Promise<BmApiResponse>;

    deliveryCreateConfigs(params: BmApiQueryDeliveryConfigsCreate): Promise<BmApiResponse>;

    deliveryTrack(params: BmApiQueryDeliveryTrack): Promise<BmApiResponse>;

    deliveryDeleteReceiver(params: BmApiQueryDeliveryDeleteReceiver): Promise<BmApiResponse>;

    deliveryCarrier(params: BmApiQueryDeliveryCarrier): Promise<BmApiResponse>;

    deliveryRegionCities(params: BmApiQueryDeliveryRegionCities): Promise<BmApiResponse>;

    deliveryDeleteConfig(params: BmApiQueryDeliveryConfigsDelete): Promise<BmApiResponse>;
}

declare interface BmApiShoppingMethods {
    getReservedProductsDetails(params: BmApiQueryShoppingReserveDetails): Promise<BmApiResponse>;

//TODO need more tests
    downloadUnreservedExcel(): Promise<BmApiResponse>;//+--
//todo end

    getReserveDetails(params: BmApiQueryShoppingGetReserveArray): Promise<BmApiResponse>;

    createReserveProcess(params: BmApiQueryShoppingReserveCreate): Promise<BmApiResponse>;

    createUnshipped(params: BmApiQueryShoppingCreateUnshipped): Promise<BmApiResponse>;

    importTemplate(): Promise<BmApiResponse>;

    importSettings(): Promise<BmApiResponse>;

    setImportSettings(params: BmApiQueryShoppingSetImportSettings): Promise<BmApiResponse>;

    deleteImportSettings(params: BmApiQueryShoppingDeleteImportSettings): Promise<BmApiResponse>;

    getFileWithErrors(params: BmApiQueryShoppingGetFileWithErrors): Promise<BmApiResponse>;

    tablePreloadFile(params: BmApiQueryShoppingTablePreloadFile): Promise<BmApiResponse>;

    tableImportFile(params: BmApiQueryShoppingTableImportFile): Promise<BmApiResponse>;

    getCartsCount(): Promise<BmApiResponse>;

    cartsUnion(params: BmApiQueryShoppingCartsUnion): Promise<BmApiResponse>;

    getCartProducts(params: BmApiQueryShoppingGetCartProducts): Promise<BmApiResponse>;

    changeCartOwner(params: BmApiQueryShoppingChangeCartOwner): Promise<BmApiResponse>;

    getReservesList(): Promise<BmApiResponse>;

    deleteReserves(params: BmApiQueryShoppingDeleteReserves): Promise<BmApiResponse>;

    getCartsList(): Promise<BmApiResponse>;

    createCart(params: BmApiQueryShoppingCreateCart): Promise<BmApiResponse>;

    addProductsToCart(params: BmApiQueryShoppingAddProductsToCart): Promise<BmApiResponse>;

    updateProductsQuantityInCart(params: BmApiQueryShoppingUpdateProductsQuantityInCart): Promise<BmApiResponse>;

    deleteProductFromCart(params: BmApiQueryShoppingDeleteProductFromCart): Promise<BmApiResponse>;

    deleteCart(params: BmApiQueryShoppingDeleteCart): Promise<BmApiResponse>;

    getCart(params: BmApiQueryShoppingGetCart): Promise<BmApiResponse>;
}

declare interface BmApiCompanyMethods {
    managerNotify(params: BmApiQueryCompanyManagerNotify): Promise<BmApiResponse>;

    getContacts(): Promise<BmApiResponse>;

    getWarehouses(): Promise<BmApiResponse>;

    callBack(): Promise<BmApiResponse>;

    managerInfo(): Promise<BmApiResponse>;
}

declare interface BmApiAggregationsMethods {
    advertisements(params?: BmApiQueryProducts): Promise<BmApiResponse>;

    brands(params?: BmApiQueryProducts): Promise<BmApiResponse>;

    nodes(params?: BmApiQueryProducts): Promise<BmApiResponse>;

    cars(params?: BmApiQueryProducts): Promise<BmApiResponse>;

    models(params?: BmApiQueryCarModels): Promise<BmApiResponse>;

    engines(params?: BmApiQueryModelEngines): Promise<BmApiResponse>;
}

declare interface BmApiSearchMethods {
    history(): Promise<BmApiResponse>;

    suggestProducts(params?: BmApiQuerySuggestProducts): Promise<BmApiResponse>;

    searchSuggests(params?: BmApiQuerySearchSuggests): Promise<BmApiResponse>;

    products(params?: BmApiQueryProducts): Promise<BmApiResponse>;

}

declare interface BmApiNewsMethods {

    list(params: BmApiQueryNewsList): Promise<BmApiResponse>;

    article(params: BmApiQueryNewsArticle): Promise<BmApiResponse>;
}

declare interface BmApiReportsMethods {

    brandsTurnover(params: BmApiQueryReportsBrandsTurnover): Promise<BmApiResponse>;

    reconciliation(params: BmApiQueryReportsReconciliation): Promise<BmApiResponse>;

    terms(params: BmApiQueryReportsTerms): Promise<BmApiResponse>;

    reconciliationFile(params: BmApiQueryReportsReconciliationFile): Promise<BmApiResponse>;
}

declare interface BmApiProcessingMethods {
    reserveProcess(params: BmApiQueryReserveProcess): Promise<BmApiResponse>;//+++

    getDepartures(params: BmApiQueryGetDepartures): Promise<BmApiResponse>;

    processSync(params: BmApiQueryProcessSync): Promise<BmApiResponse>;

//TODO can't check
    downloadUnshipped(params: BmApiQueryDownloadUnshipped): Promise<BmApiResponse>;

//todo end

    cartPreCheck(params: BmApiQueryCartPreCheck): Promise<BmApiResponse>;

    checkShipmentStatus(params: BmApiQueryCheckShipmentStatus): Promise<BmApiResponse>;

}

declare interface BmApiReturnsMethods {
    returnsList(): Promise<BmApiResponse>

//TODO need more info
    returnsRequestCreate(params: BmApiQueryReturnsRequest): Promise<BmApiResponse>

//todo end

    returnsCauses(): Promise<BmApiResponse>

    returnsNotify(params: BmApiQueryReturnsNotify): Promise<BmApiResponse>
}

declare interface BmApiAdvertisingMethods {
    bannerRandom(params: BmApiQueryAdvertisingBannerRandomList): Promise<BmApiResponse>;

    bannersList(params: BmApiQueryAdvertisingBannersList): Promise<BmApiResponse>;

    listAdvertisings(params: BmApiQueryAdvertisingList): Promise<BmApiResponse>;

    progress(params: BmApiQueryAdvertisingProgress): Promise<BmApiResponse>;

    promo(params: BmApiQueryAdvertisingPromo): Promise<BmApiResponse>;
}

declare interface BmApiProductMethods {
    inWaiting(params?: BmApiQueryProductInWaiting): Promise<BmApiResponse>;

    inStocks(params?: BmApiQueryProductInStocks): Promise<BmApiResponse>;

    prices(params?: BmApiQueryProductPrices): Promise<BmApiResponse>;

    curPrice(params?: BmApiQueryProductPrice): Promise<BmApiResponse>;

    details(params?: BmApiQueryProductDetails): Promise<BmApiResponse>;
}


declare interface BmApiTrainingsMethods {

    registerForTraining(params: BmApiQueryTrainingRegister): Promise<BmApiResponse>

    getTrainingsList(params: BmApiQueryTrainingsList): Promise<BmApiResponse>

    trainingToCalendar(params: BmApiQueryTrainingToCalendar): Promise<BmApiResponse>

    getTraining(params: BmApiQueryTraining): Promise<BmApiResponse>
}

declare interface BmApiGarageMethods {
    carsList(): Promise<BmApiResponse>

    addCar(params: BmApiQueryGarageAddCar): Promise<BmApiResponse>

    carInfo(params: BmApiQueryGarageCarInfo): Promise<BmApiResponse>

    updateCar(params: BmApiQueryGarageUpdateCar): Promise<BmApiResponse>

    deleteCar(params: BmApiQueryGarageDeleteCar): Promise<BmApiResponse>
}


declare interface BmApiResponse {
    data?: any;
    status?: number;
    statusText?: string;
    headers?: any;
    config?: any;
}


/**
 * QUERY PARAMETERS INTERFACES
 */

/***
 * Profile
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/profile.html
 */
declare interface BmApiQueryProfileChangeWarehouse {
    warehouse_uuid: string;
}

declare interface BmApiQueryProfileBoundClients {
    clients_as: string;
}

declare interface BmApiQueryProfileHistory {
    filter: string; // vin, phrase or all
    direction: string; // asc or desc
    per_page?: string; // default 30 (max 100)
    page?: string; // number page
}

declare interface BmApiQueryProfileMasq {
    client_uuid: string; // vin, phrase or all
}

declare interface BmApiQueryProfileMe {
    clients_as: string; // vin, phrase or all
}

declare interface BmApiQueryProfileSettings {
    app_name: string;
}

declare interface BmApiQueryProfileSettingsSaveCreate {
    app_name: string;
    version?: string;
    settings: string;
}


/***
 * Catalog
 * Full documentation:
 * https://developer.bm.parts/api/v2/catalog.html
 */
declare interface BmApiQueryCatalogBrandsList {
    page?: number;
    per_page?: number;
}

declare interface BmApiQueryCatalogEnginesByModel {
    car_brand: string;
    car_model: string;
    q?: string;
}

declare interface BmApiQueryCatalogCarNodesPath {
    parent_path?: string;
}

declare interface BmApiQueryCatalogCarNodes {
    parent_uuid?: string;
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

declare interface BmApiQueryDocumentsDownload {
    uuid: string
    type: string
    file_type: string
}

declare interface BmApiQueryDocument {
    uuid: string
    type: string
}


/***
 * Finance
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/finance.html
 */
declare interface BmApiQueryFinanceContract {
    contract_uuid: string
}


/***
 * Delivery
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/delivery.html
 */
declare interface BmApiQueryDeliveryContract {
    city: string
    carrier: string
}

declare interface BmApiQueryDeliveryCities {
    region: string;
    carrier: string;
    is_address?: boolean;
}

declare interface BmApiQueryDeliveryConfirm {
    code: string;
}

declare interface BmApiQueryDeliveryConfirmDefault {
    config_uuid: string;
}

declare interface BmApiQueryDeliveryStreets {
    city: string;
    street: string;
}

declare interface BmApiQueryDeliveryDepartures {
    warehouse: string;
    city: string;
}

declare interface BmApiQueryDeliveryReceivers {
    page?: string;
    per_page?: string;
    q?: string
}

declare interface BmApiQueryDeliveryReceiversAdd {
    surname: string;
    name: string;
    middle_name: string;
    phone: string;
}

declare interface BmApiQueryDeliveryConfigsCreate {
    receiver: string;
    city: string;
    carrier: string;
    carrier_warehouse: string;
    full_insurance?: string;
    is_default: string;
    address: string;
}

declare interface BmApiQueryDeliveryTrack {
    tracking_number: string;
}

declare interface BmApiQueryDeliveryDeleteReceiver {
    receiver_uuid: string
}

declare interface BmApiQueryDeliveryCarrier {
    carrier_uuid: string
}

declare interface BmApiQueryDeliveryRegionCities {
    region_uuid: string;
    page?: string;
    per_page?: string;
    q?: string
}

declare interface BmApiQueryDeliveryConfigsDelete {
    config_uuid: string;
}


/**
 * Shopping
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/shopping.html
 */
declare interface BmApiQueryShoppingReserveDetails {
    reserves_uuid: Array<string>;
}

declare interface BmApiQueryShoppingGetReserveArray {
    reserves_uuid: Array<string>;
}

declare interface BmApiQueryShoppingReserveCreate {
    order_uuid: string;
    comment: string;
    warehouse_uuid: string;
}

declare interface BmApiQueryShoppingCreateUnshipped {
    products: Array<object>;
    cart_name: string;
}

declare interface BmApiQueryShoppingSetImportSettings {
    import_type: string;
    name?: string;
    article?: string;
    brand?: string;
    code?: string;
    UUID?: string;
    quantity?: string;
}

declare interface BmApiQueryShoppingDeleteImportSettings {
    setting_uuid: string;
}

declare interface BmApiQueryShoppingGetFileWithErrors {
    type?: string;
}

declare interface BmApiQueryShoppingTablePreloadFile {
    file: any;
    extension: string;
    separator?: string;
}

declare interface BmApiQueryShoppingTableImportFile {
    import_type: string;
    article_column: string;
    brand_column: string;
    code_column: string;
    quantity_column: string;
    uuid_column: string;
    cart_uuid: string;
    separator?: string;
    name: string;
}

declare interface BmApiQueryShoppingCartsUnion {
    carts_array: Array<any>;
}

declare interface BmApiQueryShoppingGetCartProducts {
    cart_uuid: string;
    warehouse: Array<any>;
}

declare interface BmApiQueryShoppingChangeCartOwner {
    cart_uuid: string;
    client_uuid: string;
}

declare interface BmApiQueryShoppingDeleteReserves {
    orders: any;
}

declare interface BmApiQueryShoppingCreateCart {
    name: string;
    products?: Array<object>;
    id_type?: string;
    warehouse?: string;
}

declare interface BmApiQueryShoppingAddProductsToCart {
    cart_uuid: string;
    product_uuid: string;
    quantity: number;
}

declare interface BmApiQueryShoppingUpdateProductsQuantityInCart {
    cart_uuid: string;
    product_uuid: string;
    quantity: number;
}

declare interface BmApiQueryShoppingDeleteProductFromCart {
    cart_uuid: string;
    product_uuid: string;
}

declare interface BmApiQueryShoppingDeleteCart {
    cart_uuid: string;
}

declare interface BmApiQueryShoppingGetCart {
    cart_uuid: string;
}


/**
 * Company Info
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/company.html
 */
declare interface BmApiQueryCompanyManagerNotify {
    text: string;
}


/**
 * SEARCH PRODUCTS AND AGGREGATIONS
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/search_products.html
 */

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

declare interface BmApiQueryCarModels {
    car_name: string;
}

declare interface BmApiQueryModelEngines {
    car_name: string;
    model_name: string;
}


/***
 * Search for products in the catalog through suggests
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/search_products.html?highlight=search#get-search-suggests
 */
declare interface BmApiQuerySuggestProducts {
    q: string;
    products_as?: string;
}

declare interface BmApiQuerySearchSuggests {
    q: string;
    products_as?: string;
}


/***
 * News
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/news.html
 */
declare interface BmApiQueryNewsList {
    page?: number;
    per_page?: number;
}

declare interface BmApiQueryNewsArticle {
    news_uuid: string;
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
 * Processing
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/processing.html
 */
declare interface BmApiQueryReserveProcess {
    orders_array: Array<string>;
    delivery_config: string;
    warehouse: string;
    key: string;
    expired_at: string;
    route_code: string;
    route_at: string;
    departure_at: string;
    comment: string;
}

declare interface BmApiQueryGetDepartures {
    delivery_config: string;
    warehouse: string;
}

declare interface BmApiQueryProcessSync {
    cart: string;
    delivery_config: string;
    warehouse: string;
    key: string;
    expired_at: string;
    route_code: string;
    route_at: string;
    departure_at: string;
    comment: string;
    save_unprocessed: string;
}

declare interface BmApiQueryDownloadUnshipped {
    task_id: string;
}

declare interface BmApiQueryCartPreCheck {
    cart_uuid: string;
}

declare interface BmApiQueryCheckShipmentStatus {
    cart_uuid: string;
}


/**
 * Returns
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/returns.html
 */
declare interface BmApiQueryReturnsRequest {
    code: string;
    cause_code: string;
    count: string
}

declare interface BmApiQueryReturnsNotify {
    query_text: string;
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

declare interface BmApiQueryClaimsCurAttachment {
    issue_id: string;
    attach_id: string;
    attach_name: string;
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


/**
 * Trainings
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/trainings.html
 */
declare interface BmApiQueryTrainingRegister {
    training_uuid: string;
    full_name: string;
    position: string;
    phone_number: string
}


declare interface BmApiQueryTrainingsList {
    filter: string;
    page?: string;
    per_page?: string
}

declare interface BmApiQueryTrainingToCalendar {
    training_uuid: string;
}

declare interface BmApiQueryTraining {
    training_uuid: string;
}


/**
 * Garage
 *
 * Full documentation:
 * https://developer.bm.parts/api/v2/garage.html
 */
declare interface BmApiQueryGarageAddCar {
    searched_at: string;
    search_string: string;
    name: string;
}

declare interface BmApiQueryGarageCarInfo {
    car_uuid: string;
}

declare interface BmApiQueryGarageUpdateCar {
    car_uuid: string;
    name: string;
}

declare interface BmApiQueryGarageDeleteCar {
    car_uuid: string;
}


/**
 * Full documentation:
 * https://developer.bm.parts/api/v2/search_products.html
 */
declare interface BmApiResources {
    profile: BmApiProfileMethods;
    claims: BmApiClaimsMethods;
    catalog: BmApiCatalogMethods,
    documents: BmApiDocumentsMethods,
    finance: BmApiFinanceMethods,
    delivery: BmApiDeliveryMethods,
    search: BmApiSearchMethods;
    news: BmApiNewsMethods;
    reports: BmApiReportsMethods,
    advertising: BmApiAdvertisingMethods,
    product: BmApiProductMethods;
    trainings: BmApiTrainingsMethods
    aggregations: BmApiAggregationsMethods;
    returns: BmApiReturnsMethods;
    shopping: BmApiShoppingMethods;
    company: BmApiCompanyMethods;
    processing: BmApiProcessingMethods;
    garage: BmApiGarageMethods;
}

/***
 * Declaring the global module *** BM API ***
 */
declare module "bmapi" {
    export = BmApi
}
