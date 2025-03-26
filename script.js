document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const indicator = document.getElementById("indicator");

    const positions = ["5%", "35%", "75%"];

    // Hover-Effekt: Zeigt den Indicator unter dem aktuellen Link
    navLinks.forEach((link, index) => {
        link.addEventListener("mouseenter", function () {
            indicator.style.left = positions[index];
        });
    });

    // Zurücksetzen beim Verlassen der Navigation (optional)
    document.querySelector("nav").addEventListener("mouseleave", function () {
        const savedIndex = localStorage.getItem("activeNav");
        if (savedIndex !== null) {
            indicator.style.left = positions[savedIndex];
        }
    });

    // Klick-Ereignis: Setzt die Position dauerhaft
    navLinks.forEach((link, index) => {
        link.addEventListener("click", function (event) {
             // Verhindert das direkte Neuladen der Seite
            indicator.style.left = positions[index];
            localStorage.setItem("activeNav", index); // Speichert den aktiven Link
        });
    });

    // Beim Laden der Seite den gespeicherten Zustand setzen
    const savedIndex = localStorage.getItem("activeNav");
    if (savedIndex !== null) {
        indicator.style.left = positions[savedIndex];
    }
});
