#!/usr/bin/node
const request = require('request');

// Check if the API URL argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node 4-starwars_count.js <api_url>');
  process.exit(1);
}

// Get the API URL from the command line arguments
const apiUrl = process.argv[2];

// Function to recursively fetch and count movies
function fetchAndCountMovies(url, count) {
  request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error.message);
    } else if (response.statusCode !== 200) {
      console.error(`HTTP Status Code: ${response.statusCode}`);
    } else {
      try {
        const filmData = JSON.parse(body);
        const wedgeAntillesMovies = filmData.results.filter((film) =>
          film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
        );

        count += wedgeAntillesMovies.length;

        // Check if there are more pages and follow the next link
        if (filmData.next) {
          fetchAndCountMovies(filmData.next, count);
        } else {
          console.log(count);
        }
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError.message);
      }
    }
  });
}

// Start counting movies
fetchAndCountMovies(apiUrl, 0);
