function refreshWeather(response) {
  //console.log(response.data);
  //console.log(response.data.temperature.current);
  //this gives us the response, or data for the city we search
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  //this id was created on h1
  //cityElement.innerHTML = searchInput.value; --replace this with line below
  cityElement.innerHTML = response.data.city;
  // the .value is whatever is put into the search-form-input (or search bar),
  //and the .innerHTML makes it so that whatever is targeted (in this case the h1,
  //which is the city) is changed to whatever is typed in.
  //the next step is to call the API and find the correct information for each
  //city entered--add axios
  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  //why create a new function? "separation of concerns" which means that we
  //want each function to do one thing, and do it well
  let apiKey = "tfo33b89af42954f2d60430a801e1b3c";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  //change {query} to${city}, that is what is inside the function searchCity
  //{key} is changed to ${apiKey}
  //add &units=imperial
  //console.log(apiURL) -- When you type in a city the consolewill give you a
  //URL and you can see
  axios.get(apiURL).then(refreshWeather);
  //this makes it so that the weather is shown on the website rather than just
  //in the console
  //make the function refreshWeather after inputting this
}
//this function was added when axios and the API were added, the goal is to make
//API call and update the interface
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //console.log(searchInput.value);

  searchCity(searchInput.value);
  //We can make this because the function searchCity was created
  //it is sent to the searchCity function
}

let searchFormElement = document.querySelector("#search-form");
//console.log(searchFormElement); -- Do this to make sure that your elements
//are working correctly. Check the console on the website you are making
searchFormElement.addEventListener("submit", handleSearchSubmit);
//the function above is added after the event listener is defined
searchCity("Lisbon");
