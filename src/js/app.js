let scrollpos = window.scrollY;
const header = document.querySelector("header");
const objectSelect = document.querySelector(".beoplay");
const objectPosition = objectSelect.offsetTop;
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add("active-header");
const remove_class_on_scroll = () => header.classList.remove("active-header");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= objectPosition) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  console.log(scrollpos);
});

// Parallax Images
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

new simpleParallax(image1, {
  delay: 1,
  orientation: "left",
});

new simpleParallax(image2, {
  delay: 2,
  orientation: "right",
});
