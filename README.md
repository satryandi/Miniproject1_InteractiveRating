# Frontend Mentor - Interactive rating component solution

https://www.frontendmentor.io/solutions/interactive-rating-component-using-css-flexbox-and-javascript-i0t2037Kt1

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

- Desktop
Desktop Rating : (design/Results/Screenshot_Desktop_Rating.png)
Dekstop Thanks : (design/Results/Screenshot_Desktop_Thanks.png)

- Mobile
Mobile Rating : (design/Results/Screenshot_Mobile_Rating.png)
Mobile Thanks : (design/Results/Screenshot_Mobile_Thanks.png)

### Links

- Solution URL: https://github.com/satryandi/FrontentMentor_InteractiveRatingComponent
- Live Site URL: https://satryandi-miniproject1.netlify.app/

## My process

### Built with

- Mobile-first workflow
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

can hide and unhide elements with CSS and JavaScript

```html
<!-- Rating state start -->
      <div class="rating_container">
        <div class="star_icon">
          <img src="images/icon-star.svg" alt="star icon">
        </div>
        <h2 class="title">How did we do</h2>
        <p class="desc">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our
          offering!
        </p>
        <div class="rate_list">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <button class="submit_btn" id="submit_rating">Submit</button>
      </div>
      <!-- Rating state end -->

      <!-- Thanks state start -->
      <div class="thanks_container hidden">
        <img src="./images/illustration-thank-you.svg" alt="thank you" />
        <div class="rate_selected">
          <p>You selected <span id="rate"></span> out of 5</p>
        </div>
        <h2 class="title">Thank you!</h2>
        <p class="desc">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
        <button class="submit_btn" id="submit_rate_again">Rate Again</button>
      </div>
      <!-- Thanks state end -->
```

```css
.hidden {
    display: none;
}
```

```js
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
```

### Continued development

Learning, Understanding, and Mastering JavaScript

### Useful resources

- W33Schools : https://www.w3schools.com/
  - This is a very good article that helped me understand the fundamentals of HTML, CSS, and JavaScript. I would recommend it to anyone who is still learning these concepts.

## Author

- Instagram - [Satryandi](https://www.instagram.com/satryandi/)
- LinkedIn - [Muhammad Satryandi Ogansyah, S.Kom.](https://www.linkedin.com/in/muhammad-satryandi-ogansyah-261043264/)
- Github - [Muhammad Satryandi Ogansyah](https://github.com/satryandi)
- Frontend Mentor - [Satryandi](https://www.frontendmentor.io/profile/satryandi)

## Acknowledgments

I am very grateful to the youtube content creators about this challenge 
