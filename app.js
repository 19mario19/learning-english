window.scrollTo({
  top: 0,
  left: 0,
  behavior: "auto", // or "smooth"
})

window.addEventListener("DOMContentLoaded", () => {
  const spanToggle = document.querySelector(".toggle-translation")

  const spans = document.querySelectorAll("span")

  spanToggle.addEventListener("click", () => {
    spans.forEach((span) => {
      span.classList.toggle("active")
    })
  })
})
