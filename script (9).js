const alternarTema = document.querySelector("#alternarTema");
const statusTema = document.querySelector("#statusTema");

alternarTema.addEventListener("click", () => {
  const claro = document.body.classList.toggle("tema-claro");
  alternarTema.setAttribute("aria-pressed", String(claro));
  alternarTema.textContent = claro ? "Ativar tema escuro" : "Ativar tema claro";
  statusTema.textContent = claro ? "Tema claro ativo." : "Tema escuro ativo.";
});