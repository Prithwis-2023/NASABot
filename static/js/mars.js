var req = new XMLHttpRequest();
var api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE";

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search').addEventListener('click', function() {
        sol = document.querySelector('#sol').value;
        cam = document.querySelector('#camera').value;

        if (sol === '') {
            alert('Please provide the Sol.');
            return;
        }    
        if (cam === '') {
            alert('Please provide the camera type.');
            return;
        } 
        
        var url="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + sol + "&camera=" + cam + "&api_key=" + api_key;
        console.log(url)
        req.open("GET", url);
        req.send();
        req.addEventListener("load", function(){
	        if(req.status == 200 && req.readyState == 4){
  	            var response = JSON.parse(req.responseText);
                const imageUrls = response.photos.map(photo => photo.img_src);
                console.log(imageUrls);
                document.querySelector('#image').src = imageUrls[0];
            }
        });        
    });
});    


