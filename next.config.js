const withPWA = require("next-pwa");
module.exports = {
   reactStrictMode: true,
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});