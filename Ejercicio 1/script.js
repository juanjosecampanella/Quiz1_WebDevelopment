document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    validarFormulario();
});

function validarFormulario() {
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    // Inicializar estado de validación
    var esValido = true;

    // Limpiar mensajes de error previos
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('errorEmail').textContent = '';
    document.getElementById('errorMensaje').textContent = '';

    // Validar nombre
    if (nombre === '') {
        document.getElementById('errorNombre').textContent = 'El campo nombre es obligatorio.';
        esValido = false;
    }

    // Validar email
    if (email === '') {
        document.getElementById('errorEmail').textContent = 'El campo email es obligatorio.';
        esValido = false;
    }

    // Validar mensaje
    if (mensaje === '') {
        document.getElementById('errorMensaje').textContent = 'El campo mensaje es obligatorio.';
        esValido = false;
    }

    if (esValido) {
        alert('Formulario enviado con éxito.');
    }
}