const BigImage = document.querySelector("#big-image")
const img1 = document.querySelector("#img-1")
const img2 = document.querySelector("#img-2")
const img3 = document.querySelector("#img-3")
const img4 = document.querySelector("#img-4")
const img5 = document.querySelector("#img-5")

img1.addEventListener("click", () => {
BigImage.src = img1.src
})

img2.addEventListener("click", () => {
BigImage.src = img2.src
})

img3.addEventListener("click", () => {
BigImage.src = img3.src
})

img4.addEventListener("click", () => {
BigImage.src = img4.src
})

img5.addEventListener("click", () => {
BigImage.src = img5.src
})
