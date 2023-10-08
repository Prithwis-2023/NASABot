document.addEventListener('DOMContentLoaded', function() {
    const loadPageButton0 = document.querySelector('#browse');

    // Add a click event listener to the button
    loadPageButton0.addEventListener('click', function() {
        window.location.href = '/neob';
    });

    const loadPageButton1 = document.querySelector('#feed');

    // Add a click event listener to the button
    loadPageButton1.addEventListener('click', function() {
        window.location.href = '/neof';
    });    
});    