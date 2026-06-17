(function () {
    "use strict";

    var enterBtn = document.getElementById("enterBtn");
    var enterScreen = document.getElementById("enterScreen");
    var brandAnchor = document.getElementById("brandAnchor");
    var videoContainer = document.getElementById("videoContainer");
    var bgMusic = document.getElementById("bgMusic");

    var navLinks = document.getElementById("navLinks");
    var contentFrame = document.getElementById("contentFrame");

    var hasStarted = false;
    var FADE_DURATION = 800;
    var SLIDE_DELAY = 1200;
    var SLIDE_DURATION = 1000;
    var BG_REVEAL_DELAY = SLIDE_DELAY + SLIDE_DURATION;
    var BORDER_DURATION = 1200;
    var BORDER_REVEAL_DELAY = BG_REVEAL_DELAY;
    var NAV_REVEAL_DELAY = BORDER_REVEAL_DELAY + BORDER_DURATION;

    enterBtn.addEventListener("click", function () {
        if (hasStarted) return;
        hasStarted = true;

        brandAnchor.classList.add("transitioning");

        bgMusic.currentTime = 0;
        bgMusic.volume = 0.05;
        bgMusic.play().catch(function () {
            bgMusic.play();
        });

        setTimeout(function () {
            brandAnchor.classList.add("ui-gone");
            enterBtn.disabled = true;
        }, FADE_DURATION);

        setTimeout(function () {
            brandAnchor.classList.add("sliding");
        }, SLIDE_DELAY);

        setTimeout(function () {
            enterScreen.classList.add("hidden");
            videoContainer.classList.add("active");
            brandAnchor.classList.remove("transitioning", "sliding");
            brandAnchor.classList.add("revealed");
        }, BG_REVEAL_DELAY);

        setTimeout(function () {
            contentFrame.classList.add("border-visible");
            contentFrame.setAttribute("aria-hidden", "false");
        }, BORDER_REVEAL_DELAY);

        setTimeout(function () {
            brandAnchor.classList.add("nav-visible");
            navLinks.setAttribute("aria-hidden", "false");
        }, NAV_REVEAL_DELAY);
    });
})();
