var req = new XMLHttpRequest();
var resp = new XMLHttpRequest();
var api_key = "svyPAHaHfTxd2ReJfyk1jIWJAjUD0T0m5cdN6ZHE";

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#button').addEventListener('click', function() {
        query = document.querySelector('#search').value;
        if (query === '') {
            alert('Please enter the search query!');
            return;
        }
        var url = 'https://images-api.nasa.gov/search?q=' + query;
        req.open("GET", url);
        req.send();
        console.log(url)
        req.addEventListener("load", function(){
            if(req.status == 200 && req.readyState == 4){
                
                const container = document.getElementById('container');
                var response = JSON.parse(req.responseText);
                var filtered = response['collection'].items; 
                
                container.innerHTML = "";
                for (let i = 0; i < filtered.length; i++)
                {
                    console.log(filtered[i].data[0].description);
                    var img_json = response['collection']['items'][i].href;

                    var text = document.createElement("p");
                    text.setAttribute("id", "description")
                    container.appendChild(text)
                    document.getElementById('description').textContent = filtered[i].data[0].description; 
                    var hr = document.createElement("hr");
                    container.appendChild(hr);
                    //console.log(img_json);
                    /*resp.open("GET", img_json);
                    resp.send();
                    resp.addEventListener("load", function(){
                        if(resp.status == 200 && resp.readyState == 4){
                            var respo = JSON.parse(resp.responseText);
                            img = respo[0];  //produces the image
                            console.log(img);
                            
                            var dat = document.createElement("img");
                            dat.setAttribute("width", "500px");
                            dat.setAttribute("src", img);
                            container.appendChild(dat)
                            var text = document.createElement("p");
                            text.setAttribute("id", "description")
                            container.appendChild(text)
                            document.getElementById('description').textContent = filtered[i].data[0].description; 
                            var hr = document.createElement("hr");
                            container.appendChild(hr); 

                        }
                    });  */      
                }
            }    
        });    
    });    

});    