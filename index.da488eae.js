!function(){function e(e){return e&&e.__esModule?e.default:e}var t,o,s,n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,t,o){t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o;return e},function(){var t,o=(t={togglerMenu:document.querySelector("[data-menu-button]"),menuItems:document.querySelectorAll("[data-menu-item]"),Menu:document.querySelector("[data-menu-container]"),openModal:document.querySelectorAll("[data-modal-open]")},e(n)(t,"togglerMenu",document.querySelector("[data-menu-button]")),e(n)(t,"closeModal",document.querySelectorAll("[data-modal-close]")),e(n)(t,"backDrop",document.querySelector("[data-modal-bg]")),t);function s(){var e="true"===o.togglerMenu.getAttribute("aria-expanded")||!1;o.togglerMenu.setAttribute("aria-expanded",!e),o.togglerMenu.classList.toggle("is-open"),o.Menu.classList.toggle("is-closed"),o.backDrop.classList.toggle("is-hidden"),document.body.classList.toggle("off_overflow")}function c(){o.togglerMenu.classList.contains("is-open")&&s()}function l(e){c(),document.querySelector(e).classList.toggle("is-hidden"),o.backDrop.classList.toggle("is-hidden"),document.body.classList.toggle("off_overflow"),o.backDrop.dataset.opened==e?o.backDrop.dataset.opened="none":o.backDrop.dataset.opened=e}function r(){var e=o.backDrop.dataset.opened;"none"==e?c():(c(),l(e))}o.menuItems.forEach((function(e){e.addEventListener("click",c)})),o.togglerMenu.addEventListener("click",s),o.openModal.forEach((function(e){e.addEventListener("click",(function(){l("["+e.dataset.id+"]")}))})),o.closeModal.forEach((function(e){e.addEventListener("click",r)})),o.backDrop.addEventListener("click",r)}(),t=function(){"use strict";var e={toggle:"easy-toggle",add:"easy-add",remove:"easy-remove",class:"easy-class",rcoe:"easy-rcoe",parallel:"easy-parallel",self:"easy-self",selfRcoe:"easy-self-rcoe",onToggle:function(e){},onAdd:function(e){},onRemove:function(e){},onRcoe:function(e){}};document.addEventListener("DOMContentLoaded",(function(){document.addEventListener("click",(function(t){var o,s,n,c,l,r,a,i;s=e,r=(o=t).target.closest("[".concat(s.toggle,"]")),a=o.target.closest("[".concat(s.remove,"]")),i=o.target.closest("[".concat(s.add,"]")),r&&(o.preventDefault(),function(e,t){var o;t.onToggle(e);var s=e.getAttribute(t.toggle);document.querySelectorAll("[".concat(t.toggle,"]")).forEach((function(o){if(!o.hasAttribute(t.parallel)&&o!==e){document.querySelector(o.getAttribute(t.toggle)).classList.remove(o.getAttribute(t.class));var s=e.getAttribute(t.self);s&&e.classList.remove(s)}})),null===(o=document.querySelector(s))||void 0===o||o.classList.toggle(e.getAttribute(t.class));var n=e.getAttribute(t.self);n&&e.classList.toggle(n)}(r,s)),a&&(o.preventDefault(),function(e,t){t.onRemove(e);var o=e.getAttribute(t.remove),s=e.getAttribute(t.class);document.querySelectorAll(o).forEach((function(e){e.classList.remove(s)}));var n=e.getAttribute(t.self);n&&e.classList.remove(n)}(a,s)),i&&(o.preventDefault(),function(e,t){t.onAdd(e);var o=e.getAttribute(t.add),s=e.getAttribute(t.class);document.querySelectorAll(o).forEach((function(e){e.classList.add(s)}));var n=e.getAttribute(t.self);n&&e.classList.add(n)}(i,s)),r||a||i||(n=o,c=s,l=document.querySelectorAll("[".concat(c.rcoe,"]")),Array.from(l).forEach((function(e){var t=e.getAttribute(c.toggle),o=e.getAttribute(c.class);if(!n.target.closest(t)){var s;c.onRcoe(e),null===(s=document.querySelector(t))||void 0===s||s.classList.remove(o);var l=e.getAttribute(c.self);l&&e.classList.remove(l)}})))}))}))},"function"==typeof define&&define.amd?define(t):t(),$(".scroll-to").on("click",(function(e){e.preventDefault();var t=$(this).attr("href");$("html, body").stop().animate({scrollTop:$(t).offset().top-0},800)})),o=document.querySelector(".scroll-to-top"),window.addEventListener("scroll",(function(e){window.scrollY>=150?o.classList.add("is-hidden"):o.classList.remove("is-hidden")})),(s={togglerDescription:document.querySelector("[data-description-toggle]"),descriptionSlides:document.querySelector("[data-description-slides]")}).togglerDescription.addEventListener("click",(function(){s.descriptionSlides.classList.contains("show-first")?(s.descriptionSlides.classList.toggle("show-first"),s.descriptionSlides.classList.toggle("show-two")):s.descriptionSlides.classList.contains("show-two")?(s.descriptionSlides.classList.toggle("show-three"),s.descriptionSlides.classList.toggle("show-two")):(s.descriptionSlides.classList.toggle("show-first"),s.descriptionSlides.classList.toggle("show-three"))}));var c=document.querySelector(".about__btn"),l=document.querySelector(".about__text-more");c.addEventListener("click",(function(e){l.classList.toggle("show-more"),"Read more"===c.innerText?c.innerText="Read less":c.innerText="Read more"})),$((function(){$(".customer-reviews__list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0,autoplay:!0,autoplaySpeed:2e3})}))}();
//# sourceMappingURL=index.da488eae.js.map