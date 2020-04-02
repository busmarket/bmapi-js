'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function Shopping(client) {
    let methods = ['get', 'post', 'put', 'delete'];
    for (let m of methods) {
        this[m] = client[m]
    }
}

const URL = '/shopping';


Shopping.prototype = {

    /***
     * ✅ Получить детализированную информацию о товарах из списка резервов
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-reserve-products-detailed
     *
     */
    getReservedProductsDetails: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['reserves_uuid'],
            url: {
                base: URL,
                hash: 'post-shopping-reserve-products-detailed'
            }
        });
        if (!statusError)
            return this.post(`${URL}/reserve/products/detailed`,options);
    },

//TODO check this
    /***
     * ✅ Получить незарезервированные товары в Excel
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#excel
     *
     */
    downloadUnreservedExcel: function (options = {}) {
        return this.get(`${URL}/download/unreserved`,options);
    },


    /***
     * ✅ Получить товары из списка резервов
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-reserve-products
     *
     */
    getReserveDetails: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['reserves_uuid'],
            url: {
                base: URL,
                hash: 'post-shopping-reserve-products'
            }
        });
        if (!statusError)
            return this.post(`${URL}/reserve/products`,options);

    },


    /***
     * ✅ Зарезервировать заказ
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-reserve-process
     *
     */
    createReserveProcess: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['order_uuid', 'comment', 'warehouse_uuid'],
            url: {
                base: URL,
                hash: 'post-shopping-reserve-process'
            }
        });
        if (!statusError)
            return this.post(`${URL}/reserve/process`, options);
    },


    /***
     * !!!Внимание!!!  Данный метод является устарешим и будет удален в ближайших релизах. Успользуйте Создать корзину.
     * ✅ Сохранить неотгруженные товары в корзину
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-create-unshipped
     *
     */
    createUnshipped: function (options = {}) {

        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['products', 'cart_name'],
            url: {
                base: URL,
                hash: 'post-trainings-register'
            }
        });
        if (!statusError)
            return this.post(`${URL}/create/unshipped`, options);
    },


    /***
     * ✅ Шаблоны импорта
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#get-shopping-import-template
     *
     */
    importTemplate: function (options = {}) {
        return this.get(`${URL}/import/template`, options);
    },


    /***
     * ✅ Получить настройки импорта
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#get-shopping-import-settings
     *
     */
    importSettings: function (options = {}) {
        return this.get(`${URL}/import/settings`);
    },


    /**
     * ✅ Сохранить настройки импорта
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-import-settings
     */
    setImportSettings: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['import_type'],
            url: {
                base: URL,
                hash: 'post-shopping-import-settings'
            }
        });
        if (!statusError)
            return this.post(`${URL}/import/settings`, {...options});
    },


    /**
     * ✅ Удалить настройку импорта
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#delete-shopping-import-settings
     *
     */
    deleteImportSettings: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['setting_uuid'],
            url: {
                base: URL,
                hash: 'delete-shopping-import-settings'
            }
        });
        if (!statusError)
            return this.delete(`${URL}/import/settings`, {...options});
    },


    /**
     * ✅ Получить файл с необработаными рядами при импорте.
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#get-shopping-table-err-file
     *
     */
    getFileWithErrors: function (options = {}) {
        return this.get(`${URL}/table/err_file`, {type: 'xls', ...options});
    },


    /**
     * ✅ Вернуть распознаный файл.
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-table-preload
     *
     */
    tablePreloadFile: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['file', 'extension'],
            url: {
                base: URL,
                hash: 'get-shopping-table-err-file'
            }
        });
        if (!statusError)
            return this.post(`${URL}/table/preload`, {...options});
    },


    /**
     * ✅ Импорт заказов из excel или csv.
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#excel-csv
     *
     */
    tableImportFile: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['import_type', 'article_column', 'brand_column',
                'code_column', 'quantity_column', 'uuid_column', 'cart_uuid', 'name','file'],
            url: {
                base: URL,
                hash: 'excel-csv'
            }
        });
        if (!statusError)

            return this.post(`${URL}/table/import`, {...options});
    },


    /**
     * ✅ Количество корзин
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#get-shopping-carts-count
     *
     */
    getCartsCount: function (options = {}) {
        return this.get(`${URL}/carts/count`);
    },


    /**
     * ✅ Объединить корзины
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-carts-union
     *
     */
    cartsUnion: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['carts_array'],
            url: {
                base: URL,
                hash: 'post-shopping-carts-union'
            }
        });
        if (!statusError)
            return this.post(`${URL}/carts/union`, {...options});
    },


    /**
     * ✅ Получить остатки товаров из корзины
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#get-shopping-cart-products
     *
     */
    getCartProducts: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['cart_uuid', 'warehouse'],
            url: {
                base: URL,
                hash: 'get-shopping-cart-products'
            }
        });
        if (!statusError)
            return this.get(`${URL}/cart_products`, {...options});
    },


    /**
     * ✅ Изменить владельца корзины
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-change-owner
     *
     */
    changeCartOwner: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['cart_uuid', 'client_uuid'],
            url: {
                base: URL,
                hash: 'get-shopping-cart-products'
            }
        });
        if (!statusError)
            return this.post(`${URL}/change_owner`, {...options});
    },


    /**
     * ✅ Получить список резервов
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#get-shopping-reserves
     *
     */
    getReservesList: function (options = {}) {
        return this.get(`${URL}/reserves`);
    },


    /**
     * ✅ Удалить резервы
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#delete-shopping-reserves
     */
    deleteReserves: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['orders'],
            url: {
                base: URL,
                hash: 'delete-shopping-reserves'
            }
        });
        if (!statusError)
            return this.delete(`${URL}/reserves`, {...options});
    },


    /**
     * ✅ Список корзин
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#get-shopping-carts
     *
     */
    getCartsList: function (options = {}) {
        return this.get(`${URL}/carts`);
    },


    /**
     * ✅ Создать корзину
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-carts
     */
    createCart: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['name'],
            url: {
                base: URL,
                hash: 'post-shopping-carts'
            }
        });
        if (!statusError)
            return this.post(`${URL}/carts`, {...options});
    },


    /**
     * ✅ Добавить товар в корзину
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-cart-string-cart-uuid-product-string-product-uuid-int-quantity
     *
     */
    addProductsToCart: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['cart_uuid', 'product_uuid', 'quantity'],
            url: {
                base: URL,
                hash: 'post-shopping-cart-string-cart-uuid-product-string-product-uuid-int-quantity'
            }
        });
        if (!statusError)
            return this.post(`${URL}/cart/${options.cart_uuid}/product/${options.product_uuid}/${options.quantity}`, {...options});
    },


    /**
     * ✅ Добавить товар в корзину
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#put-shopping-cart-string-cart-uuid-product-string-product-uuid-int-quantity
     *
     */
    updateProductsQuantityInCart: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['cart_uuid', 'product_uuid', 'quantity'],
            url: {
                base: URL,
                hash: 'put-shopping-cart-string-cart-uuid-product-string-product-uuid-int-quantity'
            }
        });
        if (!statusError)
            return this.put(`${URL}/cart/${options.cart_uuid}/product/${options.product_uuid}/${options.quantity}`, {...options});
    },


    /**
     * ✅ Удалить товар из корзины
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#delete-shopping-cart-string-cart-uuid-product-string-product-uuid
     *
     */
    deleteProductFromCart: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['cart_uuid', 'product_uuid'],
            url: {
                base: URL,
                hash: 'delete-shopping-cart-string-cart-uuid-product-string-product-uuid'
            }
        });
        if (!statusError)
            return this.delete(`${URL}/cart/${options.cart_uuid}/product/${options.product_uuid}`, {...options});
    },


    /**
     * ✅ Удалить корзину
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#delete-shopping-cart-string-cart-uuid
     *
     */
    deleteCart: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['cart_uuid'],
            url: {
                base: URL,
                hash: 'delete-shopping-cart-string-cart-uuid'
            }
        });
        if (!statusError)
            return this.delete(`${URL}/cart/${options.cart_uuid}`);
    },


    /**
     * ✅ Получить корзину с товарами
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#get-shopping-cart-string-cart-uuid
     *
     */
    getCart: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['cart_uuid'],
            url: {
                base: URL,
                hash: 'get-shopping-cart-string-cart-uuid'
            }
        });
        if (!statusError)
            return this.get(`${URL}/cart/${options.cart_uuid}`);
    },

    /**
     * ✅ Получить корзину с товарами
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-cart-string-cart-uuid
     *
     */
    changeCartContagent: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['name', 'owner_uuid'],
            url: {
                base: URL,
                hash: 'post-shopping-cart-string-cart-uuid'
            }
        });
        if (!statusError)
            return this.post(`${URL}/cart/${options.cart_uuid}`);
    },


};

module.exports = Shopping;
