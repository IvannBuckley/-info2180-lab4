document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search-button");

    button.addEventListener("click", () => {
        // Create an AJAX request
        fetch('superheroes.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                // Show the result as an alert
                alert(data);
            })
            .catch(error => {
                console.error("There was a problem with the fetch operation:", error);
            });
    });
});
