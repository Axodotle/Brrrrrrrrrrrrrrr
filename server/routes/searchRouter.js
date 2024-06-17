const express = require('express');
const cuisineController = require('../controllers/searchController');

const router = express.Router();

router.get('/recipes', searchController.fetchRecipes);

module.exports = router;
