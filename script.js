function mostrarPantalla() {
      const pantalla = document.getElementById('MenuDesplegable');
      pantalla.classList.toggle('visible');
      const boton = document.getElementById('botonMenuBase');
      boton.classList.toggle('invisible');   
    }