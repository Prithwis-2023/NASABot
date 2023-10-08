var req = new XMLHttpRequest();
var total_pages;
var page = 0;

req.open("GET", "https://api.nasa.gov/neo/rest/v1/neo/browse?page=0&size=20&api_key=svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE");
req.send();
req.addEventListener("load", function(){
    if(req.status == 200 && req.readyState == 4){
        var response = JSON.parse(req.responseText);
        total_pages = response.page.total_pages;
        console.log(response);

        document.getElementById("page").textContent = page+1;
        document.getElementById("total_page").textContent = total_pages;
    }   
});   

function populate(num){
    var url_base = "https://api.nasa.gov/neo/rest/v1/neo/browse?page=";
    var url_page = num.toString();
    var url_end = "&size=20&api_key=";
    var api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE";
    var url = url_base+url_page+url_end+api_key;


    req.open("GET", url);
    req.send();

    req.addEventListener("load", function(){
        if(req.status == 200 && req.readyState == 4){
            var response = JSON.parse(req.responseText);

            let table = document.getElementById("near_earth_object_table");
            table.setAttribute("width", "90%");
            table.innerHTML = "";

            console.log(response);

            const header_row = document.createElement("tr");
            const name_header = document.createElement("th");
            //const id_header = document.createElement("th");
            //const neos_id_header = document.createElement("th");
            const h_mag_header = document.createElement("th");
            const relative_vel_header = document.createElement("th");
            const close_approach_header = document.createElement("th");
            const hazardous_header = document.createElement("th");
            name_header.textContent = "Name";
            //id_header.textContent = "ID";
            //neos_id_header.textContent = "Neo Reference ID";
            h_mag_header.textContent = "H (Mag)";
            relative_vel_header.textContent = "Relative Velocity (miles/hr)"; 
            close_approach_header.textContent ="Close Approach";
            hazardous_header.textContent = "Is Potentially Hazardous";
            header_row.append(name_header);
            //header_row.append(id_header);
            //header_row.append(neos_id_header);
            header_row.append(h_mag_header);
            header_row.append(relative_vel_header);
            header_row.append(close_approach_header);
            header_row.append(hazardous_header);
            table.appendChild(header_row);

            response.near_earth_objects.forEach(obj => {
                const new_row = document.createElement("tr");
                const td_name = document.createElement("td");
                //const td_id = document.createElement("td");
                //const td_neo_reference_id = document.createElement("td");
                const td_h_mag = document.createElement("td");
                const td_relative_vel = document.createElement("td");
                const td_close_approach =document.createElement("td");
                const td_hazardous = document.createElement("td");
                td_name.textContent = obj.name;
                //td_id.textContent = obj.id;
                //td_neo_reference_id.textContent = obj.neo_reference_id;
                td_h_mag.textContent = obj.absolute_magnitude_h;
                td_relative_vel.textContent = obj.close_approach_data[0]['relative_velocity'].miles_per_hour;
                td_close_approach.textContent = obj.close_approach_data[0].close_approach_date_full;
                td_hazardous.textContent = obj.is_potentially_hazardous_asteroid;    
                new_row.appendChild(td_name);
                //new_row.appendChild(td_id);
                //new_row.appendChild(td_neo_reference_id);
                new_row.appendChild(td_h_mag);
                new_row.appendChild(td_relative_vel);
                new_row.appendChild(td_close_approach);    
                new_row.append(td_hazardous);
                table.appendChild(new_row);
            });
        }   
    });   
}

function prevpage(){
    if (page < 1){
        return
    }
    page -= 1;
    console.log(page)
    populate(page)
}
function nextpage(){
    if(page >= total_pages-1){
        return
    }
    page += 1;
    console.log(page)
    populate(page)
}

document.onload = function(){
    const nextButton = document.getElementById("next");
    const prevButton = document.getElementById("prev");

    nextButton.addEventListener('click',nextpage);
    prevButton.addEventListener('click',prevpage);
}
populate(page);