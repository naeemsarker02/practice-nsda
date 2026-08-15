document.addEventListener("DOMContentLoaded", function () {
  var filterButtons = document.querySelectorAll("#documentFilterGroup [data-category]");
  var documentItems = document.querySelectorAll(".document-item");

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var selected = button.getAttribute("data-category");

      filterButtons.forEach(function (btn) {
        btn.classList.remove("btn-archive");
        btn.classList.add("btn-outline-archive");
      });
      button.classList.remove("btn-outline-archive");
      button.classList.add("btn-archive");

      documentItems.forEach(function (item) {
        if (selected === "all" || item.getAttribute("data-category") === selected) {
          item.classList.remove("d-none");
        } else {
          item.classList.add("d-none");
        }
      });
    });
  });
});
