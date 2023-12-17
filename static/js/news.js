var req = new XMLHttpRequest();

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#news-button').addEventListener('click', function() {
        var url = "https://api.spaceflightnewsapi.net/v4/articles/?format=json&has_event=true&has_launch=true&limit=100&offset=0";
        req.open("GET", url);
        req.send();
        console.log(url);
        req.addEventListener("load", function(){
            if(req.status == 200 && req.readyState == 4){
                var response = JSON.parse(req.responseText);
                //console.log(response);
                const container = document.getElementById("news");
                news.innerHTML = '';
                for (let i = 0; i < response.results.length; i++)
                {
                    var div0 = document.createElement('div');
                    div0.setAttribute("class", "card");
                    div0.setAttribute("style", "width: fit-content");
                    var img0 = document.createElement('img');
                    img0.setAttribute("src", response.results[i].image_url);
                    img0.setAttribute("class", "card-img-top");
                    img0.setAttribute("alt", "...");
                    div0.appendChild(img0);
                    div1 = document.createElement("div");
                    div1.setAttribute("class", "card-body");
                    title = document.createElement('h5');
                    title.setAttribute("class", "card-title");
                    title.setAttribute("style", "color: white");
                    title.textContent = response.results[i].title;
                    div1.appendChild(title);
                    pclass = document.createElement("p");
                    pclass.setAttribute("class", "card-text");
                    pclass.setAttribute("style", "color: white");
                    pclass.textContent = response.results[i].summary;
                    div1.appendChild(pclass);
                    aclass = document.createElement("a");
                    aclass.setAttribute("href", response.results[i].url);
                    aclass.setAttribute("class", "btn btn-primary");
                    aclass.textContent = "Visit";
                    div1.appendChild(aclass);
                    div0.appendChild(div1);
                    //console.log(div0);
                    container.appendChild(div0);
                    hrtag = document.createElement('hr');
                    container.appendChild(hrtag);
                }
            }
        })        
    })    
})    