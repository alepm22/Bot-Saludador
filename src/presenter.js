import Saludar from "./Saludar";

//const nombre_input = document.querySelector("#nombre");
const form = document.querySelector("#Saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p> Hola" +Saludar + "</p>";
});
