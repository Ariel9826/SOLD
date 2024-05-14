document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia a los botones
    const iniciarSesionBtn = document.querySelector(".Inicio_sesión");
    const registrarseBtn = document.querySelector(".Registrarse");

    // Función para manejar la redirección
    function redirigirA(pagina) {
    console.log("Redirigiendo a:", pagina);
    window.location.href = pagina;
    }

    // Agregar eventos de clic a los botones
    iniciarSesionBtn.addEventListener("click", function() {
    console.log("Clic en Iniciar Sesión");
    redirigirA("/Inicio-sesión/Inicio-sesión.html");
    });

    registrarseBtn.addEventListener("click", function() {
    console.log("Clic en Registrarse");
    redirigirA("/Registro-Usuario/Registro.html");
    });
});
