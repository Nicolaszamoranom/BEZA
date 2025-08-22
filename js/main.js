// Espera a que todo el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {

    // Scroll suave para los enlaces del menú de navegación
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Asegúrate de que el enlace es un ancla a una sección (#)
            if (this.hash !== "") {
                // Previene el comportamiento por defecto del enlace
                event.preventDefault();

                // Guarda el hash (ej. #features)
                const hash = this.hash;

                // Encuentra el elemento al que se quiere ir
                const targetElement = document.querySelector(hash);

                if (targetElement) {
                    // Calcula la posición del elemento
                    const elementPosition = targetElement.offsetTop;

                    // Realiza el scroll suave
                    window.scrollTo({
                        top: elementPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

});

// --- LÓGICA PARA EL SELECTOR DE PAÍS ---

// Espera a que todo el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', function () {

    // Selecciona los elementos que vamos a necesitar
    const countryDropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    const selectedCountryFlag = document.getElementById('selected-country-flag');
    const selectedCountryName = document.getElementById('selected-country-name');

    // Recorre cada elemento de la lista de países
    countryDropdownItems.forEach(item => {
        // Añade un "escuchador" de clics a cada uno
        item.addEventListener('click', function (event) {
            // Previene el comportamiento por defecto del enlace (que recargaría la página)
            event.preventDefault();

            // Del item al que se le hizo clic, obtenemos la imagen y el nombre
            const newFlagSrc = item.querySelector('img').src;
            const newCountryName = item.querySelector('span').textContent;

            // Actualizamos la bandera y el nombre en el botón principal
            selectedCountryFlag.src = newFlagSrc;
            selectedCountryName.textContent = newCountryName;
        });
    });
});