const path = require('path');
const express = require('express');
const searchController = require('./controllers/searchController');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get(
  '/api/cuisine',
  searchController.getByCuisine, (req, res) => {
    return res.status(200).json(res.locals.recipeData);
  }
);

app.use((req, res) => {
  return res.sendStatus(404);
});

app.use((err, req, res, next) => {
  let defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred - GEH' },
  };

  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message); //either it returns the default or the updated err
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
