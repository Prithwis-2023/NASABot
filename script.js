var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE";

req.open("GET", url + api_key);
req.send();

let input = document.querySelector('#inputGroupSelect04');
let apodOption = input.querySelector('#apod');
let neoOption = input.querySelector('#neo');

function execute_apod() {
    if(req.status == 200 && req.readyState == 4){
        var response = JSON.parse(req.responseText);
        document.getElementById("title").textContent = response.title;
        document.getElementById("date").textContent = response.date;
        document.getElementById("pic").src = response.hdurl;
        document.getElementById("explanation").textContent = response.explanation;
    }    
}
apodOption.addEventListener('click', execute_apod());

