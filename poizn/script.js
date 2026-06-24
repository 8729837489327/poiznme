document.addEventListener("DOMContentLoaded", () => {

  /* ===================================
     ELEMENTS
  =================================== */

  const video = document.getElementById("background");
  const music = document.getElementById("background-music");

  const overlay = document.getElementById("clickOverlay");
  const container = document.getElementById("container");
  const muteBtn = document.getElementById("mute-btn");

  const profileImage = document.getElementById("profileImage");
  const bannerImage = document.getElementById("bannerImage");
  const username = document.getElementById("username");
  const socials = document.getElementById("socials");

  const isMobile =
    /iPhone|iPad|iPod|Android/i.test(
      navigator.userAgent
    );

  /* ===================================
     SITE INFO
  =================================== */

  overlay.textContent = CONFIG.SITE.clickText;

  username.textContent =
    CONFIG.SITE.username;

  /* ===================================
     THEME VARIABLES
  =================================== */

  document.documentElement.style.setProperty(
    "--username-color",
    CONFIG.THEME.usernameColor
  );

  document.documentElement.style.setProperty(
    "--username-shadow",
    CONFIG.THEME.usernameShadow
  );

  document.documentElement.style.setProperty(
    "--container-border",
    CONFIG.THEME.containerBorder
  );

  document.documentElement.style.setProperty(
    "--container-blur",
    CONFIG.THEME.containerBlur
  );

  /* ===================================
     FEATURE TOGGLES
  =================================== */

  if (!CONFIG.FEATURES.enableFog)
    document.getElementById("liminalFog").remove();

  if (!CONFIG.FEATURES.enableVignette)
    document.getElementById("vignette").remove();

  /* ===================================
     PROFILE IMAGE
  =================================== */

  if (CONFIG.MEDIA.profileImage) {
    profileImage.src =
      CONFIG.MEDIA.profileImage;
  } else {
    profileImage.parentElement.remove();
  }

  /* ===================================
     BANNER IMAGE
  =================================== */

  if (CONFIG.MEDIA.bannerImage) {
    bannerImage.src =
      CONFIG.MEDIA.bannerImage;
  } else {
    bannerImage.parentElement.remove();
  }

  /* ===================================
     VIDEO
  =================================== */

  const videoSource = document.createElement("source");

  videoSource.src = isMobile
    ? CONFIG.MEDIA.mobileVideo
    : CONFIG.MEDIA.desktopVideo;

  videoSource.type = "video/mp4";

  video.appendChild(videoSource);
  video.load();

  /* ===================================
     MUSIC
  =================================== */

  if (CONFIG.MEDIA.music) {

    const musicSource =
      document.createElement("source");

    musicSource.src =
      CONFIG.MEDIA.music;

    musicSource.type =
      "audio/mpeg";

    music.appendChild(musicSource);

    music.load();
  }

  /* ===================================
     SOCIALS
  =================================== */

  CONFIG.SOCIALS.forEach(social => {

    const button =
      document.createElement("div");

    button.className = "social-btn";

    button.setAttribute(
      "data-tooltip",
      social.name
    );

    button.onclick = () =>
      window.open(
        social.url,
        "_blank"
      );

    button.innerHTML =
      `<img src="${social.icon}">`;

    socials.appendChild(button);
  });

  /* ===================================
     START SITE
  =================================== */

  overlay.addEventListener("click", () => {

    video.muted = false;
    video.currentTime = 12.8
    video.volume =
      CONFIG.AUDIO.videoVolume;

    video.play();

    if (CONFIG.MEDIA.music) {
      music.volume =
        CONFIG.AUDIO.musicVolume;

      music.play();
    }

    overlay.style.display = "none";

    container.classList.add(
      "visible"
    );

    video.style.opacity = "1";
    video.style.filter = "none";

    if (
      !isMobile ||
      CONFIG.FEATURES.showMuteButtonOnMobile
    ) {
      muteBtn.classList.add(
        "visible"
      );
    }
  });

  /* ===================================
     MUTE BUTTON
  =================================== */

  muteBtn.addEventListener("click", () => {

    video.muted = !video.muted;

    muteBtn.textContent =
      video.muted
        ? "♪"
        : "♫";
  });

});