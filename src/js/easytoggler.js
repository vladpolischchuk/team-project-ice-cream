/*!
 * EasyToggler v2.2.2 (https://github.com/rah-emil/easy-toggler#readme)
 * Copyright 2022 Rah Emil <013131@mail.ru>
 * Licensed under MIT (https://github.com/rah-emil/easy-toggler/blob/master/LICENSE)
 */
!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";function e(e,t){const s=e.target.closest(`[${t.toggle}]`),o=e.target.closest(`[${t.remove}]`),l=e.target.closest(`[${t.add}]`);s&&(e.preventDefault(),((e,t)=>{t.onToggle(e);const s=e.getAttribute(t.toggle);document.querySelectorAll(`[${t.toggle}]`).forEach((s=>{if(!s.hasAttribute(t.parallel)&&s!==e){document.querySelector(s.getAttribute(t.toggle)).classList.remove(s.getAttribute(t.class));const o=e.getAttribute(t.self);o&&e.classList.remove(o)}})),document.querySelector(s)?.classList.toggle(e.getAttribute(t.class));const o=e.getAttribute(t.self);o&&e.classList.toggle(o)})(s,t)),o&&(e.preventDefault(),((e,t)=>{t.onRemove(e);const s=e.getAttribute(t.remove),o=e.getAttribute(t.class);document.querySelectorAll(s).forEach((e=>{e.classList.remove(o)}));const l=e.getAttribute(t.self);l&&e.classList.remove(l)})(o,t)),l&&(e.preventDefault(),((e,t)=>{t.onAdd(e);const s=e.getAttribute(t.add),o=e.getAttribute(t.class);document.querySelectorAll(s).forEach((e=>{e.classList.add(o)}));const l=e.getAttribute(t.self);l&&e.classList.add(l)})(l,t)),s||o||l||((e,t)=>{const s=document.querySelectorAll(`[${t.rcoe}]`);Array.from(s).forEach((s=>{let o=s.getAttribute(t.toggle),l=s.getAttribute(t.class);if(!e.target.closest(o)){t.onRcoe(s),document.querySelector(o)?.classList.remove(l);const e=s.getAttribute(t.self);e&&s.classList.remove(e)}}))})(e,t)}const t={toggle:"easy-toggle",add:"easy-add",remove:"easy-remove",class:"easy-class",rcoe:"easy-rcoe",parallel:"easy-parallel",self:"easy-self",selfRcoe:"easy-self-rcoe",onToggle(e){},onAdd(e){},onRemove(e){},onRcoe(e){}};document.addEventListener("DOMContentLoaded",(()=>{document.addEventListener("click",(s=>{e(s,t)}))}))}));
//# sourceMappingURL=easy-toggler.min.js.map