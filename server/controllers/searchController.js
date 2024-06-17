// Example Request
// GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
//https://api.spoonacular.com/recipes/716429/information?apiKey=d1a663cd43824e828a871cad5a7e6714
//POST https://api.spoonacular.com/recipes/cuisine
// can specify TYPE in API call, e.g. "main course"
// //NO LONGER NEEDED - Now handled in ../services/apiServices
// const spoon_URL =
//   'https://api.spoonacular.com/recipes/complexSearch/?apiKey=d1a663cd43824e828a871cad5a7e6714&sort=random&cuisine=italian&number=1&addRecipeInformation=false&addRecipeInstructions=false';

//Get similar recipes - GET https://api.spoonacular.com/recipes/{id}/similar

const apiServices = require('../services/apiServices');

const searchController = {};

// STRETCH - Setup for-in look to pass params
searchController.getByCuisine = (req, res, next) => {
  const { cuisine, number } = req.params;
  const endpoint = '/recipes/complexSearch';
  const params = {
    sort: 'random',
    cuisine,
    number,
  };
  apiServices
    .fetchSpoonacular(endpoint, params)
    .then((data) => {
      res.locals.results = data.results;
      return next();
    })
    .catch((err) => {
      return next({
        log: `searchController.getByCuisine ERROR: ${err}`,
        status: 500,
        message: { err: 'Error retrieving recipes' },
      });
    });
};

module.exports = searchController;

//   fetch(spoon_URL)
//     .then((data) => data.json())
//     .then((parsedData) => {
//       const { results } = parsedData;
//       console.log('response =', results);
//       res.locals.recipeData = results;
//       return next();
//     })
//     .catch((err) =>
//       next({
//         log: `searchController.getByCuisine ERROR: ${err}`,
//         status: 500,
//         message: { err: 'Error retrieving recipes' },
//       })
//     );
// };

/***************************************************************
 * searchController.getByCuisine = (req, res, next) => {       *
 *   fetch(spoon_URL)                                          *
 *     .then((data) => data.json())                            *
 *     .then((parsedData) => {                                 *
 *       const { results } = parsedData;                       *
 *       console.log('response =', results);                   *
 *       res.locals.recipeData = results;                      *
 *       return next();                                        *
 *     })                                                      *
 *     .catch((err) =>                                         *
 *       next({                                                *
 *         log: `searchController.getByCuisine ERROR: ${err}`, *
 *         status: 500,                                        *
 *         message: { err: 'Error retrieving recipes' },       *
 *       })                                                    *
 *     );                                                      *
 * };                                                          *
 ***************************************************************/
