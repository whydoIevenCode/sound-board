const sounds = ["nigga", "wtf"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.textContent = sound;
  btn.addEventListener("click", () => {
    stop();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
function stop() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
