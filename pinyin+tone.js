document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".openNav");

  if (!toggle) {
    console.warn("No .openNav button found");
    return;
  }

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("nav-open");
  });
});
