document.querySelectorAll("form input").forEach(function(e){var t=document.createElement("label");t.className="field-label",t.setAttribute("for",e.id);var r=e.name.split(/(?=[A-Z])/).map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" ");t.textContent=r,e.setAttribute("placeholder",t.textContent),e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.b4bfe35f.js.map
