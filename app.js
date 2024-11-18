document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchField").value.trim();

    const sanitizedQuery = encodeURIComponent(query);

    const xhr = new XMLHttpRequest();

    const url = sanitizedQuery ? `superheroes.php?query=${sanitizedQuery}` : "superheroes.php";
    xhr.open("GET", url, true);

    xhr.onload = function () {
        const resultDiv = document.getElementById("result");

        if (xhr.status === 200) {
            const response = xhr.responseText.trim();

            if (sanitizedQuery) {
                if (response.startsWith("<h3>")) {
                    resultDiv.innerHTML = response; 
                } else {
                    resultDiv.innerHTML = "<p class='not-found'>SUPERHERO NOT FOUND</p>";
                }
            } else {
                resultDiv.innerHTML = response;
            }
        } else {
            resultDiv.innerHTML = "<p>Error loading superheroes list.</p>";
        }
    };

    xhr.onerror = function () {
        document.getElementById("result").innerHTML = "<p>Request failed.</p>";
    };

    xhr.send();
});
