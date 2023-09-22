const submitButton = document.getElementById("submit");
const input = document.querySelector('#inputGroupSelect04');

// Add a click event listener to the button
submitButton.addEventListener("click", function() {
    // Get the selected query from the dropdown
    const selectedQuery = input.value;

    // Define the URL for the new HTML page based on the selected query
    let newPageUrl = "";

    // Handle different query options
    switch (selectedQuery) {
        case "apod":
            window.location.href = "/templates/apod.html"; // Replace with the actual URL for the APOD page
            break;
        // Add cases for other query options here
    }
});
