const express = require('express');
const bodyParser = require('body-parser');

// Create express instnace
const app = express();
app.use(bodyParser.json());

// Require API routes
const routes = require('./routes');

// Import API Routes
app.use(routes);

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
};
