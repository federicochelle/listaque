function agregarTarea() {
  const input = document.getElementById("tareaInput");
  const textoTarea = input.value.trim();

  if (textoTarea === "") {
    alert("Escribe algo.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = textoTarea;

  // Marcar como completada al hacer clic
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Eliminar al hacer doble clic
  li.addEventListener("dblclick", () => {
    li.remove();
  });

  document.getElementById("listaTareas").appendChild(li);
  input.value = ""; // limpiar input
}