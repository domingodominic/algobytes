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
