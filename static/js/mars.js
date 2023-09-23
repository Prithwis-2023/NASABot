var req = new XMLHttpRequest();
var api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE";

const sol_input = document.querySelector('#sol');
const cam_input = document.querySelector('#camera');
var sol = "";
var cam = "";
const submitButton = document.querySelector('#search');

submitButton.addEventListener('click', function() {
    sol = sol_input.value;
    cam = cam_input.value;
    
    if (sol === '') {
        alert('Please provide the Sol.');
        return;
    }    
    if (cam === '') {
        alert('Please provide the camera type.');
        return;
    }  
});

var url="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${cam}&api_key=";

req.open("GET", url + api_key);
req.send();

req.onreadystatechange = function() {
    if (req.readyState === 4) {
        if (req.status === 200) {
            var response = JSON.parse(req.responseText);

            // Check if there are any photos in the response
            if (response.photos.length > 0) {
                // Create an array to store the image URLs
                const imageUrls = response.photos.map(photo => photo.img_src);
                alert('Success');

                // Now you have an array of image URLs
                // You can do whatever you want with these URLs
                console.log(imageUrls);

                // For demonstration, you can display the first image
                if (imageUrls.length > 0) {
                    imageElement.src = imageUrls[0];
                } else {
                    alert('No image URLs found in the response.');
                }
            } else {
                alert('No photos found for the provided Sol and camera type.');
            }
        } else {
            alert('Error: Unable to fetch data from the API.');
        }
    }
};