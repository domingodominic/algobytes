// Check if screen size is tablet or smaller

window.addEventListener("load", function () {
  var loader = document.querySelector(".loader");
  loader.classList.add("loader--hide");

  var hiddenLoader = document.querySelector(".loader--hide");

  // hiddenLoader.addEventListener("transitionend", function () {
  //   document.body.removeChild(document.querySelector(".loader"));
  // });
});
if (window.matchMedia("(max-width: 768px)").matches) {
  var msgBtn = document.querySelector(".msgUs-btn");

  msgBtn.innerHTML = `<i class="bi bi-chat" style="font-size: 30px; border: none; background-color: transparent"></i>`;
  msgBtn.style.border = "none !important";
}

const scrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Add click event listener to the scroll-to-top button
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

AOS.init();
