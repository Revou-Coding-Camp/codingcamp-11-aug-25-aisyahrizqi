document.addEventListener("DOMContentLoaded", function () {
  const welcomeText = document.getElementById("welcome-text");
  let namePrompt = prompt("Masukkan nama kamu:");
  if (namePrompt && namePrompt.trim() !== "") {
    welcomeText.textContent = `Hi, ${namePrompt.trim()}! Selamat Datang di Website PT. Timah Tbk!`;
  } else {
    welcomeText.textContent = "Hi, Selamat Datang di Website PT. Timah Tbk!";
  }

  document.getElementById("current-time").textContent =
    new Date().toLocaleString();

  document
    .getElementById("message-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const birthdate = document.getElementById("birthdate").value;
      const gender = document.querySelector(
        'input[name="gender"]:checked'
      ).value;
      const message = document.getElementById("message").value;
      document.getElementById("res-name").textContent = name;
      document.getElementById("res-birthdate").textContent = birthdate;
      document.getElementById("res-gender").textContent = gender;
      document.getElementById("res-message").textContent = message;
    });
});
