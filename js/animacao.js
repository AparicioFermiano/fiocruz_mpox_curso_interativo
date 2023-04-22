function shake() {
    var animatedElements = document.querySelectorAll('[data-animation]');

    animatedElements.forEach(function (element) {
        var animationType = element.dataset.animation;
        var boundingRect = element.getBoundingClientRect();

        if (boundingRect.bottom > 0 && boundingRect.top < window.innerHeight) {
            if (animationType === 'saiba-mais-animation') {
                element.classList.add('saiba-mais-animation');
                setTimeout(function () {
                    element.classList.remove('saiba-mais-animation');
                }, 2000);
            }
        }
    })
}

setInterval(shake, 5000);

// var animatedImg = document.querySelector('.animated-img');
// var container = document.querySelector('.container');

// function checkSlide() {
//   var containerTop = container.getBoundingClientRect().top;
//   var containerBottom = container.getBoundingClientRect().bottom;
//   var windowHeight = window.innerHeight;

//   if (containerTop < windowHeight && containerBottom > 0) {
//     animatedImg.style.opacity = 1;
//   } else {
//     animatedImg.style.opacity = 0;
//   }
// }

// window.addEventListener('scroll', function() {
//   checkSlide();
// });