document.getElementById("fetch-btn").addEventListener("click", () => {
    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            document.getElementById("data-container").innerHTML =
                data.users.map(user =>
                    `<p>${user.id} Name: ${user.name} | Email: ${user.email} | City: ${user.city}</p>`
                ).join("");
        });
});
