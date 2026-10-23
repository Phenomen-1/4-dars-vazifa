//1-masala =========================
let daftarNarxi = 5000;
let ruchkaNarxi = 3000;

let daftarSoni = 4;
let ruchkaSoni = 2;

let jamiDaftar = daftarNarxi * daftarSoni;
let jamiRuchka = ruchkaNarxi * ruchkaSoni;
let umumiyJami = jamiDaftar + jamiRuchka;

console.log("Daftarlar narxi: " + jamiDaftar + " so'm");
console.log("Ruchkalar narxi: " + jamiRuchka + " so'm");
console.log("Jami to'lov: " + umumiyJami + " so'm");

// 2-masala ================================

let yosh = 17;

if (yosh >= 18) {
  console.log("Kirish mumkin");
} else {
  console.log("Kirish mumkin emas");
}

// 3-masala ==============================

console.log(Boolean(0));             // false
console.log(Boolean("JavaScript"));  // true
console.log(Boolean(""));            // false
console.log(Boolean(25));            // true
console.log(Boolean(null));          // false
console.log(Boolean(undefined));     // false

// 4-masala ===============================

let ball = 76;
let davomat = 85;

if (ball >= 60 && davomat >= 80) {
  console.log("Imtihondan o'tdi");
} else {
  console.log("Imtihondan o'tmadi");
}

// 5-masala ==============================

let summa = 120000;
let premium = false;

if (summa >= 100000 || premium) {
  console.log("Bepul yetkazib berish");
} else {
  console.log("Yetkazib berish pullik");
}

// 6-masala==========================

let login = "student";
let password = "js12345";

if (login === "student" && password === "js12345") {
  console.log("Tizimga xush kelibsiz");
} else {
  console.log("Login yoki parol xato");
}

// 7-masala= =========================

let narx = 200000;
let kuponBor = true;
let yakuniySumma;

if (kuponBor) {
  yakuniySumma = narx - (narx * 0.15);
} else {
  yakuniySumma = narx;
}

console.log("Yakuniy to'lov summasi: " + yakuniySumma + " so'm");

// 8-masala ==========================

let username = "";
let age = 20;

if (username === "") {
  console.log("Ismingizni kiriting");
} else {
  console.log("Xush kelibsiz");
}

console.log(Boolean(age));

// 9-masala ========================

let number = 14;

if (number % 2 === 0) {
  console.log("Juft son");
} else {
  console.log("Toq son");
}

// 10-masala=======================

let yoshi = 16;
let otaOnaRuxsati = false;
let chipta = true;

if ((yoshi >= 18 || otaOnaRuxsati) && chipta) {
  console.log("Kino zaliga kirish mumkin");
} else {
  console.log("Kirish mumkin emas");
}