const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function (button) {
  button.addEventListener("click", function (event) {
    switch (event.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "aqua":
        body.style.backgroundColor = "aqua";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      default:
        body.style.backgroundColor = "white";
    }
  });
});
