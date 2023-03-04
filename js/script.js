let burger = document.querySelector('.burger');

let menu = document.querySelector('.header__nav');

let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {
  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

let search = document.querySelector(".header__search-btn");
let searchBlock = document.querySelector(".header__search-block");
let searchClosed = document.querySelector(".header__search-closed");

search.addEventListener("click",

function () {
  searchBlock.classList.toggle('header__search-block--open');
  search.classList.add("header__search-btn--active");
});

searchClosed.addEventListener("click", function () {
  searchBlock.classList.remove('header__search-block--open');
});

const swiper = new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true
  }
});

document.querySelectorAll('.steps__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.steps__link').forEach(function(btn){
  btn.classList.remove('steps__link--active')});
  e.currentTarget.classList.add('steps__link--active');

  document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
    tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

