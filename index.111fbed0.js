(()=>{const e={togglerMenu:document.querySelector("[data-menu-button]"),menuItems:document.querySelectorAll("[data-menu-item]"),Menu:document.querySelector("[data-menu-container]")};function t(){e.togglerMenu.classList.toggle("is-open"),e.Menu.classList.toggle("is-closed"),document.body.classList.toggle("off_overflow")}function n(){e.togglerMenu.classList.contains("is-open")&&t()}e.menuItems.forEach((e=>{e.addEventListener("click",n)})),e.togglerMenu.addEventListener("click",t)})();
//# sourceMappingURL=index.111fbed0.js.map