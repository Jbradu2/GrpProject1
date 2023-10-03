//global variables
var apiKey = '?apiKey=2e2817cf7b4646899c0dd85ef8464be1';
var apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';
var searchInput = $('#enterFood');
var results = $('#results-div');
var inputText;



function search(){
  
  if(searchInput.val() !== ""){
    inputText =searchInput.val();
    //consrturct variable for URL with the input text from user
var fetchUrl = apiUrl + apiKey +"&query=" + inputText;
    fetch(fetchUrl)
    .then(function (response) {
      if (!response.ok) {
        // Update the error message in results div
        results.html("Error Response: " + response.status);
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      // Handle the JSON response data here
      // You can update the results div with the data
      console.log(data);
      displayResults(data.results);
    })
    .catch(function (error) {
      // Handle any other errors that may occur during the fetch
      console.error("Fetch error:", error);
    });
} else {
  // Update the error message in results div
  results.html("Error Response: No such food");
}
}
//event listener for 'click' or 'enter key'
$("#search-form").submit(function (e) {
e.preventDefault();
search();
});

function displayResults(recipeResults) {
  // Clear previous results
  results.html('');

  if (recipeResults.length === 0) {
    results.html('No recipes found.');
    return;
  }

  // Loop through the recipe results and display them
  recipeResults.forEach(function (recipe) {
    var recipeDiv = $('<div class="recipe">');
    var title = $('<h2>').text(recipe.title);

    // Check if the API provides an image URL for the item
    if (recipe.image) {
      var image = $('<img>').attr('src', recipe.image);
      recipeDiv.append(image);
    }


    recipeDiv.append(title);
    results.append(recipeDiv);
  });

}
//given a recipie dashboard with form inputs
//when i search for a food item
//then i am presented with image and link to that item with picture