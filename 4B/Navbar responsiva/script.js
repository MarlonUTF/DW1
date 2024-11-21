
// Capturar os elementos que terão interação em tela

const menuIcon = document.querySelector("#menuIcon")
const closeIcon = document.querySelector("#closeIcon")
const sidebar = document.querySelector("#sidebar")

// Definir qual interação (evento) o elemento terá
menuIcon.addEventListener("click", showSidebar)
closeIcon.addEventListener("click", hideSidebar)


// Definir o que será feito quando a interação (evento) ocorrer

function showSidebar(){
    // sidebar.style.display = "flex"    
    sidebar.style.right = "0"
}

function hideSidebar(){
    // sidebar.style.display = "none"    
    sidebar.style.right = "-100%"
}