// DOM tooltip

const tooltip =
document.querySelector(".tooltip");
const imgs = document.querySelectorAll(".slide img");

// DOM carrusel

const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

let indexCarrusel = 1;

updateCarrusel();

let isMoving = false;

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

track.addEventListener("transitionend", () => {
    const allSlides =
    document.querySelectorAll(".slide");

    if (allSlides[indexCarrusel] === firstClone)            
    {
        track.style.transition = "none";
        indexCarrusel = 1;
        updateCarrusel();
    }

    if (allSlides[indexCarrusel] === lastClone){
        track.style.transition = "none";
        indexCarrusel = allSlides.length - 2;
        updateCarrusel();
    }

    setTimeout(() => {
        track.style.transition = 
        "transform 0.4s ease";
    }, 0);
    isMoving = false;
});


nextButton.addEventListener("click", () => {
    if(isMoving) return;
    isMoving = true;
    indexCarrusel++;
    updateCarrusel();
});

prevButton.addEventListener("click", () => {
    if(isMoving) return;
    isMoving = true;
    indexCarrusel--;
    updateCarrusel();
});
