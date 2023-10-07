$(document).ready(function () {
  $.get(
    "https://swapi-api.alx-tools.com/api/films/?format=json",
    function (data) {
      const movieTitles = data.results.map((movie) => movie.title);

      const listItems = movieTitles.map((title) => $("<li>").text(title));
      $("#list_movies").append(listItems);
    }
  );
});
