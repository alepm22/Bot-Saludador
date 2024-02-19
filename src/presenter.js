import Saludar from "./Saludar";
import nombre from "./nombre";
import genero from "./genero";

const nombre_input = document.querySelector("#nombre");
const genero_input = document.querySelector("#genero");
const form = document.querySelector("#Saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreValue = nombre_input.value;
  const generoValue = genero_input.value;
 if(genero == "f")
 {
  div.innerHTML = "<p>Hola Sra. " + Saludar(nombreValue, generoValue) + "</p>";
 }else
 div.innerHTML = "<p>Hola Sr. " + Saludar(nombreValue, generoValue) + "</p>";

});
