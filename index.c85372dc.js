(()=>{const e={togglerMenu:document.querySelector("[data-menu-button]"),menuItems:document.querySelectorAll("[data-menu-item]"),Menu:document.querySelector("[data-menu-container]")};function t(){const t="true"===e.togglerMenu.getAttribute("aria-expanded")||!1;e.togglerMenu.setAttribute("aria-expanded",!t),e.togglerMenu.classList.toggle("is-open"),e.Menu.classList.toggle("is-closed"),document.body.classList.toggle("off_overflow")}function o(){e.togglerMenu.classList.contains("is-open")&&t()}e.menuItems.forEach((e=>{e.addEventListener("click",o)})),e.togglerMenu.addEventListener("click",t)})(),$((function(){$(".customer-reviews__list").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,dots:!0})}));
//# sourceMappingURL=index.c85372dc.js.map