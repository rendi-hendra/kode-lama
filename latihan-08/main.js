const musicUrl = "./audio/Romance sengen.mp3";
const musicAudio = new Audio(musicUrl);
const iconMusic = document.getElementById("iconMusic");
const buttonMusic = document.querySelector("#buttonMusic");
const progressEl = document.querySelector('input[type="range"]');
const domDurasi = document.getElementById("domDurasi");
let mouseDownOnSlider = false;

musicAudio.addEventListener("loadeddata", () => {
  progressEl.value = 0;
});
musicAudio.addEventListener("timeupdate", () => {
  if (!mouseDownOnSlider) {
    progressEl.value = (musicAudio.currentTime / musicAudio.duration) * 100;
  }
});

musicAudio.addEventListener("ended", () => {
  iconMusic.classList.remove("bi-pause-fill");
  iconMusic.classList.add("bi-play-fill");
});

buttonMusic.addEventListener("click", () => {
  musicAudio.paused ? musicAudio.play() : musicAudio.pause();
  iconMusic.classList.toggle("bi-play-fill");
  iconMusic.classList.toggle("bi-pause-fill");

  // Durasi
  if (iconMusic.classList[4] == "bi-pause-fill") {
    let menit = setInterval(() => {
      const mDetik = musicAudio.currentTime;
      const mMenit = Math.floor(mDetik / 60);
      domDurasi.textContent =
        mDetik - mMenit * 60 == 60
          ? 0
          : `${mMenit}:${
              9 >= Math.floor(mDetik - mMenit * 60) ? "0" : ""
            }${Math.floor(mDetik - mMenit * 60)}`;
      if (iconMusic.classList[4] == "bi-play-fill") {
        clearInterval(menit);
      }
    }, 100);
  }
});

progressEl.addEventListener("change", () => {
  const pct = progressEl.value / 100;
  musicAudio.currentTime = (musicAudio.duration || 0) * pct;
  const mDetik = musicAudio.currentTime;
  const mMenit = Math.floor(mDetik / 60);
  domDurasi.textContent =
    mDetik - mMenit * 60 == 60
      ? 0
      : `${mMenit}:${
          9 >= Math.floor(mDetik - mMenit * 60) ? "0" : ""
        }${Math.floor(mDetik - mMenit * 60)}`;
});

progressEl.addEventListener("mousedown", () => {
  mouseDownOnSlider = true;
});
progressEl.addEventListener("mouseup", () => {
  mouseDownOnSlider = false;
});
