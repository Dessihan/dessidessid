document.addEventListener("DOMContentLoaded", function () {
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
});
