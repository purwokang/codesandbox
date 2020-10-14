// Membuat Object pada Javascript

// 1. Object Literal
var mhs1 = {
  nama: "Kang Purwo",
  nrp: "01235423523",
  email: "purwo.com@purwo.com",
  jurusan: "Teknik Informatika"
};

var mhs2 = {
  nama: "Mas Wid",
  nrp: "01235423524",
  email: "maswid@purwo.com",
  jurusan: "Teknik Industri"
};

// 2. Membuat Object dengan Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa(
  "Novariza",
  "2321414231",
  "nova@riza.com",
  "Teknik Elektro"
);

// 3. Membuat Object dengan Constructor
// Constructor adalah Function yang Khusus untuk Membuat Object
function Mahasiswa(nama, nrp, email, jurusan) {
  // var this = {}; // seolah-oleh bikin ini, tapi otomatis dibuatkan oleh Javascript
  console.log(this);
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
  // console.log(this);
  // return this; // seolah-oleh bikin ini, tapi otomatis dibuatkan oleh Javascript
}

var mhs4 = new Mahasiswa(
  "Erik",
  "3432431444",
  "erik@gmail.com",
  "Teknik Elektrolagi"
);

var mhs5 = new Mahasiswa(
  "Ganteng",
  "3432431555",
  "ganteng@gmail.com",
  "Teknik Pergantengan"
);

var mhs6 = new Mahasiswa(
  "Tampan",
  "3432431566",
  "tampan@gmail.com",
  "Teknik Pertampanan"
);
