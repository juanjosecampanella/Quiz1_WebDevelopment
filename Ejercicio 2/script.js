document.addEventListener('DOMContentLoaded', function() {
    const miElemento = document.getElementById('miElemento');
    miElemento.addEventListener('click', function() {
        if (miElemento.style.backgroundColor === 'red') {
            miElemento.style.backgroundColor = 'blue';
        } else {
            miElemento.style.backgroundColor = 'red';
        }
    });
});
