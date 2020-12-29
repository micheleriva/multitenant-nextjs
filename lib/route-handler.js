const fs        = require('fs');
const path      = require('path');
const { parse } = require('url');
const tenants   = require('../multitenant-config');

function isValidTenant(hostname) {
  return tenants.map(({ domain }) => domain).includes(hostname);
}

function getTenantName(hostname) {
  return tenants.find(({ domain }) => domain === hostname).name;
}

function isValidPage(tenant, route) {
  const pagesDir = path.join(__dirname, '../pages/', tenant);

  if (route === '/' && fs.existsSync(path.join(pagesDir, 'index.js'))) {
    return true;
  }

  return fs.existsSync(path.join(pagesDir, `${route}.js`));
}

function routeHandler(handle, app, req, res) {
  const parsedUrl           = parse(req.url, true)
  const { pathname, query } = parsedUrl;
  const { hostname }        = req;

  if (!isValidTenant(hostname)) {
    return res
    .status(500)
    .json({ error: `${hostname} is not a supported domain` })
    .end();
  }
  
  const tenant = getTenantName(hostname);

  if (isValidPage(tenant, pathname)) {
    const page = pathname === '/' ? `/${tenant}` : `/${tenant}${pathname}`
    return app.render(req, res, page, query)  
  }

  return handle(req, res);
};

module.exports = routeHandler;
