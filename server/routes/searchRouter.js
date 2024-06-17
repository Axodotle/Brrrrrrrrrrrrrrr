const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

router.get(
  '/:cuisine/:number',
  searchController.getByCuisine,
  searchController.fetchIngredients,
  (req, res) => {
    return res.status(200).json(res.locals.results);
  }
);

module.exports = router;
