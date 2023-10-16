console.log('%c¡Atención! %c', 'font-size: 24px; color: yellow; background-color: red;', 'font-size: 20px;');
console.log('%cEsta es una zona de desarrollo. No puedes ingresar a este apartado del sitio web.', 'font-size: 20px;');

let formulario = document.getElementById('form');
formulario.addEventListener('submit', (e) => {
    Swal.fire({
        title: "Formulario Enviado",
        text: "El formulario se ha enviado correctamente.",
        icon: "success",
    })
})