'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');

function Trainings(client) {
    this.get = client.get;
    this.post = client.post;
}

const URL = '/trainings';



Trainings.prototype = {


    /***
     * ✅ Регистрация участника на тренинг
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#post-trainings-register
     *
     * Query Parameters (options = {}):
     * --------------------------------------------------------------------------
     * | training_uuid      | ID Тренинга.
     * --------------------------------------------------------------------------
     * | full_name          |  ФИО участника.
     * --------------------------------------------------------------------------
     * | position           |  Должность.
     * --------------------------------------------------------------------------
     * | phone_number       |  Номер телефона.
     * --------------------------------------------------------------------------
     */
    registerForTraining: function (options = {}) {
        const requireParameters = ['training_uuid', 'full_name', 'position', 'phone_number'];
        const optionsKeys = Object.keys(options);
        const url=`${URL}.html#post-trainings-register`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters,url));
        else
            return this.post(`${URL}/register`);
    },


    /***
     * ✅ Получить список тренингов
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#get-trainings-list
     * * * Query Parameters (options = {}):
     * --------------------------------------------------------------------------
     * | filter       |            | Фильтр по акциям. Может быть upcoming, archived, all.
     *                             | По умолчанию, upcoming.
     * --------------------------------------------------------------------------
     * | page         |is required |  Страница выдачи.
     * --------------------------------------------------------------------------
     * | per_page     |is required |  Кол-во элементов в выдаче.
     * --------------------------------------------------------------------------
     *
     */
    getTrainingsList: function (options = {}) {
        const requireParameters = ['page', 'per_page', 'filter'];
        const optionsKeys = Object.keys(options)
        const url=`${URL}.html#get-trainings-list`;
        if (requireParameters.some(param => !optionsKeys.includes(param))) {
            throw Error(ErrorMessages.params_error(requireParameters,url));
        } else
            return this.get(`${URL}/list`);
    },


    /***
     * ✅ Получить объект для добавления в календарь
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#get-trainings-string-training-uuid-icalendar
     * Query Parameters (options = {}):
     * --------------------------------------------------------------------------
     * | training_uuid   |is required | ID Тренинга.
     * --------------------------------------------------------------------------
     *
     */
    trainingToCalendar: function (options = {}) {
        const requireParameters = ['training_uuid'];
        const optionsKeys = Object.keys(options)
        const url=`${URL}.html#get-trainings-string-training-uuid-icalendar`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters));
        else
            return this.post(`${URL}/${options['training_uuid']}/iCalendar`);

    },


    /***
     * ✅ Получить трениниг с зарегистрированными участниками
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#get-trainings-string-training-uuid
     * * * Query Parameters (options = {}):
     * --------------------------------------------------------------------------
     * | training_uuid     |is required | ID Тренинга
     * --------------------------------------------------------------------------
     */
    getTraining: function (options = {}) {
        const requireParameters = ['training_uuid'];
        const optionsKeys = Object.keys(options)
        const url=`${URL}.html#get-trainings-string-training-uuid`;
        if (requireParameters.some(param => !optionsKeys.includes(param)))
            throw Error(ErrorMessages.params_error(requireParameters,url));
        else
            return this.get(`${URL}/${options['training_uuid']}`);


    },
};


module.exports = Trainings;
