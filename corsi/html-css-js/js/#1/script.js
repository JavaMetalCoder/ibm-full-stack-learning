const text = document.getElementById("text");
const button = document.getElementById("button");

function showInput() {
  if (text.value.trim() !== "") {
    alert("Input = " + text.value);
  } else {
    alert("Errore: campo vuoto");
  }
  text.value = ""; // svuota il campo
}

button.addEventListener("click", showInput);
