document.querySelector(".input__section").oninput = function () {
  let val = this.value.trim();
  let elastik = document.querySelectorAll(".vibot__item a");
  if (val != "") {
    elastik.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classlist.add("hide1");
      } else {
        elem.classlist.remove("hide1");
      }
    });
  } else {
    elastik.forEach(function (elem) {
      elem.classlist.remove("hide1");
    });
  }
};
