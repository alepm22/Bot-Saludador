import Saludar from "./Saludar";
import nombre from "./nombre";
import genero from "./genero";
import edad from "./edad";

const nombre_input = document.querySelector("#nombre");
const genero_input = document.querySelector("#genero");
const edad_input = document.querySelector("#edad");
const form = document.querySelector("#Saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreValue = nombre_input.value;
  const generoValue = genero_input.value;
  const edadValue = parseInt(edad_input.value); 

  // Documento que nos proporciono
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();

  let saludoHora;
  if (horaActual >= 6 && horaActual < 12) {
    saludoHora = "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
    saludoHora = "Buenas tardes";
  } else {
    saludoHora = "Buenas noches";
  }

  let mensajeSaludo = saludoHora + ", ";

  if (generoValue === "f" && edadValue >= 30) {
    mensajeSaludo += "Sra. " + Saludar(nombreValue, generoValue);
  } else if (generoValue === "f" && edadValue < 30) {
    mensajeSaludo += "amiga " + Saludar(nombreValue, generoValue);
  } else if (generoValue === "m" && edadValue >= 30) {
    mensajeSaludo += "Sr. " + Saludar(nombreValue, generoValue);
  } else {
    mensajeSaludo += "amigo " + Saludar(nombreValue, generoValue);
  }

  div.innerHTML = "<p>" + mensajeSaludo + "</p>";
});
