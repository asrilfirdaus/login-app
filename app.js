// Ganti URL ini dengan URL Web App Google Apps Script kamu (yang /exec)
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbzqG6judW4hX_GFRYfE9apERVsN-QcWR6URP2Dl5jB8pb8phk63Z-FdcFawTbDylgbc/exec";

// Fungsi dipanggil saat tombol login ditekan
function handleLogin(e) {
  e.preventDefault(); // cegah reload halaman

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  loginPIC(username, password);
}

// Fungsi request ke backend
async function loginPIC(username, password) {
  try {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      body: new URLSearchParams({
        action: "login",
        username: username,
        password: password
      })
    });

    const result = await response.json();

    if (result.success) {
      alert("Login berhasil! Selamat datang, " + result.pic);
      localStorage.setItem("picName", result.pic); // simpan PIC biar bisa dipakai di form absensi
    } else {
      alert("Login gagal: " + result.message);
    }
  } catch (error) {
    console.error("Error login:", error);
    alert("Terjadi error saat login, cek console (F12)!");
  }
}
