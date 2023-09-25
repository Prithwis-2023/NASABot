var req = new XMLHttpRequest();
var api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE";

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search').addEventListener('click', function() {
        date = document.querySelector('#epic_date').value;
        // Create a Date object to parse the date string
        var dateObj = new Date(date);
        
        if (isNaN(dateObj)) {
            alert('Please enter the date.');
            return;
        }

        // Extract year, month, and day from the Date object
        var year = dateObj.getFullYear();
        var month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Adjust month to 0-based index
        var day = String(dateObj.getDate()).padStart(2, '0');
        
        // Create the rearranged date string
        var rearrangedDate = `${year}-${month}-${day}`;
        var responseDate = `${year}/${month}/${day}`;

        var url = 'https://api.nasa.gov/EPIC/api/natural/date/' + rearrangedDate + '?api_key=' + api_key;
        req.open("GET", url);
        req.send();
        console.log(url)
        req.addEventListener("load", function(){
            if(req.status == 200 && req.readyState == 4){
                var response = JSON.parse(req.responseText);
                imgUrl = 'https://api.nasa.gov/EPIC/archive/natural/' + responseDate + '/png/' + response[0].image + '.png?api_key=' + api_key;
                document.querySelector('#image').src = imgUrl;
            }
        });
    });
});    
    