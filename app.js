// window.scrollTo({
//   top: document.body.scrollHeight,
// })

window.addEventListener("DOMContentLoaded", () => {
  const spanToggle = document.querySelector(".toggle-translation")

  const spans = document.querySelectorAll("span")

  spanToggle.addEventListener("click", () => {
    spans.forEach((span) => {
      span.classList.toggle("active")
    })
  })
})
