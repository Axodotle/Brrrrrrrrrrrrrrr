const path = require('path');
const express = require('express');
// // Controllers now handled withinappropriate routers
// const searchController = require('./controllers/searchController');

// Added routers - ideally these would reside in 'apiRouter.js' in order to reduce clutter
// const imageRouter = require('./routes/imageRouter');
// const recipeRouter = require('./routes/recipeRouter');
const searchRouter = require('./routes/searchRouter');
// const widgetRouter = require('./routes/widgetRouter');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/*
app.get(
  '/api/cuisine',
  searchController.getByCuisine, (req, res) => {
    return res.status(200).json(res.locals.recipeData);
  }
);
*/

// Routes
// app.use('/api/images', imageRouter);
// app.use('/api/recipe', recipeRouter);
app.use('/api/search', searchRouter);
// app.use('/api/widgets', widgetRouter);

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
  console.log(errorObj.log)
  return res.status(errorObj.status).json(errorObj.message); //either it returns the default or the updated err
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
