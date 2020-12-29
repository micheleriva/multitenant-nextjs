const tenants = require('../multitenant-config');

module.exports = (port = 3000) =>
  tenants
    .map((tenant) => tenant.domain)
    .map((domain) => `🟢 http://${domain}:${port}`)
    .join('\n');