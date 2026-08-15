document.addEventListener("DOMContentLoaded", function () {
  var thumbs = document.querySelectorAll(".gallery-thumb");
  var modalImage = document.getElementById("galleryModalImage");
  var modalLabel = document.getElementById("galleryModalLabel");
  var modalCredit = document.getElementById("galleryModalCredit");
  var downloadLink = document.getElementById("galleryDownloadLink");
  var zoomBtn = document.getElementById("galleryZoomBtn");
  var galleryModalEl = document.getElementById("galleryModal");
  var galleryModal = new bootstrap.Modal(galleryModalEl);

  thumbs.forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      var fullSrc = thumb.getAttribute("data-full");
      var caption = thumb.getAttribute("data-caption");
      var credit = thumb.getAttribute("data-credit");
      modalImage.setAttribute("src", fullSrc);
      modalImage.setAttribute("alt", caption);
      modalImage.classList.remove("zoomed");
      modalLabel.textContent = caption;
      modalCredit.textContent = credit;
      downloadLink.setAttribute("href", fullSrc);
      downloadLink.setAttribute("download", caption.replace(/\s+/g, "-").toLowerCase());
      galleryModal.show();
    });
  });

  zoomBtn.addEventListener("click", function () {
    modalImage.classList.toggle("zoomed");
  });

  galleryModalEl.addEventListener("hidden.bs.modal", function () {
    modalImage.classList.remove("zoomed");
  });
});
