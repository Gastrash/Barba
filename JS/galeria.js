//galeria de cortes

const tooltip = document.querySelector(".tooltip");

const imgs = document.querySelectorAll(".grid-container img");

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