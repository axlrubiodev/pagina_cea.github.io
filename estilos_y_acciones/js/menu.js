const boton_menu = document.querySelector('.barra_de_navegacion .boton_menu');
const desplegable_menu = document.querySelector('.contenedor_de_botones_de_navegacion');

boton_menu.addEventListener('click', function(){
    desplegable_menu.classList.toggle('activo');
});