document.addEventListener("DOMContentLoaded", function () {
  // NAV BUTTON TOGGLE
  const toggle = document.querySelector(".openNav");
  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }

  // AUDIO BUTTONS
  const audioButtons = document.querySelectorAll("button[data-mp3]");
  const audioPlayer = new Audio();

  audioButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const src = btn.getAttribute("data-mp3");
      if (!src) return;

      audioPlayer.src = src;
      audioPlayer.currentTime = 0;
      audioPlayer.play().catch(function (err) {
        console.error("Audio play error:", err);
      });
    });
  });
});
