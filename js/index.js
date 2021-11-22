const menu = document.getElementById("open-menu")

menu.addEventListener("click", () => {
  if (menu.classList.contains("closed")) {
    menu.innerHTML = "CLOSE MENU"
    menu.classList.remove("closed")
    return
  } else {
    menu.innerHTML = "OPEN MENU"
    menu.classList.add("closed")
  }
})

const closeButton = document.getElementById("sidebar-close")
closeButton.addEventListener("click", () => {
  menu.innerHTML = "OPEN MENU"
  menu.classList.add("closed")
})
