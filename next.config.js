const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    images: {
        domains: ['api.bitbarg.me'],
    },
});
