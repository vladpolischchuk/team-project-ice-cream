!function(){var e={togglerMenu:document.querySelector("[data-menu-button]"),menuItems:document.querySelectorAll("[data-menu-item]"),Menu:document.querySelector("[data-menu-container]")};function t(){var t="true"===e.togglerMenu.getAttribute("aria-expanded")||!1;e.togglerMenu.setAttribute("aria-expanded",!t),e.togglerMenu.classList.toggle("is-open"),e.Menu.classList.toggle("is-closed"),document.body.classList.toggle("off_overflow")}function n(){e.togglerMenu.classList.contains("is-open")&&t()}e.menuItems.forEach((function(e){e.addEventListener("click",n)})),e.togglerMenu.addEventListener("click",t)}();
//# sourceMappingURL=index.7dfe0294.js.map
