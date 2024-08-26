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

    // Ambil data dari form
    var nama = document.getElementById("nama").value;
    var pengaduan = document.getElementById("pengaduan").value;

    // Kirim data ke Google Sheets menggunakan Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbzteF1YcCXwSLR6TqE-eiaF_aNZKl71iRnfACRyYnDS6MFQmW6j5m118dBKk_r870s/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama: nama, pengaduan: pengaduan }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        // Tampilkan notifikasi sukses
        document.getElementById("notification").classList.remove("d-none");
        document.getElementById("complaintForm").reset(); // Reset form setelah pengiriman
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
