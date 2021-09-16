const sounds = [
  "music1",
  "music2",
  "music3",
  "music4",
  "music5",
  "music6",
  "music7",
  "music8",
  "music9",
  "music10",
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
