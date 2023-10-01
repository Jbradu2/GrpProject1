//global variables
var apiKey = 'apiKey=2e2817cf7b4646899c0dd85ef8464be1';
var apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?'
var fetchUrl = apiUrl + apiKey +"&query" + inputText;
var searchInput = $('#enterFood');
var results = $('#results-div');
var inputText;



function search(){

  if(searchInput).value !== "") {
inputText =searchInput.value;
  }
  else{
    response.Text.textContent = "Errorr Response: No such food";
  }
  fetch(fetchUrl)
    .then(function (response) {
      if (!response.ok) {
        response.Text.textContent = "Errorr Response: " + response.status;
      }
      return response.json();
      //stingify Response?
    });
};

