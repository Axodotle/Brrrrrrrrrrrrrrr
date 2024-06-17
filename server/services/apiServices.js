// centralize external API logic, not neccessary now but would be very helpful for scaling
//Routes and Services are modeled with scalability in mind
//Placeholders for illustration

// IRL keys would be stored securely (.env etc)
const Spoon_API_KEY = 'd1a663cd43824e828a871cad5a7e6714';
// const XXXXXX_API_KEY = ""
// const YYYYYY_API_KEY = ""
// const ZZZZZZ_API_KEY = ""
const SpoonBaseURL = 'https://api.spoonacular.com';
const SpoonAuth = `apiKey=${Spoon_API_KEY}`;
const apiServices = {
  fetchSpoonacular(endpoint, params) {
    // used const to make sure "key" can't be reassigned within the loop
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        // Append using API-specified syntax
        params += `&${key}=${params[key]}`;
      }
    }
  },
};

const url = `${SpoonBaseURL}${endpoint}?${SpoonAuth}`;

//Final Step - fetch using newly constructed URL and return response from external API
return fetch(url).then((response) => {
  // Check if response is successfull
  if (!response.ok) {
    throw new Error(`Responde failed @ ${endpoint}: ${response.status}`);
  }
  return response.json();
});

module.exports = apiServices;

/*****************************************************************************************************
 *   Spoontacular API Authentication                                                                 *
 * To use the API you need an API key.                                                               *
 *                                                                                                   *
 * Once you have your API key, you have to put it in the request URL                                 *
 * for every request you make like so ?apiKey=YOUR-API-KEY.                                          *
 * Attention: Only the first query parameter is prefixed with a ? (question mark),                   *
 * all subsequent ones will be prefixed with a & (ampersand). That is how URLs                       *
 * work and nothing related to our API. Here's a full example with two parameters                    *
 * apiKey and includeNutrition:                                                                      *
 * https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true. *
 * Please further note that parameters are case sensitive, it is apiKey not apikey.                  *
 *                                                                                                   *
 *****************************************************************************************************/
