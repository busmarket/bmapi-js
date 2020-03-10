'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

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
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-shopping-reserve-products-detailed
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY______|__isRequired__|___default____|___description     |
     * ================================================================
     * | reserves_uuid|     true     |              |  Массив резервов  |

     * ================================================================
     *
     * Если параметр `city` или `carrier` указан не верно
     * будет возвращен ответ [422 Unprocessable Entity]
     */
    getReserveProductsDetails: function (options = {}) {
        const requireParameters = ['reserves_uuid'];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#post-shopping-reserve-products-detailed`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.get(`${URL}/reserve/products/detailed`);

    },


    /***
     * ✅ Получить незарезервированные товары в Excel
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#excel
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_____|__isRequired__|___default____|___description     |
     * ================================================================

     * ================================================================
     *

     */
    downloadUnreservedExcel: function (options = {}) {
        const requireParameters = [];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#excel`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.get(`${URL}/download/unreserved`);
    },


    /***
     * ✅ Получить товары из списка резервов
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-shopping-reserve-products
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
        const requireParameters = ['reserves_uuid'];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#post-shopping-reserve-products`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.post(`${URL}/reserve/products`);

    },


    /***
     * ✅ Зарезервировать заказ
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-shopping-reserve-process
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
        const requireParameters = ['order_uuid', 'comment', 'warehouse_uuid'];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#post-shopping-reserve-process`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.get(`${URL}/reserve/process`, options);


    },


    /***
     * ✅ Сохранить неотгруженные товары в корзину
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-shopping-create-unshipped
     *
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_______|||_isRequired_|||__default___|||__description
     * ================================================================
     * | products       |     true     |              |  Список неотгруженных товаров. Пример: [{“uuid”: “”, “quantity”: 2}]
     * ----------------------------------------------------------------
     * | cart_name      |     true     |              |  Текст комментария
     * ================================================================
     *
     */
    createUnshipped: function (options = {}) {
        const requireParameters = ['products', 'cart_name'];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#post-shopping-create-unshipped`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.post(`${URL}/create/unshipped`, options);


    },

    /***
     * ✅ Шаблоны импорта
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-shopping-import-template
     *
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_______|||_isRequired_|||__default___|||__description
     * ================================================================
     * ================================================================
     *
     */
    getImportTemplate: function (options = {}) {
        const requireParameters = [];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#get-shopping-import-template`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.get(`${URL}/import/template`, options);


    },

    /***
     * ✅ Получить настройки импорта
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-shopping-import-settings
     *
     * * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY_______|||_isRequired_|||__default___|||__description
     * ================================================================
     * ================================================================
     *
     */
    getImportSettings: function (options = {}) {
        const requireParameters = [];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#get-shopping-import-settings`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.get(`${URL}/import/settings`);


    },

    /**
     * ✅ Сохранить настройки импорта
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-shopping-import-settings
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY____|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | import_type |     true     |              | Артикул, бренд, к-во
     * ------------------------------------------------------------------------------
     * | name        |     false    |              | Если задан тип - Артикул
     * ------------------------------------------------------------------------------
     * | article     |     false    |              | Если задан тип - Артикул
     * ------------------------------------------------------------------------------
     * | brand       |     false    |              | Если задан тип - Артикул
     * ------------------------------------------------------------------------------
     * | code        |     false    |              | Если задан тип - Код
     * ------------------------------------------------------------------------------
     * | UUID        |     false    |              | Если задан тип - UUID
     * ------------------------------------------------------------------------------
     * | quantity    |     false    |              | Колонка количество
     * ------------------------------------------------------------------------------
     * ==============================================================================
     * Пример ответа:
     ** Успех:
     *** Статус: 201; Сообщение: {message: “Конфигурация успешно создана” };
     ** Неудача:
     *** Статус: 422; Сообщение: {message: “Параметры заданы не правильно” };
     */

    setImportSettings: function (options = {}) {
        const requireParameters = ['import_type'];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#post-shopping-import-settings`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.post(`${URL}/import/settings`, {...options});
    },


    /**
     * ✅ Удалить настройку импорта
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#delete-shopping-import-settings
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | setting_uuid  |     true     |              | UUID настройки импорта
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */

    configConfirm: function (options = {}) {
        const requireParameters = ['setting_uuid'];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#delete-shopping-import-settings`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.delete(`${URL}/import/settings`, {...options});
    },
    /**
     * ✅ Получить файл с необработаными рядами при импорте.
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-shopping-table-err-file
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | type          |     false     |       xls     | 	Тип файла csv, xls. По умолчанию xls
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */

    getFileWithErrors: function (options = {}) {
        const requireParameters = [];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#get-shopping-table-err-file`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.get(`${URL}/table/err_file`, {type:'xls',...options});
    },

    /**
     * ✅ Получить файл с необработаными рядами при импорте.
     * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-shopping-table-err-file
     * * Query Parameters (options = {}):
     * ==============================================================================
     * |_____KEY______|||_isRequired_|||__default___|||__description___________________
     * ==============================================================================
     * | file          |     true     |               | 	Файл для ипорта
     * ------------------------------------------------------------------------------
     * | extension     |     true     |               | 	CSV, XLSX, XLS
     * ------------------------------------------------------------------------------
     * | separator     |     false    |               | 	Опционально, если CSV
     * ------------------------------------------------------------------------------
     * ==============================================================================
     *
     */

    tablePreloadFile: function (options = {}) {
        const requireParameters = [];
        const optionsKeys = Object.keys(options);
        const url = `${URL}.html#get-shopping-table-err-file`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters, url));
        else
            return this.get(`${URL}/table/err_file`, {type:'xls',...options});
    },
    //// /**
    //  * ✅ Подтверждение создания настройки доставки
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-confirm
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY____|||_isRequired_|||__default___|||__description___________________|
    //  * ==============================================================================
    //  * | code        |     true     |              | Код подтверждения из сообщения _|
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  *
    //  * *В случаи успешного подтверждения возвращаеться статус 201
    //  */
    //
    // configConfirm: function (options = {}) {
    //     const requireParameters = ['code'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#post-delivery-config-confirm`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         return this.post(`${URL}/config/confirm`, {...options});
    // },
    //
    //
    // /**
    //  * ✅ Установить настройку доставки по умолчанию
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-config-default
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY_____|||_isRequired_|||__default___|||__description___________________|
    //  * ==============================================================================
    //  * | config_uuid  |     true     |              |ID настройки доставки_
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  *
    //  */
    // configDefault: function (options = {}) {
    //     const requireParameters = ['config_uuid'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#post-delivery-config-default`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         return this.post(`${URL}/config/default`, {...options});
    // },
    //
    //
    // /**
    //  * ✅ Получить название улицы города
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-city-streets
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY_____|||_isRequired_|||__default___|||__description__________________|
    //  * ==============================================================================
    //  * | city         |     true     |              |ID Города
    //  * ------------------------------------------------------------------------------
    //  * | street       |     true     |              |Частичное название улицы
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  *
    //  */
    // cityStreets: function (options = {}) {
    //     const requireParameters = ['street', 'city'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#get-delivery-city-streets`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         return this.get(`${URL}/city/streets`, {...options});
    // },
    //
    //
    // /**
    //  * ✅ Получить таблицу выездов
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-departures
    //  *
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY_____|||_isRequired_|||_________default___________|||__description_
    //  * ==============================================================================
    //  * | warehouse    |    true      | По умолчанию основной склад | ID склада
    //  * ------------------------------------------------------------------------------
    //  * | city         |    true      | По умолчанию основной город | ID города доставки
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  *
    //  */
    // deliveryDepartures: function (options = {}) {
    //     const requireParameters = ['warehouse', 'city'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#get-delivery-departures`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         return this.get(`${URL}/departures`, {...options});
    // },
    //
    //
    // /**
    //  * ✅ Список получателей
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-receivers
    //  *
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * | q            |   false      |           | Фильтр по названию города
    //  * ------------------------------------------------------------------------------
    //  * | page         |   false      |           | Навигация
    //  * ------------------------------------------------------------------------------
    //  * | per_page     |   false      |           | Кол-во ел. на странице
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  *
    //  */
    // deliveryReceivers: function (options = {}) {
    //     const url = `${URL}.html#get-delivery-receivers`;
    //     try {
    //         return this.get(`${URL}/receivers`, {...options});
    //     } catch (err) {
    //         throw Error(ErrorMessages.method_error('deliveryReceivers', url))
    //     }
    // },
    //
    //
    // /**
    //  * ✅ Создать получателя
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-receivers
    //  *
    //  * Метод возвращает статус 201 Created при успешном создании
    //  * контактного лица.
    //  *
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * | surname      |  true        |           | Фамилия
    //  * ------------------------------------------------------------------------------
    //  * | name         |  true        |           | Имя
    //  * ------------------------------------------------------------------------------
    //  * | middle_name  |  true        |           | Отчество
    //  * ------------------------------------------------------------------------------
    //  * | phone        |  true        |           | Телефон в формате 380966477711 либо +380956477711
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  */
    // deliveryReceiversAdd: function (options = {}) {
    //     const requireParameters = ['surname', 'name', 'middle_name', 'phone'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#post-delivery-receivers`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         return this.post(`${URL}/receivers`, {...options});
    // },
    //
    //
    // /**
    //  * ✅ Список перевозчиков
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#get--delivery-carriers
    //  *
    //  *  * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * |              |              |           |
    //  * ==============================================================================
    //  */
    // deliveryCarriers: function () {
    //     const url = `${URL}.html#get-delivery-carriers`;
    //     try {
    //         return this.get(`${URL}/carriers`)
    //     } catch (err) {
    //         throw Error(ErrorMessages.method_error('deliveryCarriers', url))
    //     }
    // },
    //
    //
    // /**
    //  * ✅ Список областей
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-regions
    //  *
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * |              |              |           |
    //  * ==============================================================================
    //  */
    // deliveryRegions: function () {
    //     const url = `${URL}.html#get-delivery-regions`;
    //     try {
    //         return this.get(`${URL}/regions`)
    //     } catch (err) {
    //         throw Error(ErrorMessages.method_error('deliveryRegions', url))
    //     }
    // },
    //
    //
    // /**
    //  * ✅ Настройки доставки
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-configs
    //  *
    //  * * Query Parameters (options = {}):
    //  * |_____KEY_____|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * |              |              |           |
    //  * ==============================================================================
    //  */
    // deliveryConfigs: function () {
    //     const url = `${URL}.html#get-delivery-configs`;
    //     try {
    //         return this.get(`${URL}/configs`)
    //     } catch (err) {
    //         throw Error(ErrorMessages.method_error('deliveryConfigs', url))
    //     }
    //
    // },
    //
    //
    // /**
    //  * ✅ Создать настройку доставки
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#post-delivery-configs
    //  *
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * | receiver          |    true      |           | ID контактного лица
    //  * ------------------------------------------------------------------------------
    //  * | city              |    true      |           | ID города
    //  * ------------------------------------------------------------------------------
    //  * | carrier           |    true      |           | ID перевозчика
    //  * ------------------------------------------------------------------------------
    //  * | carrier_warehouse |    true      |           | ID города
    //  * ------------------------------------------------------------------------------
    //  * | full_insurance    |              |  false    | Полная страховка
    //  * ------------------------------------------------------------------------------
    //  * | is_default        |    true      |           | Настройка по умолчанию
    //  * ------------------------------------------------------------------------------
    //  * | address           |    true      |           | Адрес для адресной доставки
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  *
    //  */
    // createDeliveryConfigs: function (options = {}) {
    //     const url = `${URL}.html#post-delivery-configs`;
    //     const requireParameters = ['receiver', 'city', 'carrier', 'carrier_warehouse', 'is_default', 'address'];
    //     const optionsKeys = Object.keys(options);
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         return this.post(`${URL}/configs`, {full_insurance: false, ...options})
    // },
    //
    //
    // /**
    //  * ✅ Отследить ТТН
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-track
    //  *
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * | tracking_number   |    true      |           | Номер ТТН перевозчика, либо
    //  *                                                  внутренний номер ТТН документа
    //  * ==============================================================================
    //  *
    //  */
    // deliveryTrack: function (options = {}) {
    //     const requireParameters = ['tracking_number'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#get-delivery-track`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         try {
    //             return this.get(`${URL}/track`, {...options});
    //         } catch (err) {
    //             throw Error(ErrorMessages.method_error('deliveryTrack', url))
    //         }
    // },
    //
    //
    // /**
    //  * ✅ Список городов области
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-region-string-region-uuid-cities
    //  *
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * | region_uuid       |  true        |           | Область
    //  * ------------------------------------------------------------------------------
    //  * | q                 |  false       |           | Фильтр по названию города
    //  * ------------------------------------------------------------------------------
    //  * | page              |  false       |           | Навигация
    //  * ------------------------------------------------------------------------------
    //  * | per_page          |  false       |           | Кол-во ел. на странице
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  *
    //  * Если параметр region_uuid указан не верно
    //  * будет возвращен ответ 422 Unprocessable Entity
    //  *
    //  */
    // deliveryRegionCities: function (options = {}) {
    //     const requireParameters = ['region_uuid'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#get-delivery-region-string-region-uuid-cities`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         return this.get(`${URL}/region/${options.region_uuid}/cities`, {...options});
    //
    //
    // },
    //
    //
    // /**
    //  * ✅ Удалить контактное лицо
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#delete-delivery-receiver-string-receiver-uuid
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * | receiver_uuid     |  true        |           | ID контактного лица (Обязательный)
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  *
    //  * В случаи успешного выполнения возвращает 204 No Content
    //  *
    //  */
    // deliveryDeleteReceiver: function (options = {}) {
    //     const requireParameters = ['receiver_uuid'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#delete-delivery-receiver-string-receiver-uuid`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         return this.delete(`${URL}/receiver/${options.receiver_uuid}`);
    //
    //
    // },
    //
    //
    // /**
    //  * ✅ Информация о перевозчике
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#get-delivery-carrier-string-carrier-uuid
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * | carrier_uuid      |  true        |           | ID перевозчика
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  *
    //  * Возвращает детальную информацию про перевозичка
    //  * и данные для возврата товара этим перевозчиком.
    //  *
    //  */
    // deliveryCarrier: function (options = {}) {
    //     const requireParameters = ['carrier_uuid'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#get-delivery-carrier-string-carrier-uuid`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else
    //         return this.get(`${URL}/carrier/${options.carrier_uuid}`, {...options});
    // },
    //
    //
    // /**
    //  * ✅ Удалить настройку доставки
    //  * 🔗 https://developer.bm.parts/api/v2/delivery.html#delete-delivery-config-string-config-uuid
    //  * * Query Parameters (options = {}):
    //  * ==============================================================================
    //  * |_____KEY__________|||_isRequired_|||_default_|||__description__________________|
    //  * ==============================================================================
    //  * | config_uuid       |  true        |           | ID настройки доставки
    //  * ------------------------------------------------------------------------------
    //  * ==============================================================================
    //  */
    // deliveryDeleteConfig: function (options = {}) {
    //     const requireParameters = ['config_uuid'];
    //     const optionsKeys = Object.keys(options);
    //     const url = `${URL}.html#delete-delivery-config-string-config-uuid`;
    //     if (requireParameters.some(param => !optionsKeys.includes(param)))
    //         throw Error(ErrorMessages.params_error(requireParameters, url));
    //     else {
    //         return this.delete(`${URL}/config/${options.config_uuid}`, {...options})
    //     }
    // },


};

module.exports = Shopping;
