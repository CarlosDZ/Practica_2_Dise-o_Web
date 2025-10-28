function mostrarPantalla() {
      const pantalla = document.getElementById('MenuDesplegable');
      pantalla.classList.toggle('visible');
      const boton = document.getElementById('botonMenuBase');
      boton.classList.toggle('invisible');   
    }

function correcto(input) {
  input.classList.add('correcto');
  input.classList.remove('incorrecto');
}

function incorrecto(input) {
  input.classList.add('incorrecto');
  input.classList.remove('correcto');
}

function validarNombreOApellido(input) {
  if (input.value.trim() !== '') {
    correcto(input);
  } else {
    incorrecto(input);
  }
}


function validarCorreo(input) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(input.value)) {
    correcto(input);
  } else {
    incorrecto(input);
  }
}

function validarTfl(input) {
  const regex = /^\d{9}$/;
  if (regex.test(input.value)) {
    correcto(input);
  } else {
    incorrecto(input);
  }
}

document.getElementById('inputNombre').addEventListener('input', e => validarNombreOApellido(e.target));
document.getElementById('inputApellido').addEventListener('input', e => validarNombreOApellido(e.target));
document.getElementById('inputEmail').addEventListener('input', e => validarCorreo(e.target));
document.getElementById('inputTlf').addEventListener('input', e => validarTfl(e.target));
