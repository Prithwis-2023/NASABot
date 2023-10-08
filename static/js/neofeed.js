var req = new XMLHttpRequest();

document.onload = function(){
    const search = document.getElementById("search");
    search.addEventListener('click', get_neo_feed);

}

function get_neo_feed(){
    const start_date = document.getElementById("start");
    const end_date = document.getElementById("end");
    start = start_date.value;
    end = end_date.value;


    var url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${start}&end_date=${end}&api_key=svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE`;
    req.open("GET", url);
    req.send();

    req.addEventListener("load", function(){
        if(req.status == 200 && req.readyState == 4){
            var response = JSON.parse(req.responseText);

            let table = document.getElementById("near_earth_object_table");
            table.setAttribute("width", "100%");
            table.innerHTML = "";

            const header_row = document.createElement("tr");
            const name_header = document.createElement("th");
            const id_header = document.createElement("th");
            const diameter_header = document.createElement("th");
            diameter_header.setAttribute("width", "13%");
            const date_header = document.createElement("th");
            date_header.setAttribute("width", "15%");
            const velocity_header = document.createElement("th");
            velocity_header.setAttribute("width", "8%");
            const distance_header = document.createElement("th");
            distance_header.setAttribute("width", "12%");
            const magnitude_header = document.createElement("th");
            const hazardous_header = document.createElement("th");
            name_header.textContent = "Name";
            id_header.textContent = "ID";
            diameter_header.textContent = "Diameter\n(min/max)(km)";
            date_header.textContent = "Closest Approach\nTime";
            velocity_header.textContent = "Velocity\n(km/s)";
            distance_header.textContent = "Miss Distance\n(km)";
            magnitude_header.textContent = "Magnitude";
            hazardous_header.textContent ="Hazardous";
            header_row.append(name_header);
            header_row.append(id_header);
            header_row.append(diameter_header);
            header_row.append(date_header);
            header_row.append(velocity_header);
            header_row.append(distance_header);
            header_row.append(magnitude_header);
            header_row.append(hazardous_header);
            table.appendChild(header_row);
            console.log(response.near_earth_objects)
            for( const date in response.near_earth_objects){
                response.near_earth_objects[date].forEach(body => {
                    const new_row = document.createElement("tr");
                    const td_name = document.createElement("td");
                    const td_id = document.createElement("td");
                    const td_diameter = document.createElement("td");
                    const td_date = document.createElement("td");
                    const td_velocity = document.createElement("td");
                    const td_distance = document.createElement("td");
                    const td_magnitude = document.createElement("td");
                    const td_hazardous = document.createElement("td");

                    td_name.textContent = body.name;
                    td_id.textContent = body.id;
                    var d = body.estimated_diameter.kilometers.estimated_diameter_min.toFixed(3).toString() + "/" + body.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3).toString();
                    td_diameter.textContent = d;
                    td_date.textContent = body.close_approach_data[0].close_approach_date_full;
                    td_velocity.textContent = parseFloat(body.close_approach_data[0].relative_velocity.kilometers_per_second).toFixed(3);
                    td_distance.textContent = parseFloat(body.close_approach_data[0].miss_distance.kilometers).toFixed(3);
                    td_magnitude.textContent = body.absolute_magnitude_h;
                    td_hazardous.textContent = body.is_potentially_hazardous_asteroid;

                    new_row.appendChild(td_name);
                    new_row.appendChild(td_id);
                    new_row.appendChild(td_diameter);
                    new_row.appendChild(td_date);
                    new_row.appendChild(td_velocity);
                    new_row.appendChild(td_distance);
                    new_row.appendChild(td_magnitude);
                    new_row.appendChild(td_hazardous);
        
                    table.appendChild(new_row);
                });
           
            }
            
        }   
    }); 
}