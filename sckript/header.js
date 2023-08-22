let lastScrol = 0;
const defaultOffset = 200;
const header = document.querySelector(".header");

const scrolPosition = () =>
  window.pageYOffset || document.documentElement.scrollTo;
const contaiHide = () => header.classList.contains("hide");

window.addEventListener("scroll", () => {
  if (scrolPosition() > lastScrol && !contaiHide()) {
    header.classList.add("hide");
  } else if (scrolPosition() < lastScrol && contaiHide()) {
    header.classList.remove("hide");
  }
  lastScrol = scrolPosition();
});
