// Sökvägar till bilderna
const bildSokvagar = [
    "img/album1.jpg",
    "img/album2.jpg",
    "img/album3.jpg",
    "img/album4.jpg",
    "img/album5.jpg",
    "img/album6.jpg",
    "img/album7.jpg",
    "img/album8.jpg",
    "img/album9.jpg"
];

// Index för aktuell bild
let aktuelltIndex = 0;

// Funktion för att flytta bilderna åt vänster eller höger
function flyttaBilder(riktning) {
    const bildContainer = document.getElementById("bildContainer");

    if (riktning === 'vänster') {
        aktuelltIndex = (aktuelltIndex - 1 + bildSokvagar.length) % bildSokvagar.length;
    } else if (riktning === 'höger') {
        aktuelltIndex = (aktuelltIndex + 1) % bildSokvagar.length;
    }

    // Uppdatera src-attributet för varje bild i bildcontainern
    for (let x = 0; x < bildSokvagar.length; x++) {
        const bildElement = bildContainer.getElementsByTagName("img")[x];
        const nySrc = bildSokvagar[(aktuelltIndex + x) % bildSokvagar.length];
        bildElement.src = nySrc;
        bildElement.alt = `Bild ${x + 1}`;
    }
}
