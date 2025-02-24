let video = Array.from(document.querySelectorAll("[data-duration]"));

let jsLanjut = video
  .filter((vidio) => vidio.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, detik) => total + detik);

console.log(jsLanjut);
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

const pd = document.querySelector(".total-durasi");
pd.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jm = video.filter((vidio) =>
  vidio.textContent.includes("JAVASCRIPT LANJUTAN")
).length;
const pjm = document.querySelector(".jumlah-video");
pjm.textContent = `${jm} Video`;

console.log(jm);
