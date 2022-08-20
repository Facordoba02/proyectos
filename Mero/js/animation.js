let animated = document.querySelectorAll(".animated");

function showScroll() {
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animated.length; i++) {
    var h = animated[i].offsetTop;
    if (h < scrollTop) {
      animated[i].style.opacity = 1;
      animated[i].classList.add("showTop");
    }
  }
}

window.addEventListener("scroll", showScroll);
