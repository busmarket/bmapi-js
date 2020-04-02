const BmApi = require('../../dist/bmapi');

const Token = `[authorization_token]`;
const myBmApi = new BmApi(Token);

// (async () => {
//     try {
//         const QueryResponse = await myBmApi.claims.addAttachment({attachment: {}, issue_id: 'CLAIMS-546'});
//         console.log(QueryResponse);
//     } catch (err) {
//         console.log(err)
//     }
// })()

const fileInput = document.getElementById('file');
fileInput.addEventListener('change', async function() {
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('attachment', file);
    console.log('formData', formData)

    const QueryResponse = await myBmApi.claims.addAttachment({attachment: formData, issue_id: 'CLAIMS-546'});
    console.log(QueryResponse.data);
})