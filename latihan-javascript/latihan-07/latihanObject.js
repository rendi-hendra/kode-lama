// 1. Object Literal

// let DaftarNama = {
//     nama: "rendi",
//     umur: 17
// }

// 2. Function Declaration

// function DaftarNama(nama, umur) {
//     let daftarNama = {}
//     daftarNama.nama = nama;
//     daftarNama.umur = umur;
//     return daftarNama
// }

// let rendi = DaftarNama("Rendi", 17);
// let hendra = DaftarNama("Hendra", 15);
// let babe = DaftarNama("Babe", 10);

// 3. Constructor Function

// function DaftarNama(nama, umur) {
//     this.nama = nama;
//     this.umur = umur;
// }

// let rendi = new DaftarNama("Rendi", 17);
// let hendra = new DaftarNama("Hendra", 15);
// let babe = new DaftarNama("Babe", 10);

// 4. Prototype

// function DaftarNama(nama, umur) {
//     this.nama = nama;
//     this.umur = umur;
// }

// DaftarNama.prototype.tambahUmur = function (tambah) {
//     this.umur += tambah;
//     return `${this.nama} Bertambah Umur`
// }

// let rendi = new DaftarNama("Rendi", 17)

// 5. Versi Class

// class DaftarNama {
//     constructor(nama, umur) {
//         this.nama = nama;
//         this.umur = umur;
//     }

//     tambahUmur(tambah) {
//         this.umur += tambah;
//         return `${this.nama} Bertambah Umur`;
//     }
// }

// let rendi = new DaftarNama("Rendi", 17)

// Latihan Object Angkot

class Angkot {
  constructor(supir, trayek, penumpang, kas) {
    (this.supir = supir),
      (this.trayek = trayek),
      (this.penumpang = penumpang),
      (this.kas = kas);
  }

  penumpangNaik(namaPenumpang) {
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === undefined) {
        this.penumpang[i] = namaPenumpang;
        return this.penumpang;
      }
    }

    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] === namaPenumpang) {
        return "Penumpang Sudah Naik";
      }
    }

    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  }

  penumpangTurun(namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      alert("Penumpang Kosong");
      return false;
    }
    for (let i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  }

  selesai() {
    this.penumpang = [];
    return this.penumpang;
  }
}

let Angkot1 = new Angkot("Rendi", ["Surabaya", "Madiun"], [], 0);
let Angkot2 = new Angkot("Babe", ["Surabaya", "Jombang"], [], 0);

// Coba
class Coba {
  constructor(nama, umur) {
    (this.nama = nama), (this.umur = umur);
  }

  get data() {
    console.log(`Nama: ${this.nama}\nUmur: ${this.umur} Tahun`);
  }

  get roll() {
    console.log(
      (this.nama == "Rendi" && this.umur == 18) ||
        (this.nama == "rendi" && this.umur == 18)
        ? "Admin"
        : "User"
    );
  }
}

const nama1 = new Coba("Rendi", 18).data;
const nama2 = new Coba("Rendi", 18);

// console.log(nama1);
