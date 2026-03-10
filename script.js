const button = document.getElementById("projects-button");

button.addEventListener("click", function() {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});