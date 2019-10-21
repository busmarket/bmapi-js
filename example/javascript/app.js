const BmApi = require('../../lib/bmapi');
const myBmApi = new BmApi('eyJhbGciOiJIUzI1NiIsImlhdCI6MTU2NDM5MTg3MSwiZXhwIjoxNTk1OTI3ODcxfQ.eyJ1dWlkIjoiODEyRDAwMEMyOTk5QTdFNjExRTU3NjUyNDU1NUU2NkEiLCJhcHAiOiJibWFwaS1qcyJ9.SLS7zj39iZwQO1Vgz36-pMy5h3p4esyBV_lK7ufW6X4');

(async () => {
  // const response = await myBmApi.profile.settingsCreate({app_name: 'test1', settings: '{"name": "text"}'});
  // const response = await myBmApi.claims.attachment({ issue_id: 'CLAIMS-516', attach_id: '', attach_name: '' });
  // const response = await myBmApi.claims.setIssueComment({issue_id: 'CLAIMS-516', comment: 'test from js client'});
  // const response = await myBmApi.claims.getIssueComments({issue_id: 'CLAIMS-516'});
  // const response = await myBmApi.news.article({news_uuid: '81E2005056AC66D611E9B1DA94D7198D'});
  // const response = await myBmApi.advertising.promo({promo_uuid: '81E2005056AC66D611E9AD1B130C1034'});
  // const response = await myBmApi.reports.reconciliationFile({
  //   period: 'month',
  //   file_type: 'pdf'
  // });
  const response = await myBmApi.catalog.newArrivals();
  console.info( response.data );
})();