// contactUs.js

let consulta = {
    email: "",
    mensaje: ""
};

const mensaje = document.querySelector("#formMensajes");

mensaje.addEventListener("submit", (e) => {
    e.preventDefault();
    
    consulta.email = mensaje.email.value;
    consulta.mensaje = mensaje.mensaje.value;

    mensaje.reset();

    console.log(consulta);
});