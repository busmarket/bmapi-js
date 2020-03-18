'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function Garage(client) {
    this.post = client.post;
    this.get = client.get;
    this.delete = client.delete;


}

const URL = '/garage';


Garage.prototype = {

    /***
     * ✅ Получить список авто в гараже
     * 🔗 https://developer.bm.parts/api/v2/garage.html#get-garage-cars
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    carsList: function (options = {}) {

        return this.get(`${URL}/cars`,);
    },

    /***
     * ✅ Добавить авто в гараж
     * 🔗 https://developer.bm.parts/api/v2/garage.html#post-garage-car
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * | searched_at    | true         |              | Время поиска
     * -------------------------------------------------------------------
     * | search_string  | true         |              | Поисковая строка
     * -------------------------------------------------------------------
     * | name           | true         |              | Название авто
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    addCar: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['searched_at', 'search_string', 'name'],
            url: {
                base: URL,
                hash: 'post-garage-car'
            }
        });
        if (!statusError)
            return this.post(`${URL}/car`, options);
    },

    /***
     * ✅ Получить данные об авто
     * 🔗 https://developer.bm.parts/api/v2/garage.html#get-garage-car-string-car-uuid
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * | car_uuid    | true         |              | ID автомобиля
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    carInfo: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['car_uuid'],
            url: {
                base: URL,
                hash: 'get-garage-car-string-car-uuid'
            }
        });
        if (!statusError)
            return this.get(`${URL}/car/${options.car_uuid}`);
    },

    /***
     * ✅ Обновить запись об авто из гаража
     * 🔗 https://developer.bm.parts/api/v2/garage.html#post-garage-car-string-car-uuid
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * | car_uuid    | true         |              | ID автомобиля
     * -------------------------------------------------------------------
     * | name        | true         |              | Новое название авто
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    updateCar: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['car_uuid', 'name'],
            url: {
                base: URL,
                hash: 'post-garage-car-string-car-uuid'
            }
        });
        if (!statusError)
            return this.post(`${URL}/car/${options.car_uuid}`, options);
    },

    /***
     * ✅ Удалить запись из гаража
     * 🔗 https://developer.bm.parts/api/v2/garage.html#delete-garage-car-string-car-uuid
     *
     * Query Parameters (options = {}):
     * ================================================================
     * |_____KEY________|__isRequired__|___default____|___description
     * ================================================================
     * -------------------------------------------------------------------
     * | car_uuid    | true         |              | ID автомобиля
     * -------------------------------------------------------------------
     * ================================================================
     *
     */
    deleteCar: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['car_uuid'],
            url: {
                base: URL,
                hash: 'post-garage-car-string-car-uuid'
            }
        });
        if (!statusError)
            return this.delete(`${URL}/car/${options.car_uuid}`);
    },

};

module.exports = Garage;
