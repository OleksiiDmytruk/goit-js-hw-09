!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){r(!0),t.style.backgroundColor=a(),o=setInterval((function(){t.style.backgroundColor=a()}),1e3)})),n.addEventListener("click",(function(){r(!1),clearInterval(o)}));var o=null;function r(t){e.disabled=t,n.disabled=!t}function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}n.disabled=!0}();
//# sourceMappingURL=01-color-switcher.9c7d2a90.js.map