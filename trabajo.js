function comprobarRespuesta() {
    const respuestaUsuario = parseInt(document.getElementById("respuestaUsuario").value);

    // Obtén todas las opciones con el atributo data-respuesta
    const opciones = document.querySelectorAll('[data-respuesta]');

    // Utiliza el método find() para buscar la respuesta correcta
    const respuestaCorrecta = Array.from(opciones).find(opcion => {
        return parseInt(opcion.getAttribute('data-respuesta')) === respuestaUsuario;
    });

    if (respuestaUsuario === respuestaCorrecta) {
        document.getElementById("mensaje").textContent = "¡Acertaste!";
    } 
        else if (respuestaUsuario > 5){
        document.getElementById("mensaje").textContent = "Elije una opcion correcta"
        }
            else{
            document.getElementById("mensaje").textContent = "Sigue intentando.";
        }

    // Almacenar la respuesta correcta en el Local Storage
    localStorage.setItem("respuestaCorrecta", respuestaUsuario);
}