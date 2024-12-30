const burgerBtn = document.getElementById("burgercheck");
const navLink = document.querySelector(".mobile-links");

burgerBtn.addEventListener("click", (e) => {
  if (e.target.checked) {
    navLink.style.transform = `translateX(0)`;
  } else {
    navLink.style.transform = `translateX(-100%)`;
  }
});
