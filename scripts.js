console.log("Scripts carregados com sucesso!");

const form = document.querySelector(".formulario-contato");
const mask = document.querySelector(".mascara-form");

function clicarnamascara() {
    form.style.left = "-280px"
    mask.style.visibility = "hidden"
    form.style.transform = "translatex(0)"

}


function cliqueinobotao() {
  form.style.left = "50%"
  form.style.transform = "translatex(-50%)"
  mask.style.visibility = "visible"
  /* alert("Obrigado por clicar no botão! Entraremos em contato em breve."); */
  console.log(form);
}
