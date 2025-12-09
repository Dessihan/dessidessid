document.addEventListener("DOMContentLoaded", function () {

  /* ================================
     1. HERO TITLE LETTER ANIMATION
     ================================ */
  const title = document.getElementById("hero-title");
  const text = title.textContent;
  title.textContent = "";

  for (const ch of text) {
    if (ch === " ") {
      title.appendChild(document.createTextNode(" "));
    } else {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch;
      title.appendChild(span);
    }
  }

  /* ================================
     2. NAV MENU TOGGLE 
     ================================ */
  const toggle = document.querySelector(".openNav");

  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }

});
