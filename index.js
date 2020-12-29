const express = require('express');
const chalk   = require('chalk');
const next    = require('next');
const router  = require('./lib/route-handler');
const dev     = process.env.NODE_ENV !== 'production';
const port    = process.env.PORT || 3000
const app     = next({ dev });

async function main() {

  try {
    await app.prepare();
    
    const handle  = app.getRequestHandler();
    const server  = express();
    
    server
      .get('*', (req, res) => router(handle, app, req, res))
      .listen(port, () => {
        const domains = require('./lib/extract-domains');
        console.clear();
        console.log(chalk.green.bold('\n🎉 Serving the following domains:\n'));
        console.log(domains(port));
      });
  
  } catch(err) {
    console.log(err.stack);
  }

};

main();