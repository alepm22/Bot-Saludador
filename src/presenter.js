import Saludar from "./Saludar";
import nombre from "./nombre";
import genero from "./genero";
import edad from "./edad";
import idioma from "./idioma";

const nombre_input = document.querySelector("#nombre");
const genero_input = document.querySelector("#genero");
const edad_input = document.querySelector("#edad");
const idioma_input = document.querySelector("#idioma");
const form = document.querySelector("#Saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombreValue = nombre_input.value;
  const generoValue = genero_input.value;
  const edadValue = parseInt(edad_input.value); 
  const idiomaValue = idioma_input.value;

  let saludoHora;

  // Documento proporcionado
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();

  if (idiomaValue === "espanol") {
    saludoHora = (horaActual >= 6 && horaActual < 12) ? "Buenos días" :
                 (horaActual >= 12 && horaActual < 18) ? "Buenas tardes" :
                 "Buenas noches";
  } else if (idiomaValue === "ingles") {
    saludoHora = (horaActual >= 6 && horaActual < 12) ? "Good Morning" :
                 (horaActual >= 12 && horaActual < 18) ? "Good Afternoon" :
                 "Good Night";
  }

  let mensajeSaludo = `${saludoHora}, `;

  let titulo = (idiomaValue === "espanol") ? (edadValue >= 30 ? (generoValue === "f" ? "Sra." : "Sr.") : (generoValue === "f" ? "amiga" : "amigo")) :
                (idiomaValue === "ingles" ? (edadValue >= 30 ? (generoValue === "f" ? "Mrs." : "Mr.") : "friend") : "");
  
  mensajeSaludo += `${titulo} ${Saludar(nombreValue, generoValue)}`;
  
  div.innerHTML = `<p>${mensajeSaludo}</p>`;
  
});
