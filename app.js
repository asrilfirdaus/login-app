const backendURL = "https://script.google.com/macros/s/AKfycbzqG6judW4hX_GFRYfE9apERVsN-QcWR6URP2Dl5jB8pb8phk63Z-FdcFawTbDylgbc/exec"; 
// contoh: "https://script.google.com/macros/s/AKfycbzG6judW4Xh.../exec"

document.getElementById("loginForm").onsubmit = async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch(backendURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "login",
        username,
        password
      })
    });

    const data = await res.json();
    if (data.success) {
      alert("Login berhasil!");
      // redirect ke halaman absensi
      window.location.href = "absensi.html";
    } else {
      alert("Login gagal: " + data.message);
    }
  } catch (err) {
    console.error("Error login:", err);
    alert("Terjadi error: " + err);
  }
};
