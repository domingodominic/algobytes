window.addEventListener("load", function () {
  var loader = document.querySelector(".loader");
  loader.classList.add("loader--hide");

  var hiddenLoader = document.querySelector(".loader--hide");

  hiddenLoader.addEventListener("transitionend", function () {
    document.body.removeChild(document.querySelector(".loader"));
    window.scrollY;
  });
});
if (window.matchMedia("(max-width: 768px)").matches) {
  var msgBtn = document.querySelector(".msgUs-btn");
  const navlist = document.querySelector(".nav-list");
  msgBtn.innerHTML = ` <a href="mailto:algofilipinoofficers@gmail.com">   <i class="bi bi-chat" style="font-size: 30px; border: none; background-color: transparent"></i>  </a>`;
  msgBtn.style.border = "none !important";
}

// const switchToggle = document.querySelector("#checkbox");
// switchToggle.addEventListener("click", function () {
//   window.addEventListener("click", function (event) {
//     switchToggle.checked = false;
//   });
// });

const scrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

AOS.init();
