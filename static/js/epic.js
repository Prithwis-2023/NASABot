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

                const slidesContainer = document.getElementById('container');
                const indicatorsContainer =document.getElementById('indicators');
                const imageUrls = [];
                for (let i = 0; i < response.length; i++) 
                {
                    imgUrl = 'https://api.nasa.gov/EPIC/archive/natural/' + responseDate + '/png/' + response[i].image + '.png?api_key=' + api_key;
                    imageUrls.push(imgUrl);                
                }
                //console.log(imageUrls);
                slidesContainer.innerHTML = ''; // Clear previous slides

                // Create a new button element
                var button0 = document.createElement("button");
                button0.setAttribute("type", "button");
                button0.setAttribute("data-bs-target", "#carouselExampleIndicators");
                button0.setAttribute("data-bs-slide-to", 0);
                button0.className = "active";
                button0.setAttribute("aria-current", "true");
                button0.setAttribute("aria-label", "Slide 1");                
                indicatorsContainer.appendChild(button0);

                for (let i = 1; i < response.length; i++)
                {
                    // Create a new button element
                    var button = document.createElement("button");
                    button.setAttribute("type", "button");
                    button.setAttribute("data-bs-target", "#carouselExampleIndicators");
                    button.setAttribute("data-bs-slide-to", i);
                    button.setAttribute("aria-current", "true");
                    button.setAttribute("aria-label", "Slide " + (i + 1));
                    indicatorsContainer.appendChild(button);
                }
                console.log(indicatorsContainer);                                    

                const slide2 = document.createElement('div');
                slide2.className = 'carousel-item active';
                const img2 =document.createElement('img');
                img2.className = 'd-block w-100';
                img2.src =imageUrls[0];
                slide2.appendChild(img2);
                slidesContainer.appendChild(slide2);

                for (let i = 1; i < imageUrls.length; i++)
                {
                        const slide = document.createElement('div');
                        slide.className = 'carousel-item';
                        const img = document.createElement('img');
                        img.className ='d-block w-100';
                        img.src = imageUrls[i];
                        slide.appendChild(img);
                        slidesContainer.appendChild(slide);
                }
                console.log(slidesContainer);
            }    
        });
    });
});    
    