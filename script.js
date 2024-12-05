

// Mapping von Passwörtern zu Abschnitten
const passwordMap = {
  "passwort1": "content1",
  "passwort2": "content2",
  "passwort3": "content3",
      "passwort4": "content4",
};

// Passwort überprüfen
function checkPassword() {
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (passwordMap[password]) {
    // Zeige den passenden Abschnitt
    document.getElementById("login-form").style.display = "none";
    document.getElementById(passwordMap[password]).classList.add("visible");
  } else {
    // Zeige eine Fehlermeldung
    errorMessage.style.display = "block";
  }
}

// Zurück zum Passwort-Formular
function goBack() {
  // Verstecke alle Abschnitte
  document.querySelectorAll(".section").forEach(section => {
    section.classList.remove("visible");
  });
  // Zeige das Formular wieder
  document.getElementById("login-form").style.display = "block";
}
