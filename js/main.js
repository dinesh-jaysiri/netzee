// collapsible components
const collapsible = document.querySelectorAll(".collapsible");

collapsible.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

// close menu
function closeMenu() {
  document.getElementById("menu-toggle").checked = false;
}

// slider

var ssSplide = new Splide("#ss", {
  type: "loop",
  perPage: 5,
  focus: "center",
  autoplay: true,
  trimSpace: false,
  interval: 15000,
  breakpoints: {
    1000: {
      perPage: 3,
    },
    618: {
      perPage: 1,
    },
  },
});
ssSplide.mount();

var featureSplide = new Splide("#feature__slide", {
  type: "loop",
  perPage: 1,
  autoplay: true,
  interval: 15000,
  breakpoints: {
    1024: {
      pagination: false,
    },
  },
});

featureSplide.mount();

// copy rights year
window.onload = function () {
  var currentYear = new Date().getFullYear();
  var elements = document.getElementsByClassName("copyrightYear");

  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = currentYear;
  }
};
