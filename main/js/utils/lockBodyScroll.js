export const lockBodyScroll = (toggle) => {
  let position = window.scrollY

  if (toggle) position = window.scrollY
  document.body.style.top = toggle ? `-${position}px` : ""
  document.body.style.height = toggle ? `100vh` : ""
  document.body.style.position = toggle ? "fixed" : ""
  window.scrollTo(0, position)
}
