const readMoreBtn = document.querySelector(".about__btn");
const text = document.querySelector(".about__text-more");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "Read more") {
    readMoreBtn.innerText = "Read less";
  } else {
    readMoreBtn.innerText = "Read more";
  }
});