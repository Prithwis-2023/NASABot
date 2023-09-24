var req = new XMLHttpRequest();
var url = "https://api.nasa.gov/planetary/apod?api_key=";
var api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE";

req.open("GET", url + api_key);
req.send();

req.addEventListener("load", function(){
    if(req.status == 200 && req.readyState == 4){
        var response = JSON.parse(req.responseText);
        document.getElementById("title").textContent = response.title;
        document.getElementById("date").textContent = response.date;
        if (response.media_type === 'image'){
            document.getElementById("pic").src = response.hdurl;
        }
        else if (response.media_type === 'video') {
            document.getElementById("vid").src = response.url;
        }
        document.getElementById("explanation").textContent = response.explanation;
    }   
});   