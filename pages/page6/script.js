function readMore() {
  let span = document.querySelector("#hiden");
  let button = document.querySelector("#hide__button");
  let dots = document.querySelector("#dots");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Подробнее";
    span.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "скрыть";
    span.style.display = "inline";
  }
}
