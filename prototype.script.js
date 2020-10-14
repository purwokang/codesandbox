// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `Halo ${this.nama}, selamat makan!`;
// };

// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Halo ${this.nama}, selamat bermain`;
// };

// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   // return `Halo ${this.nama}, selamat beristirahat!`;
//   return `OK, tenaga ${this.nama} sudah bertambah ${jam * 2}, total menjadi ${
//     this.energi
//   }.`;
// };

// let sandhika = new Mahasiswa("Sandhika", 10);

// versi Class
// class Mahasiswa {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   }
//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
//   }
//   tidur(jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
//   }
// }

// let sandhika = new Mahasiswa("Sandhika", 10);
// let doddy = new Mahasiswa("Doddy Gantheng", 30);

// let angka = [3, 1, 2, 5, 6, 9];
