function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  //this id was created on h1
  cityElement.innerHTML = searchInput.value;
  // the .value is whatever is put into the search-form-input (or search bar),
  //and the .innerHTML makes it so that whatever is targeted (in this case the h1,
  //which is the city) is changed to whatever is typed in.
}

let searchFormElement = document.querySelector("#search-form");
//console.log(searchFormElement); -- Do this to make sure that your elements
//are working correctly. Check the console on the website you are making
searchFormElement.addEventListener("submit", handleSearchSubmit);
//the function above is added after the event listener is defined
