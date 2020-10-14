// 2.1 EXECUTION CONTEXT, HOSTING & SCOPE

// var nama = "Sandhika";
// console.log(nama);

// creation phase pada Global Context
// nama var = undefined
// nama function = fn()
// hosting
// window = global object
// this = window

// execution phase

// var nama = "Kang Purwo";
// var umur = 42;

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// console.log(sayHello());

// Closure

// function init() {
//   let nama = "Kang Purwo";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }

// init();

const tampilNama = () => "Hello World!";

tampilNama();
