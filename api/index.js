const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express instance
const app = express();
app.use(bodyParser.json());

// Require API routes
const routes = require('./routes');

// Import API Routes
app.use(routes);
app.use(cors());

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
};
