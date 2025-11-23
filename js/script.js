const contador = document.getElementById("contadorVisitas");
const reset = document.getElementById("btnReestablecer");
function sumVisitas() {
  let visitas = Number(localStorage.getItem("Visitas") || 0);
  const nuevaVisita = visitas + 1;
  localStorage.setItem("Visitas", nuevaVisita);
  contador.innerText = nuevaVisita;
}
sumVisitas();

reset.addEventListener("click", () => {
  localStorage.removeItem("Visitas");
  contador.innerText = 0;
  console.log(localStorage);
});
