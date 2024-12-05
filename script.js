/*// script.js
document.getElementById("submit-button").addEventListener("click", function (function(event) {
      event.preventDefault(); 
  const password = document.getElementById("password").value;
  //Passwörter und Zielseiten
  const routes={
    "1234": "content1",
    "1235": "content2",
    "1236": "content3",
    "1237": "content4",
  };
        // Überprüfen, ob das Passwort existiert
      if (routes[password]) {
        window.location.href = routes[password]; // Weiterleitung zur entsprechenden Seite
      } else {
        alert("Falscher Schlüssel!"); // Fehlernachricht
      }  
  
 /* const correctPassword = "1843"; // Ersetze durch dein Passwort
  const enteredPassword = document.getElementById("password-input").value;

  if (enteredPassword === correctPassword) {
    document.getElementById("password-screen").style.display = "none"; // Login ausblenden
    document.getElementById("content").style.display = "block"; // Inhalt anzeigen
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.style.display = "block"; // Fehlermeldung anzeigen
    setTimeout(() => {
      errorMessage.style.display = "none"; // Fehlermeldung nach 2 Sekunden ausblenden
    }, 2000);
  }*/
});*/

// Mapping von Passwörtern zu Abschnitten
const passwordMap = {
  "passwort1": "content1",
  "passwort2": "content2",
  "passwort3": "content3"
      "passwort4": "content4"
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
