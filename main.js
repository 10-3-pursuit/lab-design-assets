

const images = document.querySelectorAll('.contact-container li')

images.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.classList.add("jello-horizontal")
  })

  image.addEventListener("mouseout", () => {
    image.classList.remove("jello-horizontal")
  })
})