const BmApi = require('../../lib/bmapi');
const myBmApi = new BmApi('eyJhbGciOiJIUzI1NiIsImlhdCI6MTU1NzMyODQyNiwiZXhwIjoxNTg4ODY0NDI2fQ.eyJ1dWlkIjoiODEyRDAwMEMyOTk5QTdFNjExRTU3NjUyNDU1NUU2NkEiLCJhcHAiOiJibWFwaSJ9.KvUGqROD286yjfOfjgdft079VjN2sebFO7lHPqTsulY');

(async () => {
  const response = await myBmApi.profile.settingsCreate({app_name: 'test1', settings: '{"name": "text"}'});
  console.info(response.data || response);
})();
