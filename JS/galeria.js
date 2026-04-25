//galeria de Estilos JS

// DOM tooltip

const tooltip = document.querySelector(".tooltip");
const imgs = document.querySelectorAll(".slide img");

// DOM carrusel

const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let indexCarrusel = 0;

// Funciones carrusel

function updateCarrusel() {
    track.style.transform =
    `translateX(-${indexCarrusel * 100}%)`;
}

// Eventos tooltip

imgs.forEach(img => {
    img.addEventListener("mouseenter", (e) => {
        img.classList.add("hovered");
        tooltip.classList.add("active");
        tooltip.textContent = img.dataset.info;
    });

    img.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 10 + "px";
        tooltip.style.top = e.pageY + 10 + "px";
    });

    img.addEventListener("mouseleave", () => {
        img.classList.remove("hovered");
        tooltip.classList.remove("active");
    });
});

// Eventos carrusel

nextButton.addEventListener("click", () => {
    indexCarrusel =
    (indexCarrusel + 1) % slides.length;
    updateCarrusel();
});

prevButton.addEventListener("click", () => {
    indexCarrusel =
    (indexCarrusel - 1 + slides.length) % slides.length;
    updateCarrusel();
});
