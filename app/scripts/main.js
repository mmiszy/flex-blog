'use strict';
window.addEventListener('resize', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-rt]'), function (el) {
        el.style.zIndex = 0;
    });
});