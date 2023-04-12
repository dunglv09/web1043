var videoPlayer = document.getElementById("videoPlayer");
var playPauseBtn = document.getElementById("playPauseBtn");
var stopBtn = document.getElementById("stopBtn");

var volUpBtn = document.getElementById("volUpBtn");
var volDownBtn = document.getElementById("volDownBtn");

playPauseBtn.addEventListener("click", function() {
if (videoPlayer.paused || videoPlayer.ended) {
    videoPlayer.play();
    playPauseBtn.innerHTML = "Pause";
} else {
    videoPlayer.pause();
    playPauseBtn.innerHTML = "Play";
}
});

stopBtn.addEventListener("click", function() {
videoPlayer.pause();
videoPlayer.currentTime = 0;
playPauseBtn.innerHTML = "Play";
});

loopBtn.addEventListener("click", function() {
if (videoPlayer.loop) {
    videoPlayer.loop = false;
    loopBtn.classList.remove("active");
} else {
    videoPlayer.loop = true;
    loopBtn.classList.add("active");
}
});



volUpBtn.addEventListener("click", function() {
if (videoPlayer.volume < 1) {
    videoPlayer.volume += 0.1;
}
});

volDownBtn.addEventListener("click", function() {
if (videoPlayer.volume > 0) {
    videoPlayer.volume -= 0.1;
}
});