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
  const edadValue = parseInt(edad_input.value); // Aseguramos que la edad sea un número

  if (generoValue === "f" && edadValue >= 30) {
    div.innerHTML = "<p>Hola Sra. " + Saludar(nombreValue, generoValue) + "</p>";
  } else if (generoValue === "f" && edadValue < 30) {
    div.innerHTML = "<p>Hola amiga " + Saludar(nombreValue, generoValue) + "</p>";
  } else if (generoValue === "m" && edadValue >= 30) {
    div.innerHTML = "<p>Hola Sr. " + Saludar(nombreValue, generoValue) + "</p>";
  } else {
    div.innerHTML = "<p>Hola amigo " + Saludar(nombreValue, generoValue) + "</p>";
  }
});
