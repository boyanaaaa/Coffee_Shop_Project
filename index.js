const heart = document.getElementById('heartIcon');

heart.addEventListener("click", () => {
    heart.classList.remove("bx bx-heart");
    heart.classList.add("bx bxs-heart");
})