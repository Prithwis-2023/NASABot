var req = new XMLHttpRequest();
var api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE";

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search').addEventListener('click', function() {
        date = document.querySelector('#epic_date').value;
        while (date === '')
        {
            alert('Please enter the date!');
        }
        if (date !== '') {
            const dateParts = date.split('/');

            // Rearrange the date parts into yyyy-mm-dd format
            const year = dateParts[2];
            const month = dateParts[0];
            const day = dateParts[1];

            // Create the rearranged date string
            const rearrangedDate = `${year}-${month}-${day}`;

            var url = 'https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key='
            req.open("GET", url, api_key);
            req.send();
            
        }    
    });
});    
    