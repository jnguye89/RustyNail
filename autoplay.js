(function () {
  var audio = document.createElement("audio");
document.body.appendChild(audio);
audio.src = "./RustyNail.mp3";

document.body.addEventListener("click", function () {
    audio.play();
});
})();
