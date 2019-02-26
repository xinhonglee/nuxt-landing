const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');

// Create express instance
const app = express();
app.use(cors());
// secure apps by setting various HTTP headers
app.use(helmet());

// Import API Routes
app.use(routes);

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
};
