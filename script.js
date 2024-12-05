// script.js
document.getElementById("submit-button").addEventListener("click", function (function(event) {
      event.preventDefault(); 
  const password = document.getElementById("password").value;
  //Passwörter und Zielseiten
  const routes={
    "1234": "seite1.html",
    "1235": "seite2.html",
    "1236": "seite3.html",
    "1237": "seite4.html",
  };
        // Überprüfen, ob das Passwort existiert
      if (routes[password]) {
        window.location.href = routes[password]; // Weiterleitung zur entsprechenden Seite
      } else {
        alert("Falsches Passwort!"); // Fehlernachricht
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
});
