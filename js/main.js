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