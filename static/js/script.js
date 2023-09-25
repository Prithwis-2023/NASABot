document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#submit').addEventListener('click', function() {
        var selectedValue = document.querySelector('#inputGroupSelect04').value;
        if (selectedValue === 'apod') {
            // Redirect to the apod.html page
            window.location.href = '/apod';
        
        } else if (selectedValue === 'search') {
            // Redirect to another page for 'neo' (adjust the URL as needed)
            window.location.href = '/';    
        
        } else if (selectedValue === 'earth') {
            // Redirect to another page for 'neo' (adjust the URL as needed)
            window.location.href = '/earth';

        } else if (selectedValue === 'mars') {
            // Redirect to another page for 'exoplanets' (adjust the URL as needed)
            window.location.href = '/mars-rover';
        
        } else if (selectedValue === 'epic') {
            window.location.href = '/epic';
        }
    });
});
