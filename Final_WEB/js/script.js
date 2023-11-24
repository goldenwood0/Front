function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");
for (let elm of elements) {
  observer.observe(elm);
}

//

const cards = document.querySelectorAll(".card");
const audio = new Audio("sounds/card_hover.wav");
cards.forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    element.style.scale = 1.1;
    element.style.backgroundColor = "#FFB15F";
    audio.play();
  });
  element.addEventListener("mouseleave", function () {
    element.style.backgroundColor = "white";
    element.style.scale = 1;
    audio.pause();
    audio.currentTime = 0;
  });
});

const goTopBtn = document.getElementById("go-top");

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

function play() {
  var audio = new Audio('sounds/succes.mp3');
  audio.play();
}
