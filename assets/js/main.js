let formulario = document.getElementById('form');
formulario.addEventListener('submit', (e) => {
    Swal.fire({
        title: "Formulario Enviado",
        text: "El formulario se ha enviado correctamente.",
        icon: "success",
    })
})