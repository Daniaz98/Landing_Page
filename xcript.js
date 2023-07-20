const menu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  navMenu.classList.toggle("active");
});

function Send() {
  let name = document.getElementById("nameid");

  if (name.value !== "") {
    alert(
      "Obrigado" +
        " " +
        name.value +
        " " +
        "sua mensagem foi enviada. Agradecemos o contato."
    );
  }
}
