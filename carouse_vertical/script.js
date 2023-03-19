class Slider {
  constructor(options) {
    const initial_dot = document.querySelector("#js-dots").children
    initial_dot[0].classList.add("is-active");
    this.sections = document.querySelectorAll(options.section);
    this.navigation = document.querySelector(options.dots);
    this.navigation.addEventListener('click', this.scrollToSection.bind(this));
    this.arrow_navigation_top = document.querySelector(options.arrow_top)
    this.arrow_navigation_top.addEventListener('click', this.scroll_to_position_arrow_top.bind(this.navigation));
    this.arrow_navigation_bottom = document.querySelector(options.arrow_bottom)
    this.arrow_navigation_bottom.addEventListener('click', this.scroll_to_position_arrow_bottom.bind(this.navigation));
    window.addEventListener('scroll', this.setDotStatus.bind(this));
  }

  removeDotStyles() {
    const dots = this.navigation;
    const is_active = dots.querySelector('.is-active');

    if (is_active != null) {
      is_active.classList.remove('is-active');
    }
  }

  scroll_to_position_arrow_top(){
    const window_height = window.innerHeight;
    const dots = document.querySelector("#js-dots").children
    let before_do_idx = 0
    for (var k = 0; k < dots.length; k++){
      if (dots[k].classList.contains('is-active')){
        before_do_idx = k-1;
      }
    }
    window.scrollTo({
      top: window_height * before_do_idx,
      behavior: 'smooth',
    });
  }

  scroll_to_position_arrow_bottom(){
    const window_height = window.innerHeight;
    const dots = document.querySelector("#js-dots").children
    let before_do_idx = 0
    for (var k = 0; k < dots.length; k++){
      if (dots[k].classList.contains('is-active')){
        before_do_idx = k+1;
      }
    }
    window.scrollTo({
      top: window_height * before_do_idx,
      behavior: 'smooth',
    });
  }
  
  setDotStatus() {
    const scroll_position = window.scrollY;
    const dots = Array.from(this.navigation.children);

    this.sections.forEach((section, index) => {
      const half_window = window.innerHeight / 2;
      const section_top = section.offsetTop;

      if (scroll_position > section_top - half_window && scroll_position < section_top + half_window) {
        this.removeDotStyles();
        dots[index].classList.add('is-active');
      }
    })
  }

  scrollToSection(e) {
    const dots = Array.from(this.navigation.children);
    const window_height = window.innerHeight;
    dots.forEach((dot, index) => {
      if (dot == e.target) {
        window.scrollTo({
          top: window_height * index,
          behavior: 'smooth',
        });
      }
    });
  }
}

new Slider({
  section: '.section',
  dots: '#js-dots',
  arrow_top: '#nav-arrow-top-id',
  arrow_bottom: '#nav-arrow-bottom-id',
});

if( navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
){
  document.getElementById("nav-arrow-top").style.visibility = 'hidden';
  document.getElementById("js-dots").style.visibility = 'hidden';
  document.getElementById("nav-arrow-bottom").style.visibility = 'hidden';
}
else {
  document.getElementById("nav-arrow-top").style.visibility = 'visible';
  document.getElementById("js-dots").style.visibility = 'visible';
  document.getElementById("nav-arrow-bottom").style.visibility = 'visible';
}