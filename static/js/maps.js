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

        const header_row0 = document.createElement('tr');
        const header_row1 = document.createElement('tr');
        const header_row2 = document.createElement('tr');
        const header_row3 = document.createElement('tr');
        const header_row4 = document.createElement('tr');
        const header_row5 = document.createElement('tr');
        const header_row6 = document.createElement('tr');
        const header_row7 = document.createElement('tr');
        const header_row8 = document.createElement('tr');
        const header_row9 = document.createElement('tr');
        const header_row10 = document.createElement('tr');
        const header_row11 = document.createElement('tr');
        const header_row12 = document.createElement('tr');
        const header_row13 = document.createElement('tr');
        const header_row14 = document.createElement('tr');
        const header_row15 = document.createElement('tr');
        const header_row16 = document.createElement('tr');
        const header_row17 = document.createElement('tr');
        const header_row18 = document.createElement('tr');
        const header_row19 = document.createElement('tr');
        const header_row20 = document.createElement('tr');
        const header_row21 = document.createElement('tr');
        const header_row22 = document.createElement('tr');
        const header_row23 = document.createElement('tr');
        const header_row24 = document.createElement('tr');
        const header_row25 = document.createElement('tr');

        const datetime_header = document.createElement('th');
        const datetime_content = document.createElement('td');
        const phrase_header = document.createElement('th');
        const phrase_content = document.createElement('td');
        const hasprecipitation_header = document.createElement('th');
        const hasprecipitation_content = document.createElement('td');
        const isdaytime_header = document.createElement('th');
        const isdaytime_content = document.createElement('td');
        const temperature_header = document.createElement('th');
        const temperature_content = document.createElement('td');
        const realfeeltemperature_header = document.createElement('th');
        const realfeeltemperature_content = document.createElement('td');
        const realfeeltemperatureshade_header = document.createElement('th');
        const realfeeltemperatureshade_content = document.createElement('td');
        const relativehumidity_header = document.createElement('th');
        const relativehumidity_content = document.createElement('td');
        const dewpoint_header = document.createElement('th');
        const dewpoint_content = document.createElement('td');
        const winddirection_header = document.createElement('th');
        const winddirection_content = document.createElement('td');
        const windspeed_header = document.createElement('th');
        const windspeed_content = document.createElement('td');
        const windgustspeed_header = document.createElement('th');
        const windgustspeed_content = document.createElement('td');
        const uvindex_header = document.createElement('th');
        const uvindex_content = document.createElement('td');
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
        datetime_content.textContent = response["results"][0].dateTime;
        phrase_header.textContent = "Phrase";
        phrase_content.textContent = response["results"][0].phrase;
        hasprecipitation_header.textContent = "Has Precipitation";
        hasprecipitation_content.textContent = response["results"][0].hasPrecipitation;
        isdaytime_header.textContent = "Is Daytime";
        isdaytime_content.textContent = response["results"][0].isDayTime;
        temperature_header.textContent = "Temperature";
        temperature_content.textContent = response["results"][0]["temperature"].value + " degrees " + response["results"][0]["temperature"].unit;
        realfeeltemperature_header.textContent = "Real Feel Temperature";
        realfeeltemperature_content.textContent = response["results"][0]["realFeelTemperature"].value + " degrees " + response["results"][0]["realFeelTemperature"].unit;
        realfeeltemperatureshade_header.textContent = "Real Feel Temperature Shade";
        realfeeltemperatureshade_content.textContent = response["results"][0]["realFeelTemperatureShade"].value + " degrees " + response["results"][0]["realFeelTemperatureShade"].unit;
        relativehumidity_header.textContent = "Relative Humidity";
        relativehumidity_content.textContent = response["results"][0].relativeHumidity;
        dewpoint_header.textContent = "Dew Point";
        dewpoint_content.textContent = response["results"][0]["dewPoint"].value + " degrees " + response["results"][0]["dewPoint"].unit;
        winddirection_header.textContent = "Wind Direction";
        winddirection_content.textContent = response["results"][0]["wind"]["direction"].degrees + " degrees | Localized Description: " + response["results"][0]["wind"]["direction"].localizedDescription;
        windspeed_header.textContent = "Wind Speed";
        windspeed_content.textContent = response["results"][0]["wind"]["speed"].value + " " + response["results"][0]["wind"]["speed"].unit;
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

        header_row0.append(datetime_header);
        header_row0.append(datetime_content);
        header_row1.append(phrase_header);
        header_row1.append(phrase_content);
        header_row2.append(hasprecipitation_header);
        header_row2.append(hasprecipitation_content);
        header_row3.append(isdaytime_header);
        header_row3.append(isdaytime_content);
        header_row4.append(temperature_header);
        header_row4.append(temperature_content);
        header_row5.append(realfeeltemperature_header);
        header_row5.append(realfeeltemperature_content);
        header_row6.append(realfeeltemperatureshade_header);
        header_row6.append(realfeeltemperatureshade_content);
        header_row7.append(relativehumidity_header);
        header_row7.append(relativehumidity_content);
        header_row8.append(dewpoint_header);
        header_row8.append(dewpoint_content);
        header_row9.append(winddirection_header);
        header_row9.append(winddirection_content);
        header_row10.append(windspeed_header);
        header_row10.append(windspeed_content);
        header_row11.append(windgustspeed_header);
        header_row12.append(uvindex_header);
        header_row13.append(uvindexphrase_header);
        header_row14.append(visibility_header);
        header_row15.append(obstructionstovisibility_header);
        header_row16.append(cloudcover_header);
        header_row17.append(ceiling_header);
        header_row18.append(pressure_header);
        header_row19.append(pressuretendency_header);
        header_row20.append(past24hourtemperaturedeparture_header);
        header_row21.append(apparenttemperature_header);
        header_row22.append(windchilltemperature_header);
        header_row23.append(wetbulbtemperature_header);
        header_row24.append(precipitationsummary_header);
        header_row25.append(temperaturesummary_header);
        
        table.appendChild(header_row0);
        table.appendChild(header_row1);
        table.appendChild(header_row2);
        table.appendChild(header_row3);
        table.appendChild(header_row4);
        table.appendChild(header_row5);
        table.appendChild(header_row6);
        table.appendChild(header_row7);
        table.appendChild(header_row8);
        table.appendChild(header_row9);
        table.appendChild(header_row10);
        table.appendChild(header_row11);
        table.appendChild(header_row12);
        table.appendChild(header_row13);
        table.appendChild(header_row14);
        table.appendChild(header_row15);
        table.appendChild(header_row16);
        table.appendChild(header_row17);
        table.appendChild(header_row18);
        table.appendChild(header_row19);
        table.appendChild(header_row20);
        table.appendChild(header_row21);
        table.appendChild(header_row22);
        table.appendChild(header_row23);
        table.appendChild(header_row24);
        table.appendChild(header_row25);
    }
  });      
}

