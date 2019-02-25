const express = require('express');
const controller = require('../controllers/contact.controller');

const router = express.Router();

/**
 * @api {post} send Email
 */
router
  .route('/say-hello')
  .post(controller.sendSayHelloEmail);

/**
 * @api {post} send Email
 */
router
  .route('/request-estimate')
  .post(controller.sendRequestEstimateEmail);

module.exports = router;
