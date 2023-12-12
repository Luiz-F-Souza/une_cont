import { lockBodyScroll } from "../utils/lockBodyScroll.js"

export const sidebarFunctions = () => {
  const sidebarContainer = document.getElementById("side-bar-container")

  const toggleButton = document.getElementById("toggle-nav-bar-button")

  const toggleSidebar = () => {
    const iconClassList = toggleButton.children[0].classList

    const sidebarClassList = sidebarContainer.classList

    const willOpen = iconClassList.contains("bi-list")

    if (willOpen) {
      iconClassList.add("bi-x-square")
      iconClassList.remove("bi-list")
    } else {
      iconClassList.remove("bi-x-square")
      iconClassList.add("bi-list")
    }

    sidebarClassList.toggle('w-80')
    sidebarClassList.toggle('w-full')
    sidebarClassList.toggle("-left-full")
    sidebarClassList.toggle('left-0')

    // lockBodyScroll(willOpen)
  }

  toggleButton.addEventListener("click", toggleSidebar)
}
