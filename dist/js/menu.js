$(".menu_btn").on("click", function(e) {
  e.preventDefault();
  $(this).toggleClass("menu_btn__active");
  $(".menu_nav").toggleClass("menu_nav__active");
  $(".menu_form-search").toggleClass("menu_form-search__active");
  // $(".nav-menu").toggleClass("nav-menu__active");
  $(".menu_btn-close").toggleClass("menu_btn-close__active");
});
$(".menu_btn-close").on("click", function(c) {
  c.preventDefault();
  $(this).removeClass("menu_btn-close__active");
  $(".menu_nav").removeClass("menu_nav__active");
  $(".menu_form-search").removeClass("menu_form-search__active");
  // $(".nav-menu").removeClass("nav-menu__active");
  $(".menu-btn").removeClass("menu-btn__active");
});
$(function() {
  $(".menu_nav [href]").each(function() {
    if (this.href == window.location.href) {
      $(this).addClass("current");
    }
  });
});
$('.modal__link').magnificPopup({
  items: {
    src: '#modal-cart',
  }
});
