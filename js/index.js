// Criado por Aparicio Fermiano Junior
// https://github.com/AparicioFermiano 

function nav() {
    var sidebar = document.querySelector(".sidebar");
    var btn_sidebar = document.querySelector(".btn-sidebar");
    var offcanvas = document.querySelector(".offcanvas");
    btn_sidebar.classList.toggle("open");
    sidebar.classList.toggle("open");
    offcanvas.classList.toggle("open");

    offcanvas.addEventListener("click", function() {
        offcanvas.classList.remove("open");
        btn_sidebar.classList.remove("open");
        sidebar.classList.remove("open");
    });
}

// function carouselHandler(action, carouselId) {
//     var carousel = document.getElementById(carouselId);
//     var activeElement = carousel.querySelector('.default.active');

//     if (action === "next") {
//         var ProxElement = activeElement.nextElementSibling || carousel.querySelector('.carousel-item:first-child');
//         activeElement.classList.remove('active', 'slide-fade');
//         ProxElement.classList.add('active', 'slide-fade');
//     } else if (action === "prev") {
//         console.log(activeElement)
//         if (activeElement.id == 'home-1' || activeElement.id == 'autoras-1') {
//             ProxElement = activeElement
//         } else {
//             var ProxElement = activeElement.previousElementSibling || carousel.querySelector('.carousel-item:last-child');
//             activeElement.classList.remove('active');
//             ProxElement.classList.add('active');
//         }
//     }
// }

function creditos(modulo){
    window.location.href = "/creditos" + modulo + '.html';
}

