const openingScreen = document.getElementById("opening-screen");
const openButton = document.getElementById("open-button");
const weddingContent = document.getElementById("wedding-content");

openButton.addEventListener("click", () => {

    // Start envelope opening animation
    openingScreen.classList.add("opening");

    // Hide button
    openButton.style.opacity = "0";
    openButton.style.pointerEvents = "none";

    // Reveal wedding invitation after animation
    setTimeout(() => {

        openingScreen.style.opacity = "0";
        openingScreen.style.visibility = "hidden";

        weddingContent.style.display = "block";

    }, 4500);

});
