// 1. Latihan Closure

// function init() {
//     let nama = "Hendra";
//     let nama1 = "rendi";
//     function tampilNama() {
//         console.log(nama);
//         console.log(nama1);
//     }
//     return tampilNama;
// }

// let panggilNama = init();
// panggilNama()






// 2. Latihan Closure

// function init() {
//     return function (nama) {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama("Rendi")
// panggilNama("Hendra")

// let init = () => {
//     return nama => {
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama("Rendi")
// panggilNama("Hendra")








// 3. Latihan Closure

// let salam = waktu => {
//     return nama => {
//         console.log(`Selamat ${waktu} ${nama}`)
//     }
// }

// let malam = salam("Malam")
// let siang = salam("Siang")
// malam("Rendi")
// siang("Hendra")








// 4. Private Method/Private Variabel

// let add = (() => {
//     let count = 0;
//     return () => {
//         return ++count;
//     }
// })();

// console.log(add())

