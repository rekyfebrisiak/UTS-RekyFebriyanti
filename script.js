const judul = document.getElementById("judul");
const menuItems = document.querySelectorAll(".menu-item");

// kartu yang bisa berubah warna
const kartu = {
  statistik: document.getElementById("statistik"),
  progres:   document.getElementById("progres"),
  aktifitas: document.getElementById("aktifitas"),
  lampiran:  document.getElementById("lampiran"),
};

// hapus semua warna (pink tua & merah muda)
function resetWarna() {
  Object.values(kartu).forEach((el) => el.classList.remove("pink", "muda"));
}

// aksi untuk tiap menu
const aksi = {
  home() {
    judul.textContent = "Selamat Datang";
  },
  mahasiswa() {
    judul.textContent = "Reky Febriyanti";
  },
  kelas() {
    judul.textContent = "Reky Febriyanti Kelas SI-3C";
  },
  aktifitas() {
    // Aktifitas Selanjutnya + Progres Kelas: PINK TUA
    kartu.aktifitas.classList.add("pink");
    kartu.progres.classList.add("pink");
  },
  statistik() {
    // Statistik: MERAH MUDA
    kartu.statistik.classList.add("muda");
  },
  dokumen() {
    // Lampiran: MERAH MUDA
    kartu.lampiran.classList.add("muda");
  },
};

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const menu = item.dataset.menu;
    if (!aksi[menu]) return; // settings & sign out: tidak ada aksi

    // tandai menu aktif
    menuItems.forEach((m) => m.classList.remove("active"));
    item.classList.add("active");

    // bersihkan warna sebelumnya, lalu jalankan aksi menu ini
    resetWarna();
    aksi[menu]();
  });
});