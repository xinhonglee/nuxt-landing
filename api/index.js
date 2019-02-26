const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create express instance
const app = express();
app.use(cors());
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
