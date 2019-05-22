const BmApi = require('../../lib/bmapi');
const myBmApi = new BmApi('[authorization_token]');

(async () => {
  // const response = await myBmApi.profile.settingsCreate({app_name: 'test1', settings: '{"name": "text"}'});
  // const response = await myBmApi.claims.attachment({ issue_id: 'CLAIMS-516', attach_id: '', attach_name: '' });
  // const response = await myBmApi.claims.setIssueComment({issue_id: 'CLAIMS-516', comment: 'test from js client'});
  const response = await myBmApi.claims.getIssueComments({issue_id: 'CLAIMS-516'});
  console.info( response.data );
})();