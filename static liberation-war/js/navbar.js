document.addEventListener("DOMContentLoaded", function () {
  var currentPage = location.pathname.split("/").pop();
  if (currentPage === "") {
    currentPage = "index.html";
  }

  var navLinks = document.querySelectorAll(".navbar-archive .nav-link");
  navLinks.forEach(function (link) {
    var linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
