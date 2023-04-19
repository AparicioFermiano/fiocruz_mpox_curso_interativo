// Autor: Aparicio Fermiano dos Santos Junior
// https://github.com/AparicioFermiano 

function nav() {
    var sidenav = document.getElementById("sidenav");
    var marginRight = window
        .getComputedStyle(sidenav)
        .getPropertyValue("margin-right");
    if (marginRight === "-300px" || marginRight === "") {
        sidenav.style.marginRight = "0px";
    } else {
        sidenav.style.marginRight = "-300px";
    }
}

function carouselHandler(action, carouselId) {
    var carousel = document.getElementById(carouselId);
    var activeElement = carousel.querySelector('.default.active');

    if (action === "next") {
        var ProxElement = activeElement.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
        activeElement.classList.remove('active', 'slide-fade');
        ProxElement.classList.add('active', 'slide-fade');
    } else if (action === "prev") {
        console.log(activeElement)
        if (activeElement.id == 'home-1' || activeElement.id == 'autoras-1') {
            ProxElement = activeElement
        } else {
            var ProxElement = activeElement.previousElementSibling || carousel.querySelector('.carousel-item:last-child');
            activeElement.classList.remove('active');
            ProxElement.classList.add('active');
        }
    }
}