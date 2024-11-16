document.getElementById("searchButton").addEventListener("click", function() {
    // Create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    
    // Configure it: GET-request for the URL /superheroes.php
    xhr.open("GET", "superheroes.php", true);
    
    // Set up the onload callback
    xhr.onload = function() {
        if (xhr.status === 200) { // success
            // Display the result in an alert
            alert(xhr.responseText);
        } else {
            alert("Error loading superheroes list.");
        }
    };
    
    // Handle network errors
    xhr.onerror = function() {
        alert("Request failed");
    };

    // Send the request
    xhr.send();
});

  