// A little harder than I expected

const express = require('express');
const ImageController = require('../controllers/imageController');

const router = express.Router();

router.get('/images', ImageController.fetchJPG);

module.exports = router;
