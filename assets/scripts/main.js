document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".tab-buttons .tab");
    const contenidos = document.querySelectorAll(".tab-contenido");
  
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        botones.forEach(b => b.classList.remove("active"));
        contenidos.forEach(c => c.classList.remove("active"));
  
        boton.classList.add("active");
        const id = boton.getAttribute("data-tab");
        document.getElementById(id).classList.add("active");
      });
    });
  });
  // ================= GALERÍA LIGHTBOX =================
const imagenes = document.querySelectorAll('.galeria-imagenes-grid img');
const lightbox = document.querySelector('.galeria-lightbox');
const lightboxImg = document.querySelector('.galeria-lightbox-img');
const cerrar = document.querySelector('.galeria-lightbox-close');
const anterior = document.querySelector('.galeria-lightbox-prev');
const siguiente = document.querySelector('.galeria-lightbox-next');

let imagenActual = 0;

imagenes.forEach((img, i) => {
  img.addEventListener('click', () => {
    imagenActual = i;
    mostrarImagen(img.src);
    lightbox.style.display = 'flex';
  });
});

cerrar.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

anterior.addEventListener('click', () => {
  imagenActual = (imagenActual - 1 + imagenes.length) % imagenes.length;
  mostrarImagen(imagenes[imagenActual].src);
});

siguiente.addEventListener('click', () => {
  imagenActual = (imagenActual + 1) % imagenes.length;
  mostrarImagen(imagenes[imagenActual].src);
});

function mostrarImagen(src) {
  lightboxImg.src = src;
}

//====================CARRUSEL=========
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelectorAll(".slide");

  function mostrarSiguienteSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(mostrarSiguienteSlide, 4000); // cambia cada 4 segundos
});

//======CALENDARIO INDEX=====//
const calendario = document.getElementById("calendario");
const nombreMes = document.getElementById("nombreMes");
let fechaActual = new Date(2025, 6); // julio 2025

const fechasConPartido = {
  "2025-07-26": true,
  "2025-07-27": true,
  "2025-08-02": true,
  "2025-08-03": true,
  "2025-08-09": true,
  "2025-08-10": true,
};

// Limitar navegación entre estos meses
const fechaMin = new Date(2025, 6);  // julio 2025
const fechaMax = new Date(2025, 10); // noviembre 2025

function generarCalendario(fecha) {
  const year = fecha.getFullYear();
  const month = fecha.getMonth();
  const nombreMesStr = fecha.toLocaleDateString("es-ES", { month: "long", year: "numeric" });

  nombreMes.textContent = nombreMesStr.charAt(0).toUpperCase() + nombreMesStr.slice(1);

  const primerDiaMes = new Date(year, month, 1);
  const ultimoDiaMes = new Date(year, month + 1, 0);
  const diasMes = ultimoDiaMes.getDate();
  const primerDiaSemana = primerDiaMes.getDay(); // 0 = DOM

  let html = "";

  // Espacios vacíos antes del 1
  for (let i = 0; i < primerDiaSemana; i++) {
    html += `<div></div>`;
  }

  for (let dia = 1; dia <= diasMes; dia++) {
    const fechaStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
    const clase = fechasConPartido[fechaStr] ? "partido" : "";
    html += `<div class="${clase}">${dia}</div>`;
  }

  calendario.innerHTML = html;
}

function cambiarMes(offset) {
  const nuevaFecha = new Date(fechaActual);
  nuevaFecha.setMonth(nuevaFecha.getMonth() + offset);

  if (nuevaFecha >= fechaMin && nuevaFecha <= fechaMax) {
    fechaActual = nuevaFecha;
    generarCalendario(fechaActual);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  generarCalendario(fechaActual);
});
