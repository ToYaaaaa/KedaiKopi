// navbarr
const hamburgerMenu = document.querySelector(".navbar-extra .navbar-menu");
const sidebar = document.querySelector(".navbar-list");
hamburgerMenu.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

const search = document.querySelector(".navbar-extra form .navbar-search");
const searchField = document.querySelector(".navbar-extra input");
search.addEventListener("click", function () {
  searchField.classList.toggle("active");
  //   search.classList.toggle("active");
});

// about(text)
document.addEventListener("DOMContentLoaded", function () {
  const changeButton = document.querySelector(".button-about");
  const targetElement = document.querySelector(".paragraf");

  // Daftar teks yang ingin Anda ganti secara berurutan
  const newTexts = [
    "Selamat datang di KedaiKopi! Kami adalah tempat yang sepenuhnya didedikasikan untuk menyajikan pengalaman kopi terbaik bagi pecinta kopi sejati.Dengan lebih dari satu dekade pengalaman dalam dunia kopi.",
    "Di KedaiKopi, komitmen kami adalah memberikan kualitas kopi yang tak tertandingi. Kami percaya bahwa setiap cangkir kopi harus menjadi pengalaman yang memuaskan.",
    "Filosofi kami di KedaiKopi adalah menciptakan tempat yang lebih dari sekadar kedai kopi biasa. Kami ingin menciptakan ruang yang mengundang orang untuk datang bersama, berbagi cerita.",
  ];

  let currentIndex = 0;

  // Fungsi untuk mengubah teks atau elemen target
  function changeText() {
    targetElement.textContent = newTexts[currentIndex];
    currentIndex = (currentIndex + 1) % newTexts.length;
  }

  // Tambahkan event listener untuk tombol
  changeButton.addEventListener("click", changeText);
});

// about(heading)
document.addEventListener("DOMContentLoaded", function () {
  const changeButton = document.querySelector(".button-about");
  const targetElement = document.querySelector(".heading");

  // Daftar teks yang ingin Anda ganti secara berurutan
  const newTexts = [">Tentang kami", ">Komitmen Kami", ">Filosofi Kami"];

  let currentIndex = 0;

  // Fungsi untuk mengubah teks atau elemen target
  function changeText() {
    targetElement.textContent = newTexts[currentIndex];
    currentIndex = (currentIndex + 1) % newTexts.length;
  }

  // Tambahkan event listener untuk tombol
  changeButton.addEventListener("click", changeText);
});
