document.addEventListener('DOMContentLoaded', function() {
    const changeStyleButton = document.getElementById('changeStyleButton');
    const statusMessage = document.getElementById('statusMessage');

    function cambiarEstilo(elementId, className) {
        const element = document.getElementById(elementId);
        if (element) {
            element.className = className;
            return true;
        }
        return false;
    }

    changeStyleButton.addEventListener('click', function() {
        const elementId = document.getElementById('elementId').value;
        const className = document.getElementById('className').value;

        if (elementId && className) {
            const success = cambiarEstilo(elementId, className);
            if (success) {
                statusMessage.textContent = `El estilo del elemento con ID "${elementId}" ha sido cambiado a la clase "${className}".`;
                statusMessage.style.color = 'green';
            } else {
                statusMessage.textContent = `No se encontró ningún elemento con el ID "${elementId}".`;
                statusMessage.style.color = 'red';
            }
        } else {
            statusMessage.textContent = 'Por favor, ingrese el ID del elemento y el nombre de la clase.';
            statusMessage.style.color = 'red';
        }
    });
});
