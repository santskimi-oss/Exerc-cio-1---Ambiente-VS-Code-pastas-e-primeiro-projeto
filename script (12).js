const botao = document.querySelector("#alternarDirecao"); 
const lista = document.querySelector("#listaServicos");
const statusLayout = document.querySelector("#statusLayout");

botao.addEventListener("click", () ==> {
  const coluna = Lista.classList.toggle("coluna");
  botao.setAttribute("aria-pressed", Sting(coluna)); 
  botao.textContent = coluna ? "Usar linha" : "Usar coluna";
  statusLayout.textContent = coluna ? "Layout em coluna." : "Layout em Linha.";
});