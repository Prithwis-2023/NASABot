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
        //let plot = document.getElementById('Ploti');
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
        const uvindexphrase_content = document.createElement('td');
        const visibility_header = document.createElement('th');
        const visibility_content = document.createElement('td');
        const obstructionstovisibility_header = document.createElement('th');
        const obstructionstovisibility_content = document.createElement('td');
        const cloudcover_header = document.createElement('th');
        const cloudcover_content = document.createElement('td');
        const ceiling_header = document.createElement('th');
        const ceiling_content = document.createElement('td');
        const pressure_header = document.createElement('th');
        const pressure_content = document.createElement('td');
        const pressuretendency_header = document.createElement('th');
        const pressuretendency_content = document.createElement('td');
        const past24hourtemperaturedeparture_header = document.createElement('th');
        const past24hourtemperaturedeparture_content = document.createElement('td');
        const apparenttemperature_header = document.createElement('th');
        const apparenttemperature_content = document.createElement('td');
        const windchilltemperature_header = document.createElement('th');
        const windchilltemperature_content = document.createElement('td');
        const wetbulbtemperature_header = document.createElement('th');
        const wetbulbtemperature_content = document.createElement('td');
        //const precipitationsummary_header = document.createElement('th');
        //const precipitationsummary_content = document.createElement('td');
        //const temperaturesummary_header = document.createElement('th');
        //const temperaturesummary_content = document.createElement('td');

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
        windgustspeed_content.textContent = response["results"][0]["windGust"]["speed"].value + " " + response["results"][0]["windGust"]["speed"].unit;
        uvindex_header.textContent = "UV Index";
        uvindex_content.textContent = response["results"][0].uvIndex;
        uvindexphrase_header.textContent = "UV Index Phrase";
        uvindexphrase_content.textContent = response["results"][0].uvIndexPhrase;
        visibility_header.textContent = "Visibility";
        visibility_content.textContent = response["results"][0]["visibility"].value + " " + response["results"][0]["visibility"].unit;
        obstructionstovisibility_header.textContent = "Obstructions to Visibility";
        obstructionstovisibility_content.textContent = response["results"][0].obstructionsToVisibility;
        cloudcover_header.textContent = "Cloud Cover";
        cloudcover_content.textContent = response["results"][0].cloudCover;
        ceiling_header.textContent = "Ceiling";
        ceiling_content.textContent = response["results"][0]["ceiling"].value + " " + response["results"][0]["ceiling"].unit;
        pressure_header.textContent = "Pressure";
        pressure_content.textContent = response["results"][0]["pressure"].value + " " + response["results"][0]["pressure"].unit;
        pressuretendency_header.textContent = "Pressure Tendency";
        pressuretendency_content.textContent = response["results"][0]["pressureTendency"].localizedDescription;
        past24hourtemperaturedeparture_header.textContent = "Past 24 Hours Temperature Departure";
        past24hourtemperaturedeparture_content.textContent = response["results"][0]["past24HourTemperatureDeparture"].value + " degrees " + response["results"][0]["past24HourTemperatureDeparture"].unit;
        apparenttemperature_header.textContent = "Apparent Temperature";
        apparenttemperature_content.textContent = response["results"][0]["apparentTemperature"].value + " degrees " + response["results"][0]["apparentTemperature"].unit;
        windchilltemperature_header.textContent = "Wind Chill Temperature";
        windchilltemperature_content.textContent = response["results"][0]["windChillTemperature"].value + " degrees " + response["results"][0]["windChillTemperature"].unit;
        wetbulbtemperature_header.textContent = "Wet Bulb Temperature";
        wetbulbtemperature_content.textContent = response["results"][0]["wetBulbTemperature"].value  + " degrees " + response["results"][0]["wetBulbTemperature"].unit; 
        //precipitationsummary_header.textContent = "Precipitation Summary";
        //precipitationsummary_content.textContent = "Past Hour: " + response["results"][0]["precipitationSummary"]["pastHour"].value + " " + response["results"][0]["precipitationSummary"]["pastHour"].unit + " | " + "Past 3 Hours: " + response["results"][0]["precipitationSummary"]["past3Hours"].value + " " + response["results"][0]["precipitationSummary"]["past3Hours"].unit + " | " + "Past 6 Hours: " + response["results"][0]["precipitationSummary"]["past6Hours"].value + " " + response["results"][0]["precipitationSummary"]["past6Hours"].unit + " | " + "Past 9 Hours: " + response["results"][0]["precipitationSummary"]["past9Hours"].value + " " + response["results"][0]["precipitationSummary"]["past9Hours"].unit + " | " + "Past 12 Hours: " + response["results"][0]["precipitationSummary"]["past12Hours"].value + " " + response["results"][0]["precipitationSummary"]["past12Hours"].unit + " | " + "Past 18 Hours: " + response["results"][0]["precipitationSummary"]["past18Hours"].value + " " + response["results"][0]["precipitationSummary"]["past18Hours"].unit + " | " + "Past 24 Hours: " + response["results"][0]["precipitationSummary"]["past24Hours"].value + " " + response["results"][0]["precipitationSummary"]["past24Hours"].unit;
        //temperaturesummary_header.textContent = "Temperature Summary";
        //temperaturesummary_content.textContent = "Past 6 Hours - Min: " + response["results"][0]["temperatureSummary"]["past6Hours"]["minimum"].value + " degrees " + response["results"][0]["temperatureSummary"]["past6Hours"]["minimum"].unit + ", " + "Max: " + response["results"][0]["temperatureSummary"]["past6Hours"]["maximum"].value + " degrees " + response["results"][0]["temperatureSummary"]["past6Hours"]["maximum"].unit + " | " + "Past 12 Hours - Min: " + response["results"][0]["temperatureSummary"]["past12Hours"]["minimum"].value + " degrees " + response["results"][0]["temperatureSummary"]["past12Hours"]["minimum"].unit + ", " + "Max: " + response["results"][0]["temperatureSummary"]["past12Hours"]["maximum"].value + " degrees " + response["results"][0]["temperatureSummary"]["past12Hours"]["maximum"].unit + " | " + "Past 24 Hours - Min: " + response["results"][0]["temperatureSummary"]["past24Hours"]["minimum"].value + " degrees " + response["results"][0]["temperatureSummary"]["past24Hours"]["minimum"].unit + ", " + "Max: " + response["results"][0]["temperatureSummary"]["past24Hours"]["maximum"].value + " degrees " + response["results"][0]["temperatureSummary"]["past24Hours"]["maximum"].unit;

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
        header_row11.append(windgustspeed_content);
        header_row12.append(uvindex_header);
        header_row12.append(uvindex_content);
        header_row13.append(uvindexphrase_header);
        header_row13.append(uvindexphrase_content);
        header_row14.append(visibility_header);
        header_row14.append(visibility_content);
        header_row15.append(obstructionstovisibility_header);
        header_row15.append(obstructionstovisibility_content);
        header_row16.append(cloudcover_header);
        header_row16.append(cloudcover_content);
        header_row17.append(ceiling_header);
        header_row17.append(ceiling_content);
        header_row18.append(pressure_header);
        header_row18.append(pressure_content);
        header_row19.append(pressuretendency_header);
        header_row19.append(pressuretendency_content);
        header_row20.append(past24hourtemperaturedeparture_header);
        header_row20.append(past24hourtemperaturedeparture_content);
        header_row21.append(apparenttemperature_header);
        header_row21.append(apparenttemperature_content);
        header_row22.append(windchilltemperature_header);
        header_row22.append(windchilltemperature_content);
        header_row23.append(wetbulbtemperature_header);
        header_row23.append(wetbulbtemperature_content);
        //header_row24.append(precipitationsummary_header);
        //header_row24.append(precipitationsummary_content);
        //header_row25.append(temperaturesummary_header);
        //header_row25.append(temperaturesummary_content)
        
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
        //table.appendChild(header_row24);
        //table.appendChild(header_row25);

        const xArray = ["Past 6 Hours", "Past 12 Hours", "Past 24 Hours"];
        const yArray_min = [response["results"][0]["temperatureSummary"]["past6Hours"]["minimum"].value, response["results"][0]["temperatureSummary"]["past12Hours"]["minimum"].value, response["results"][0]["temperatureSummary"]["past24Hours"]["minimum"].value];
        const yArray_max = [response["results"][0]["temperatureSummary"]["past6Hours"]["maximum"].value, response["results"][0]["temperatureSummary"]["past12Hours"]["maximum"].value, response["results"][0]["temperatureSummary"]["past24Hours"]["maximum"].value];
        
        // Define Data
        const data0 = [{
          x: xArray,
          y: yArray_min,
          mode:"lines",
          name: "Minimum"
        },
        {
          x: xArray,
          y: yArray_max,
          mode:"lines",
          name: "Maximum"
        }];

        // Define Layout
        const layout0 = {
          xaxis: {title: "Records over Past Hours"},
          yaxis: {title: "Temperature (in degrees C)"},  
          title: "Temperature Variations"
        };

        // Display using Plotly
        Plotly.newPlot("Ploti", data0, layout0);

        const xArray_preci = ["Past Hour", "Past 3 Hours", "Past 6 Hours", "Past 9 Hours", "Past 12 Hours", "Past 18 Hours", "Past 24 Hours"];
        const yArray_preci = [response["results"][0]["precipitationSummary"]["pastHour"].value, response["results"][0]["precipitationSummary"]["past3Hours"].value, response["results"][0]["precipitationSummary"]["past6Hours"].value, response["results"][0]["precipitationSummary"]["past9Hours"].value, response["results"][0]["precipitationSummary"]["past12Hours"].value, response["results"][0]["precipitationSummary"]["past18Hours"].value, response["results"][0]["precipitationSummary"]["past24Hours"].value];

        const data1 = [{
          x: xArray_preci,
          y: yArray_preci,
          mode:"lines"
        }];

        // Define Layout
        const layout1 = {
          xaxis: {title: "Records over Past Hours"},
          yaxis: {title: "Precipitation (in mm)"},  
          title: "Variations in Precipitation"
        };

        // Display using Plotly
        Plotly.newPlot("Plotii", data1, layout1);
    }
  });      
}

