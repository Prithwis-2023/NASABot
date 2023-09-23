var req = new XMLHttpRequest();

const lat_input = document.querySelector('#lat');
const lon_input = document.querySelector('#lon');
const dim_input = document.querySelector('#dim');
const date_input = document.querySelector('#date');
const submitButton = document.querySelector('#search');

submitButton.addEventListener('click', function() {
    lat = lat_input.value;
    lon = lon_input.value;
    dim = dim_input.value;
    date = date_input.value;
    
    while (lat.trim() === '') {
        alert('Please provide the latitude.');
        return;
    }    
    while (lon.trim() === '') {
        alert('Please provide the longitude.');
        return;
    }  

    if (date !== '') {
        const dateParts = date.split('/');

        // Rearrange the date parts into yyyy-mm-dd format
        const year = dateParts[2];
        const month = dateParts[0];
        const day = dateParts[1];

        // Create the rearranged date string
        const rearrangedDate = `${year}-${month}-${day}`;
    }    

    var url="https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${rearrangedDate}&api_key=";
    var api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE";
    req.open("GET", url + api_key);
    req.send();
});
    