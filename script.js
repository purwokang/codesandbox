// Function Declaration

// function tampilPesan(nama) {
//   alert("halo " + nama);
// }

// tampilPesan("Kang Purwo");

// ============================

// Function Expression

// let tampilPesan = function (nama) {
//   alert("halo " + nama);
// };
// tampilPesan("Kang Purwo");

// ===============

// Arrow Function
// let tampilPesan = (nama) => {
//   alert("halo " + nama);
// };
// tampilPesan("Kang Purwo");

// const tampilPesan = function (nama) {
//   return `Halo, ${nama}`;
// };
// console.log(tampilPesan("Kang Purwo"));

// const tampilPesan = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(tampilPesan("Kang Purwo"));

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Erik", "Malam"));

// implisit return
// Qrrow Function dengan satu parameter:
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log(tampilNama("Kang Purwo"));

// tanpa parameter:
// const tampilNama = () => "Hello, World!";
// console.log(tampilNama());

// let mahasiswa = ["Sandhika Galih", "Doddy Ferdiansyah", "Erik"];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);
// kita unah menjadi arrow function
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
// console.log(jumlahHuruf);

// mengembalikan output ke object
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
//     return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//   };
// };

// const sandhika = new Mahasiswa();

// Arrow Function
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = () => {
//     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sandhika = new Mahasiswa();

// Object Literal
// const mhs1 = {
//   nama: "Sandhka",
//   umur: 33,
//   sayHello: () => {
//     // console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} taun.`);
//     console.log(this);
//   }
// };

// Constructor Function
// const Mahasiswa = function () {
//   this.nama = "Sandhika";
//   this.umur = 33;
//   this.sayHello = function () {
//     return `Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`;
//   };
//   setInterval(() => {
//     console.log(this.umur++);
//   }, 10000);
// };

// const sandhika = new Mahasiswa();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";
  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
