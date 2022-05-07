const prod = process.env.NODE_ENV === 'production';

module.exports = {
    assetPrefix: prod ? '/pg-next' : '',
    env: {
        PREFIX_URL: prod ? '/pg-next' : '',
    },
};
