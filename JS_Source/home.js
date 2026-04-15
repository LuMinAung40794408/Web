function scrollToTools() {
  document.getElementById("tools").scrollIntoView({
    behavior: "smooth"
  });
}

function toggleArticle() {
  const article = document.getElementById("fullArticle");
  const button = document.querySelector(".read-btn");

  article.classList.toggle("active");

  if (article.classList.contains("active")) {
    button.textContent = "Hide Guide";
    article.scrollIntoView({ behavior: "smooth" });
  } else {
    button.textContent = "Read Full Guide";
  }
}
