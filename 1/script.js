document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("background");
  const music = document.getElementById("background-music");
  const container = document.getElementById("container");
  const overlay = document.getElementById("clickOverlay");
  const muteBtn = document.getElementById("mute-btn");

  // Detect mobile device
  const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);
  if (isMobile) {
    muteBtn.style.display = "none";
  }

  overlay.addEventListener("click", () => {
    video.muted = false;
    video.play();
    video.style.filter = "none";
    video.style.opacity = "1";
    overlay.style.display = "none";

    container.classList.add("visible");

    // Only show volume control if not on mobile
    if (!isMobile) {
      muteBtn.classList.add("visible");
    }
  });

  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "🔇" : "🔊";
  });
});