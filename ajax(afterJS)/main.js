var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=93f26e3c57081a6210de53b8dcfdfea4', true);
//AJAX uses both a browser built-in XMLHttpRequest object to get data from the web server and JavaScript and HTML DOM to display that content to the user.
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {  //"OK" When status is 200, the response is ready . 400 indicates bad request
    // Success!
    var data = JSON.parse(request.responseText);
    console.log(data);
    var icon = "https://openweathermap.org/img/w/"+data.weather[0].icon+".png"
    var temp = data.main.temp;
    var weather = data.weather[0].main
    document.getElementById("icon").src= icon;
    document.getElementById("temp").innerHTML= temp;
    document.getElementById("weather").innerHTML= weather;
  } else {
    // We reached our target server, but it returned an error
    console.log(" some error from server");

  }
};

request.onerror = function() {
  // There was a connection error of some sort
  console.log("connection error");
};

request.send();