function verMenu() {
    var menu = document.getElementById("menuNav");
    // Remove a classe desactive se estiver presente
    if (menu.classList.contains("desactive")) {
        menu.classList.remove("desactive");
    }
    // Adiciona ou remove a classe active para abrir/fechar o menu
    menu.classList.toggle("active");
}

function sairNav() {
    var menu = document.getElementById("menuNav");
    // Remove a classe active para esconder o menu
    menu.classList.remove("active");
    // Adiciona a classe desactive para garantir que ele está oculto
    menu.classList.add("desactive");
}
