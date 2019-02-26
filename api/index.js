const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

// Create express instance
const app = express();
app.use(cors());
app.use(bodyParser.json());
// secure apps by setting various HTTP headers
app.use(helmet());

// Require API routes
const routes = require('./routes');

// Import API Routes
app.use(routes);

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
};
