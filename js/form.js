const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbymP94fhM8wp0KwqvdTxR0Ong5Ap6N8zPsU6-nU8LKRCJDa7AYQG4z_cjaJtV5wzvrb/exec";

// Inicializar intl-tel-input
const input = document.querySelector("#tel");
const iti = window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: (callback) => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => callback(data.country_code))
      .catch(() => callback("MX")); // Si falla, por defecto México
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Evento de envío del formulario
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Evitar el envío predeterminado

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const nacionalidad = document.getElementById("nacionalidad").value;
    const sexo = document.getElementById("sexo").value;
    const lugarSalida = document.getElementById("lugarSalida").value;
    const lugarDestino = document.getElementById("lugarDestino").value;
    const correo = document.getElementById("correo").value;
    const telefono = iti.getNumber(); // Obtiene el número con código de país

    try {
      const response = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Desactiva la verificación de CORS
        body: JSON.stringify({
          nombre,
          edad,
          nacionalidad,
          sexo,
          lugarSalida,
          lugarDestino,
          correo,
          telefono, // Se envía el teléfono con código de país
        }),
      });

      alert("Dato enviado correctamente.");
    } catch (error) {
      console.error("Error al enviar el dato:", error);
      alert("Ocurrió un error al enviar el dato.");
    }
  });
