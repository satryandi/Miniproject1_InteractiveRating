const ratingContainer = document.querySelector(".rating_container")
const thanksContainer = document.querySelector(".thanks_container")
const submitButton = document.getElementById("submit_rating")
const submitRateAgain = document.getElementById("submit_rate_again")
const ratings = document.querySelectorAll(".rate_list span")
const actualRating = document.getElementById("rate")

ratings.forEach((ratings) => {
    ratings.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");
        if (active) {
            active.classList.remove("checked");
        }
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
        console.log(rate);
    });
});

submitButton.addEventListener("click", () => {
    ratingContainer.style.display = "none"
    thanksContainer.classList.remove("hidden")

    ratings.forEach((rating) => {
        rating.addEventListener("click", () => {
            actualRating.innerHTML = rating.innerHTML
        })
    })
})

submitRateAgain.addEventListener("click", () => {
    ratingContainer.style.display = "block"
    thanksContainer.classList.add("hidden")
})