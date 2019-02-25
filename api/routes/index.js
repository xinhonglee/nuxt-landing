const express = require('express');
const router = express.Router();

const contactRoutes = require('./contact.route');
/**
 * GET api/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * api/contact
 */
router.use('/contact', contactRoutes);

module.exports = router;
