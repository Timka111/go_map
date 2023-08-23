window.onload = () => {
  let input = document.querySelector("#tupeinput");
  input.oninput = function () {
    let value = this.value.trim();
    let list = document.querySelectorAll(".card");

    if (value != "") {
      list.forEach((elem) => {
        if (elem.innerText.search(value) == -1) {
          elem.classList.add("hide1");
          document.querySelector(".card").classList.add("hide1");
        }
      });
    } else {
      list.forEach((elem) => {
        elem.classList.remove("hide1");
        document.querySelector(".card").classList.remove("hide1");
      });
    }
  };
};

const filterBox = document.querySelectorAll(".card");

document.querySelector(".ul").addEventListener("click", (event) => {
  if (event.target.tagName !== "LI") return false;

  let filterClass = event.target.dataset["f"];

  filterBox.forEach((elem) => {
    elem.classList.remove("hide2");
    if (!elem.classList.contains(filterClass) && filterClass !== "all") {
      elem.classList.add("hide2");
    }
  });
});
