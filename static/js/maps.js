const x = document.getElementById("demo");
var req = new XMLHttpRequest();

function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
  } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  //x.innerHTML = "Latitude: " + position.coords.latitude +
  //"<br>Longitude: " + position.coords.longitude;
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  url = 'https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&query=' + position.coords.latitude + '%2C' + position.coords.longitude + '&subscription-key=Ks60X1ByPJCoOo7bjON2hZnwm0N1mhBOqYvkia5BVcQ';
  console.log(url);
  req.open("GET", url);
  req.send();

  req.addEventListener("load", function(){
    if(req.status == 200 && req.readyState == 4){
        var response = JSON.parse(req.responseText);
        //now extraction!
    }
  });      
}

