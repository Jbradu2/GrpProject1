var apiKey = 'c564dd883259440db1ec61effce76b34'
var apiUrl = 'https://api.spoonacular.com/recipes/complexSearch'

fetch(apiUrl)
  .then(function (response) {
    if (!response.ok) {
      response.Text.textContent = "Errorr Response: " + response.status;
    }
    return response.json();
    //stingify Response?
  })