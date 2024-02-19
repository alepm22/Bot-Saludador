import Saludar from "./Saludar";
import nombre from "./nombre";

const nombre_input = document.querySelector("#nombre");
const form = document.querySelector("#Saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreValue = nombre_input.value;

  div.innerHTML = "<p>Hola " + Saludar(nombreValue) + "</p>";
});
