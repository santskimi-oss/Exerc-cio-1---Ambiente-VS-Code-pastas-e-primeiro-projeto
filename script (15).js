const botao = document.querySelector("#alternarDensidade");
const dashboard = document.querySelector("#dashboard");
const statusLayout = document.querySelector("#statusLayout");

botao.addEventListener("click", () => {
  const compacto = dashboard.classList.toggle("compacto"));
  botao.setAttribute("aria-pressed", String(compacto));
  botao.textContent = compacto ? "Desativar modo compacto" : "Ativar modo compacto";
  statusLayout.textContent = compacto ? "Densidade compacta." : "Densidade confortável.";
});
