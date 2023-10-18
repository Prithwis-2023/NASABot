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
        
        let table = document.getElementById('present-weather');
        //table.setAttribute("width", "90%");
        table.innerHTML = "";

        const header_row = document.createElement('tr');
        const datetime_header = document.createElement('th');
        const phrase_header = document.createElement('th');
        const hasprecipitation_header = document.createElement('th');
        const isdaytime_header = document.createElement('th');
        const temperature_header = document.createElement('th');
        const realfeeltemperature_header = document.createElement('th');
        const realfeeltemperatureshade_header = document.createElement('th');
        const relativehumidity_header = document.createElement('th');
        const dewpoint_header = document.createElement('th');
        const winddirection_header = document.createElement('th');
        const windspeed_header = document.createElement('th');
        const windgustspeed_header = document.createElement('th');
        const uvindex_header = document.createElement('th');
        const uvindexphrase_header = document.createElement('th');
        const visibility_header = document.createElement('th');
        const obstructionstovisibility_header = document.createElement('th');
        const cloudcover_header = document.createElement('th');
        const ceiling_header = document.createElement('th');
        const pressure_header = document.createElement('th');
        const pressuretendency_header = document.createElement('th');
        const past24hourtemperaturedeparture_header = document.createElement('th');
        const apparenttemperature_header = document.createElement('th');
        const windchilltemperature_header = document.createElement('th');
        const wetbulbtemperature_header = document.createElement('th');
        const precipitationsummary_header = document.createElement('th');
        const temperaturesummary_header = document.createElement('th');

        datetime_header.textContent = "Date and Time";
        phrase_header.textContent = "Phrase";
        hasprecipitation_header.textContent = "Has Precipitation";
        isdaytime_header.textContent = "Is Daytime";
        temperature_header.textContent = "Temperature";
        realfeeltemperature_header.textContent = "Real Feel Temperature";
        realfeeltemperatureshade_header.textContent = "Real Feel Temperature Shade";
        relativehumidity_header.textContent = "Relative Humidity";
        dewpoint_header.textContent = "Dew Point";
        winddirection_header.textContent = "Wind Direction";
        windspeed_header.textContent = "Wind Speed";
        windgustspeed_header.textContent = "Wind Gust Speed";
        uvindex_header.textContent = "UV Index";
        uvindexphrase_header.textContent = "UV Index Phrase";
        visibility_header.textContent = "Visibility";
        obstructionstovisibility_header.textContent = "Obstructions to Visibility";
        cloudcover_header.textContent = "Cloud Cover";
        ceiling_header.textContent = "Ceiling";
        pressure_header.textContent = "Pressure";
        pressuretendency_header.textContent = "Pressure Tendency";
        past24hourtemperaturedeparture_header.textContent = "Past 24 Hours Temperature Departure";
        apparenttemperature_header.textContent = "Apparent Temperature";
        windchilltemperature_header.textContent = "Wind Chill Temperature";
        wetbulbtemperature_header.textContent = "Wet Bulb Temperature";
        precipitationsummary_header.textContent = "Precipitation Summary";
        temperaturesummary_header.textContent = "Temperature Summary";

        header_row.append(datetime_header);
        header_row.append(phrase_header);
        header_row.append(hasprecipitation_header);
        header_row.append(isdaytime_header);
        header_row.append(temperature_header);
        header_row.append(realfeeltemperature_header);
        header_row.append(realfeeltemperatureshade_header);
        header_row.append(relativehumidity_header);
        header_row.append(dewpoint_header);
        header_row.append(winddirection_header);
        header_row.append(windspeed_header);
        header_row.append(windgustspeed_header);
        header_row.append(uvindex_header);
        header_row.append(uvindexphrase_header);
        header_row.append(visibility_header);
        header_row.append(obstructionstovisibility_header);
        header_row.append(cloudcover_header);
        header_row.append(ceiling_header);
        header_row.append(pressure_header);
        header_row.append(pressuretendency_header);
        header_row.append(past24hourtemperaturedeparture_header);
        header_row.append(apparenttemperature_header);
        header_row.append(windchilltemperature_header);
        header_row.append(wetbulbtemperature_header);
        header_row.append(precipitationsummary_header);
        header_row.append(temperaturesummary_header);
        table.appendChild(header_row);
    }
  });      
}

