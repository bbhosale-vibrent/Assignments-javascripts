window.addEventListener("scroll", function () {
  let button = document.getElementById("scrollButton");
  let scrollPosition = window.scrollY;
  let newSize = Math.max(16, 16 + scrollPosition / 10);
  button.style.fontSize = newSize + "px";
});
