document.addEventListener('DOMContentLoaded', function() {
    const setCookieButton = document.getElementById('setCookieButton');
    const statusMessage = document.getElementById('statusMessage');

    function establecerCookie(nombre, valor, dias) {
        let fecha = new Date();
        fecha.setTime(fecha.getTime() + (dias*24*60*60*1000));
        let expires = "expires=" + fecha.toUTCString();
        document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
    }

    setCookieButton.addEventListener('click', function() {
        const cookieName = document.getElementById('cookieName').value;
        const cookieValue = document.getElementById('cookieValue').value;

        if (cookieName && cookieValue) {
            establecerCookie(cookieName, cookieValue, 7); // Establece la cookie con una duración de 7 días
            statusMessage.textContent = `Cookie "${cookieName}" establecida con éxito.`;
            document.getElementById('cookieName').value = ''; // Limpiar el campo de nombre de cookie
            document.getElementById('cookieValue').value = ''; // Limpiar el campo de valor de cookie
        } else {
            statusMessage.textContent = 'Por favor, ingrese el nombre y valor de la cookie.';
            statusMessage.style.color = 'red';
        }
    });
});
