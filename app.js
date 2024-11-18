document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-input");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const query = input.value.trim(); 

        // Build the URL with the query parameter
        const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : `superheroes.php`;

        // Make an AJAX request to fetch the data
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                // Display the result in the result div
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error("Error fetching the superheroes list:", error);
                resultDiv.innerHTML = `<p>An error occurred. Please try again later.</p>`;
            });
    });
});
