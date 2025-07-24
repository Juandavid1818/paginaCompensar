document.addEventListener("DOMContentLoaded", function () {
    // Cargar el header
    fetch("../../components/header/header.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("header").innerHTML = data;
      });
    // Si tienes un footer.html
    fetch("../../components/footer/footer.html")
      .then((res) => res.text())
      .then((data) => {
        document.getElementById("footer").innerHTML = data;
      });
  });
  