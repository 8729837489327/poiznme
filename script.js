(function () {
    "use strict";

    var enterBtn = document.getElementById("enterBtn");
    var enterScreen = document.getElementById("enterScreen");
    var brandAnchor = document.getElementById("brandAnchor");
    var videoContainer = document.getElementById("videoContainer");
    var bgMusic = document.getElementById("bgMusic");

    var hasStarted = false;
    var TRANSITION_DELAY = 3200;
    var FADE_DURATION = 1100;

    enterBtn.addEventListener("click", function () {
        if (hasStarted) return;
        hasStarted = true;

        brandAnchor.classList.add("transitioning");

        bgMusic.currentTime = 0;
        bgMusic.play().catch(function () {
            bgMusic.play();
        });

        setTimeout(function () {
            brandAnchor.classList.add("ui-gone");
            enterBtn.disabled = true;
        }, FADE_DURATION);

        setTimeout(function () {
            enterScreen.classList.add("hidden");
            videoContainer.classList.add("active");
            brandAnchor.classList.remove("transitioning");
            brandAnchor.classList.add("revealed");
        }, TRANSITION_DELAY);
    });
})();
