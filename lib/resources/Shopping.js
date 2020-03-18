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
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description     |
     * ================================================================
     * | reserves_uuid  |     true     |              |  Массив резервов  |
     * ================================================================
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
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_____|__isRequired__|___default____|___description     |
     * ================================================================
     * -----------------------------------------------------------------
     * ================================================================
     *
     */
    downloadUnreservedExcel: function (options = {}) {
        return this.get(`${URL}/download/unreserved`,options);
    },


    /***
     * ✅ Получить товары из списка резервов
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-reserve-products
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_______|__isRequired__|___default____|___description
     * ================================================================
     * | reserves_uuid |     true     |              |  Массив резервов
     * ================================================================
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
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_______|||_isRequired_|||__default___|||__description
     * ================================================================
     * | order_uuid     |     true     |              |  ID заказа
     * ----------------------------------------------------------------
     * | comment        |     true     |              |  Текст комментария
     * ----------------------------------------------------------------
     * | warehouse_uuid |     true     |              |  ID склада|
     * ================================================================
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
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_______|||_isRequired_|||__default___|||__description
     * ================================================================
     * | products       |     true     |              |  Список неотгруженных товаров.
     * |                |              |              |  Пример: [{“uuid”: “”, “quantity”: 2}]
     * ----------------------------------------------------------------
     * | cart_name      |     true     |              |  Текст комментария
     * ================================================================
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
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_______|||_isRequired_|||__default___|||__description
     * ================================================================
     * ================================================================
     *
     */
    importTemplate: function (options = {}) {
        return this.get(`${URL}/import/template`, options);
    },


    /***
     * ✅ Получить настройки импорта
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#get-shopping-import-settings
     *
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_______|||_isRequired_|||__default___|||__description
     * ================================================================
     * ================================================================
     *
     */
    importSettings: function (options = {}) {
        return this.get(`${URL}/import/settings`);
    },


    /**
     * ✅ Сохранить настройки импорта
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-import-settings
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | import_type |     true     |              | Артикул, бренд, к-во
     * ------------------------------------------------------------------------------
     * | name        |              |              | Если задан тип - Артикул
     * ------------------------------------------------------------------------------
     * | article     |              |              | Если задан тип - Артикул
     * ------------------------------------------------------------------------------
     * | brand       |              |              | Если задан тип - Артикул
     * ------------------------------------------------------------------------------
     * | code        |     false    |              | Если задан тип - Код
     * ------------------------------------------------------------------------------
     * | UUID        |     false    |              | Если задан тип - UUID
     * ------------------------------------------------------------------------------
     * | quantity    |     false    |              | Колонка количество
     * ------------------------------------------------------------------------------
     * | separator   |     true     |              | separator
     * ------------------------------------------------------------------------------
     * ==============================================================================
     * Пример ответа:
     ** Успех:
     *** Статус: 201; Сообщение: {message: “Конфигурация успешно создана” };
     ** Неудача:
     *** Статус: 422; Сообщение: {message: “Параметры заданы не правильно” };
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | setting_uuid  |     true     |              | UUID настройки импорта
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | type          |     false     |       xls     |    Тип файла csv, xls. По умолчанию xls
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    getFileWithErrors: function (options = {}) {
        return this.get(`${URL}/table/err_file`, {type: 'xls', ...options});
    },


    /**
     * ✅ Вернуть распознаный файл.
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-table-preload
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | file          |     true     |               |    Файл для ипорта
     * ------------------------------------------------------------------------------
     * | extension     |     true     |               |    CSV, XLSX, XLS
     * ------------------------------------------------------------------------------
     * | separator     |     false    |               |    Опционально, если CSV
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY________|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | import_type     |     true     |               |    Доступные значения article, code
     * ------------------------------------------------------------------------------
     * | article_column  |     true     |               |    Номер колонки с артикулом
     * ------------------------------------------------------------------------------
     * | brand_column    |     true     |               |    Номер колонки с брендом
     * ------------------------------------------------------------------------------
     * | code_column     |     true     |               |    Номер колонки с кодом
     * ------------------------------------------------------------------------------
     * | quantity_column |     true     |               |    Номер колонки с количеством
     * ------------------------------------------------------------------------------
     * | uuid_column     |     true     |               |    Номер колонки с ID товара
     * ------------------------------------------------------------------------------
     * | cart_uuid       |     true     |               |    ID заказа. Если не передано, то будет создан новый заказ
     * ------------------------------------------------------------------------------
     * | separator       |     false    |               |    Разделитель
     * ------------------------------------------------------------------------------
     * | name            |     true     |               |
     * ------------------------------------------------------------------------------
     * | file            |     true     |               |    файл
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    getCartsCount: function (options = {}) {
        return this.get(`${URL}/carts/count`);
    },


    /**
     * ✅ Объединить корзины
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-carts-union
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | carts_array   |     true     |              | Массив ID корзин.
     * |               |              |              | Пример: carts_array = ["36eee850af3...", "da6006444f..."]
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | cart_uuid     |     true     |              | ID Корзины.
     * ------------------------------------------------------------------------------
     * | warehouse     |     true     |              | Массив ID складов
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | cart_uuid     |     true     |              | ID Корзины.
     * ------------------------------------------------------------------------------
     * | client_uuid   |     true     |              | ID нового владельца (только связанные контрагенты)
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    getReservesList: function (options = {}) {
        return this.get(`${URL}/reserves`);
    },


    /**
     * ✅ Удалить резервы
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#delete-shopping-reserves
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | orders        |     true     |              | ID резерва. В запросе может быть передано несколько резервов.
     * ------------------------------------------------------------------------------
     * ==============================================================================
     * Пример запроса:
     *  curl -X DELETE https://api.bm.parts/shopping/reserves?orders=6e58fa9d-374a-11e8-8118-005056ac1ea9
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */
    getCartsList: function (options = {}) {
        return this.get(`${URL}/carts`);
    },


    /**
     * ✅ Создать корзину
     * 🔗 https://developer.bm.parts/api/v2/shopping.html#post-shopping-carts
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | name          |     true     |              | Описание корзины.
     * ------------------------------------------------------------------------------
     * | products      |     false    |              | Массив списка товаров и кол-ва
     * ------------------------------------------------------------------------------
     * | id_type       |     false    |              | ID Тип для распознования товара
     * ------------------------------------------------------------------------------
     * | warehouse     |     false    |              | ID Склада. По умолчанию - основной склад.
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     *
     * Метод возвращает статус 201 CREATED при успешном создании корзины.
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | cart_uuid     |     true     |              | ID Корзины.
     * ------------------------------------------------------------------------------
     * | product_uuid  |     true     |              | ID Товара или код в формате 000042915
     * ------------------------------------------------------------------------------
     * | quantity      |     true     |              | Количество
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     * Если используется метод POST количество будет установлено на переданное значени.
     * Если необходимо добавить количество к уже имеющемуся в корзине импользуйте метод PUT.
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | cart_uuid     |     true     |              | ID Корзины.
     * ------------------------------------------------------------------------------
     * | product_uuid  |     true     |              | ID Товара или код в формате 000042915
     * ------------------------------------------------------------------------------
     * | quantity      |     true     |              | Количество
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     * Если используется метод POST количество будет установлено на переданное значени.
     * Если необходимо добавить количество к уже имеющемуся в корзине импользуйте метод PUT.
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | cart_uuid     |     true     |              | ID Корзины.
     * ------------------------------------------------------------------------------
     * | product_uuid  |     true     |              | ID Товара или код в формате 000042915
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | cart_uuid     |     true     |              | ID Корзины.
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     * При успешном выполнении метод вернет 200 Success.
     * В случаи если парметр ID корзины указан не верно, метод вернет 404 Not Found.
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | cart_uuid     |     true     |              | ID Корзины.
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | name          |     true     |              | Новый заголовок корзины.
     * ------------------------------------------------------------------------------
     * | owner_uuid    |     true     |              | Изменить собственника корзины, в рамках ваших контрагентов.
     * ------------------------------------------------------------------------------
     * | cart_uuid     |     true     |              | ID Корзины.
     * ------------------------------------------------------------------------------
     * ==============================================================================
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
