function showTab(tabId) {

    // Sembunyikan semua content
    const contents = document.querySelectorAll(".content");

    contents.forEach(content => {
        content.classList.remove("active");
    });

    // Tampilkan content yang dipilih
    document
        .getElementById(tabId)
        .classList.add("active");

    // Hapus active dari semua tombol
    const buttons = document.querySelectorAll(".tab-btn");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    // Tambahkan active ke tombol yang diklik
    event.target.classList.add("active");

    // Scroll ke atas konten
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Saat halaman pertama dibuka
document.addEventListener("DOMContentLoaded", () => {

    document
        .getElementById("pendahuluan")
        .classList.add("active");

});

