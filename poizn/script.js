document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("background");
  const music = document.getElementById("background-music");
  const container = document.getElementById("container");
  const overlay = document.getElementById("clickOverlay");
  const muteBtn = document.getElementById("mute-btn");

  // Detect mobile devices
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // YOUR VIDEO LINKS
  const desktopVideo = "https://files.catbox.moe/ww0h2e.mp4";
  const mobileVideo = "https://files.catbox.moe/ed52yg.mp4";

  // Set video source based on device
  video.innerHTML = `
    <source src="${isMobile ? mobileVideo : desktopVideo}" type="video/mp4">
  `;

  video.load();

  overlay.addEventListener("click", () => {
    video.muted = false;
    video.volume = 0.1;

    video.play().catch(err => {
      console.log("Video play failed:", err);
    });

    music.muted = true;
    music.volume = 0.25;

    music.play().catch(err => {
      console.log("Music play failed:", err);
    });

    video.style.filter = "none";
    video.style.opacity = "1";

    overlay.style.display = "none";

    container.classList.add("visible");

    if (!isMobile) {
      muteBtn.classList.add("visible");
    }
  });

  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? "♪" : "♫";
  });
});