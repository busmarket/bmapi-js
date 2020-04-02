'use strict';

const ErrorMessages = require('../error_messages/ErrorMessages');
const BmApiError = ErrorMessages.BmApiError;

function Trainings(client) {
    this.get = client.get;
    this.post = client.post;
}

const URL = '/trainings';


Trainings.prototype = {


    /**
     * ✅ Регистрация участника на тренинг.
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#post-trainings-register
     *
     */
    registerForTraining: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['training_uuid', 'full_name', 'position', 'phone_number'],
            url: {
                base: URL,
                hash: 'post-trainings-register'
            }
        });
        if (!statusError)
            return this.post(`${URL}/register`, options);
    },

    /**
     * ✅ Получить список тренингов.
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#get-trainings-list
     *
     */
    getTrainingsList: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: [],
            url: {
                base: URL,
                hash: 'get-trainings-list'
            }
        });
        if (!statusError)
            return this.get(`${URL}/list`, {...{filter: 'upcoming'}, ...options});
    },

    /**
     * ✅ Получить объект для добавления в календарь.
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#get-trainings-string-training-uuid-icalendar
     *
     */
    trainingToCalendar: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['training_uuid'],
            url: {
                base: URL,
                hash: 'get-trainings-string-training-uuid-icalendar'
            }
        });
        if (!statusError)
            return this.get(`${URL}/${options['training_uuid']}/iCalendar`);
    },


    /**
     * ✅ Получить трениниг с зарегистрированными участниками.
     * 🔗 https://developer.bm.parts/api/v2/trainings.html#get-trainings-string-training-uuid
     *
     */
    getTraining: function (options = {}) {
        const statusError = BmApiError({
            inputOptions: options,
            requireParameters: ['training_uuid'],
            url: {
                base: URL,
                hash: 'get-trainings-string-training-uuid'
            }
        });
        if (!statusError)
            return this.get(`${URL}/${options['training_uuid']}`);
    },
};


module.exports = Trainings;
