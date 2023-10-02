//global variables
var apiKey = 'apiKey=2e2817cf7b4646899c0dd85ef8464be1';
var apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?'
var searchInput = $('#enterFood');
var results = $('#results-div');
var inputText;



function search(){
  
  if(searchInput.val() !== ""){
    inputText =searchInput.val();
    //consrturct URL with the input text from user
    var fetchUrl = apiUrl + apiKey +"&query" + inputText;
    fetch(fetchUrl)
    .then(function (response) {
      if (!response.ok) {
        // Update the error message in results div
        results.text("Error Response: " + response.status);
      } else {
        return response.json();
      }
    })
    .then(function (data) {
      // Handle the JSON response data here
      // You can update the results div with the data
      console.log(data);
    })
    .catch(function (error) {
      // Handle any other errors that may occur during the fetch
      console.error("Fetch error:", error);
    });
} else {
  // Update the error message in results div
  results.text("Error Response: No such food");
}
}
