const routes  = require('next-routes')
const tenants = require('../multitenant-config'); 

module.exports = (domain) => {
  const config = tenants.find(tenant => tenant.domain === domain)
  const res    = routes();

  for (const route of config.routes) {
    res.add(route);
  }

  return res;
}