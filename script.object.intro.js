// Object

var Purwo = {
  nama: "Kang Purwo",
  umur: 42,
  pekerjaan: "Mahasiswa",
  ips: [3.9, 3.5, 3.7],
  alamat: {
    jalan: "Jalan ABC, Gang DEF, No. 123",
    kota: "Jakarta",
    propinsi: "DKI Jakarta",
    kodepos: 222333
  },
  bahasa: {
    ibu: "Indonesia",
    kedua: "Inggris",
    ketiga: "Arab",
    pemograman: {
      frontend: "HTML",
      backend: "Belum punya",
      script: "Java Script"
    }
  }
};

console.log("Hallo " + Purwo.nama);

// let tampilPesan = (nama) => {
//   alert("halo" + nama);
// };

// tampilPesan("Kang Purwo");

// Function Expression

// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("Kang Purwo"));

// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("Kang  Purwo"));

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Kang Purwo", "Malam"));

// implisit return
// const tampilNama = (nama) => `Halo, ${nama}`;

// console.log(tampilNama("Kang  Purwo"));

// const tampilNama = () => `Hello World`;

// console.log(tampilNama());

// let mahasiswa = ["Sandika Galih", "Doddy Ferdiansyah", "Erik"];

// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => nama.length);

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map((nama) => ({
//   nama,
//   jmlHuruf: nama.length
// }));

// console.table(jumlahHuruf);

// Konsep this pada Arrow Function

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sandhika = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = function () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sandhika = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: "Sandhika",
//   umur: 33,
//   sayHello: () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     // console.log(this);
//   }
// };

// ===========
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = function () {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 100000);
// };

// const sandhika = new Mahasiswa();
