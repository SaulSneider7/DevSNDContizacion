console.log('%c¡Atención! %c', 'font-size: 24px; color: yellow; background-color: red;', 'font-size: 20px;');
console.log('%cEsta es una zona de desarrollo. No puedes ingresar a este apartado del sitio web.', 'font-size: 20px;');

// EMAIL JS

const btn = document.getElementById('cotizar');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i>&nbsp;&nbsp; Cotizando ...`;

        const serviceID = 'default_service';
        const templateID = 'template_tb5qpw7';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerHTML = `<i class="fa-solid fa-paper-plane"></i>&nbsp;&nbsp; Cotizar Sitio Web`;
                let presupuesto = document.getElementById('presupuesto');
                if (presupuesto.value <= 300) {
                    location.href = 'gracias.html';
                } else {
                    Swal.fire({
                        title: "Formulario Enviado",
                        text: "Nos comunicaremos en breve para enviarle una cotización.",
                        icon: "success",
                    }).then(() => {
                        location.reload();
                    })
                }
            }, (err) => {
                alert(JSON.stringify(err));
            });
    });





