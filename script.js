
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

// Ouvrir et fermer le menu mobile

menuButton.addEventListener("click", () => {

    const opened = nav.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        String(opened)
    );

    menuButton.innerHTML = opened
        ? 'FERMER <span>×</span>'
        : 'MENU <span>＋</span>';

});


// Fermer le menu après avoir choisi une section

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.innerHTML = 'MENU <span>＋</span>';

    });

});


// Afficher automatiquement l'année actuelle

document.getElementById("year").textContent =
    new Date().getFullYear();
