const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");t.addEventListener("click",(function(){t.disabled=!0,d.disabled=!1,e.style.backgroundColor=n(),a=setInterval((()=>{e.style.backgroundColor=n()}),1e3)})),d.addEventListener("click",(function(){t.disabled=!1,d.disabled=!0,clearInterval(a)}));let a=null;function n(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}d.disabled=!0;
//# sourceMappingURL=01-color-switcher.5d093493.js.map
