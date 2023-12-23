var req = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-techport').addEventListener('click', function() {
        const projectID = document.querySelector('#projectID').value;
        const searchQuery = document.querySelector('#SearchQuery').value;
        const missionDirectorate = document.querySelector('#missionDirectorate').value;
        const program = document.querySelector('#program').value;
        const titleSearch = document.querySelector('#titleSearch').value;
        
        if (searchQuery === '') {
            alert('Please enter the search query.');
            return;
        }

        var url = 'https://techport.nasa.gov/api/projects/search?projectID=' + projectID + '&searchQuery=' + searchQuery + '&missionDirectorate=' + missionDirectorate + '&program=' + program + '&titleSearch=' + titleSearch;
        req.open("GET", url);
        req.send();
        console.log(url);
        req.addEventListener("load", function(){
            if(req.status == 200 && req.readyState == 4){
                var response = JSON.parse(req.responseText);
                console.log(response);
            }
        })        
    })
});    