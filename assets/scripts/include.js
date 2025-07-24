const basePath = window.location.pathname.split("/")[1]; // "paginaCompensar"

document.addEventListener("DOMContentLoaded", function () {
  fetch(`/${basePath}/components/header/header.html`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    });

  fetch(`/${basePath}/components/footer/footer.html`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
});
