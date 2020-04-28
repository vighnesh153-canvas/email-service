const express = require('express');
const router = express.Router();

const homePageController = require('./controllers/home-controller');
const statusController = require('./controllers/status-controller');
const sendMailController = require('./controllers/send-mail-controller');
const _404Controller = require('./controllers/404-controller');

router.get('/', homePageController);
router.get('/status', statusController);
router.post('/send', sendMailController);
router.all('*', _404Controller);

module.exports = router;
