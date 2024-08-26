// JavaScript untuk form pengaduan
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const nama = document.querySelector("#nama").value;
  const pengaduan = document.querySelector("#pengaduan").value;

  if (nama && pengaduan) {
    alert("Pengaduan Anda telah dikirim. Terima kasih!");
    // Proses pengiriman data bisa ditambahkan di sini
    document.querySelector("form").reset();
  } else {
    alert("Mohon isi semua field.");
  }
});

document
  .getElementById("complaintForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("notification").classList.remove("d-none");
    this.reset();
  });

document
  .getElementById("complaintForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    var form = event.target;
    var formData = new FormData(form);

    // Kirim data form ke Google Sheets menggunakan Fetch API
    fetch(form.action, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("notification").classList.remove("d-none");
          form.reset(); // Reset form setelah pengiriman sukses
        } else {
          alert(
            "Terjadi kesalahan saat mengirim pengaduan. Silakan coba lagi."
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat mengirim pengaduan. Silakan coba lagi.");
      });
  });
