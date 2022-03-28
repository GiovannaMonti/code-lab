import barba from "@barba/core"
import gsap from "gsap"

/* let mouseX = 0
let mouseY = 0
document.addEventListener("click", (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  console.log(mouseX, mouseY)
})
 */
barba.init({
  transitions: [
    {
      name: "opacity",
      enter(data) {
        // create your stunning enter animation here
        return gsap.from(data.next.container, {
          autoAlpha: 0,
          duration: 0.3,
        })
      },
      leave(data) {
        // create your stunning leave animation here
        return gsap.to(data.current.container, {
          autoAlpha: 0,
          duration: 0.3,
          display: "none",
        })
      },
    },
  ],
})

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
