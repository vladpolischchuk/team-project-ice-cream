!function(){function e(e){return e&&e.__esModule?e.default:e}var t,o,s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o;return e},function(){var t,o=(t={togglerMenu:document.querySelector("[data-menu-button]"),menuItems:document.querySelectorAll("[data-menu-item]"),Menu:document.querySelector("[data-menu-container]"),openModal:document.querySelectorAll("[data-modal-open]")},e(s)(t,"togglerMenu",document.querySelector("[data-menu-button]")),e(s)(t,"closeModal",document.querySelectorAll("[data-modal-close]")),e(s)(t,"backDrop",document.querySelector("[data-modal-bg]")),t);function c(){var e="true"===o.togglerMenu.getAttribute("aria-expanded")||!1;o.togglerMenu.setAttribute("aria-expanded",!e),o.togglerMenu.classList.toggle("is-open"),o.Menu.classList.toggle("is-closed"),o.backDrop.classList.toggle("is-hidden"),document.body.classList.toggle("off_overflow")}function r(){o.togglerMenu.classList.contains("is-open")&&c()}function l(e,t){r(),document.querySelector(e).classList.toggle("is-hidden"),t?(o.backDrop.dataset.overlay=!0,o.backDrop.classList.toggle("is-hidden"),document.body.classList.toggle("off_overflow")):o.backDrop.dataset.overlay=!1,o.backDrop.dataset.opened==e?o.backDrop.dataset.opened="none":o.backDrop.dataset.opened=e}function d(){var e=o.backDrop.dataset.opened;"none"==e?r():(r(),l(e,o.backDrop.dataset.overlay))}o.menuItems.forEach((function(e){e.addEventListener("click",r)})),o.togglerMenu.addEventListener("click",c),o.openModal.forEach((function(e){e.addEventListener("click",(function(){l("["+e.dataset.id+"]",void 0===e.dataset.overlay)}))})),o.closeModal.forEach((function(e){e.addEventListener("click",d)})),o.backDrop.addEventListener("click",d)}(),$(".scroll-to").on("click",(function(e){e.preventDefault();var t=$(this).attr("href");$("html, body").stop().animate({scrollTop:$(t).offset().top-0},800)})),t=document.querySelector(".btn-scroll-top"),window.addEventListener("scroll",(function(e){window.scrollY>=150?t.classList.add("is-hidden"):t.classList.remove("is-hidden")})),(o={togglerDescription:document.querySelector("[data-description-toggle]"),descriptionSlides:document.querySelector("[data-description-slides]")}).togglerDescription.addEventListener("click",(function(){o.descriptionSlides.classList.contains("show-first")?(o.descriptionSlides.classList.toggle("show-first"),o.descriptionSlides.classList.toggle("show-two")):o.descriptionSlides.classList.contains("show-two")?(o.descriptionSlides.classList.toggle("show-three"),o.descriptionSlides.classList.toggle("show-two")):(o.descriptionSlides.classList.toggle("show-first"),o.descriptionSlides.classList.toggle("show-three"))}));var c=document.querySelector(".about__btn"),r=document.querySelector(".about__text-more");c.addEventListener("click",(function(e){r.classList.toggle("show-more"),"Read more"===c.innerText?c.innerText="Read less":c.innerText="Read more"})),$((function(){$(".customer-reviews__list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:2e3})})),function(){var e={togglerProduct_1:document.querySelector("[data-product-toggle-1]"),togglerProduct_2:document.querySelector("[data-product-toggle-2]"),togglerProduct_3:document.querySelector("[data-product-toggle-3]"),productsSlides:[document.querySelector("[data-product-slides-1]"),document.querySelector("[data-product-slides-2]"),document.querySelector("[data-product-slides-3]")]};function t(t){e.productsSlides[t].classList.contains("show-first")?(e.productsSlides[t].classList.toggle("show-first"),e.productsSlides[t].classList.toggle("show-two")):e.productsSlides[t].classList.contains("show-two")?(e.productsSlides[t].classList.toggle("show-three"),e.productsSlides[t].classList.toggle("show-two")):(e.productsSlides[t].classList.toggle("show-first"),e.productsSlides[t].classList.toggle("show-three"))}e.togglerProduct_1.addEventListener("click",(function(){t(0)})),e.togglerProduct_2.addEventListener("click",(function(){t(1)})),e.togglerProduct_3.addEventListener("click",(function(){t(2)}))}()}();
//# sourceMappingURL=index.0c18aa5f.js.map
