document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const button = document.getElementById('button');
    const lista = document.getElementById('miLista');

    function agregarElementoLista(texto) {
        // Crear un nuevo elemento de lista
        const nuevoElemento = document.createElement('li');
        
        // Establecer el texto del nuevo elemento
        nuevoElemento.textContent = texto;
        
        // Agregar el nuevo elemento a la lista
        lista.appendChild(nuevoElemento);
    }

    button.addEventListener('click', function() {
        const texto = input.value;
        
        if (texto) {
            agregarElementoLista(texto);
            input.value = ''; // Limpiar el campo de texto después de agregar el elemento
        } else {
            alert('Por favor, ingrese un texto.');
        }
    });
});
