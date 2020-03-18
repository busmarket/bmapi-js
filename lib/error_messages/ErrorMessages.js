module.exports = {
    token: `\n\n🚨️️ BmApi. Authorization token is not defined!
  \n🔗 https://developer.bm.parts/api/v2/overview.html#api\n\n`,

    BmApiMethodError: function (name, url) {
        return `\n\n🚨️️ BmApi.There is an error in the '${name}'  method! Check documentation!
    🔗  https://developer.bm.parts/api/v2${url || '/'} \n\n`
    },
    BmApiError: function (options = {inputOptions: {}, requireParameters: null, url: {base: '', hash: ''}}) {
        const optionsKeys = Object.keys(options.inputOptions);
        const params = options.requireParameters;
        const url = `${options.url.base}.html#${options.url.hash || ''}`;
        const errorStatus = params.some(param => !optionsKeys.includes(param));
        if (errorStatus)
            throw Error(
                `\n\n\t🚨️️ BmApi.${params.length > 1 ? 'One or more r' : 'R'}equired parameter${params.length > 1 ? 's' : ''} { ${params.join(', ')} } ${params.length > 1 ? 'are' : 'is'} not defined! \n\t🔗  https://developer.bm.parts/api/v2${url || '/'} \n\n`
            );
        else
            errorStatus

    }
};
