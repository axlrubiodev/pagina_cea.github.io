var boton_gratis = document.getElementById('gratis');
var boton_mensual = document.getElementById('mensual');
var boton_anual = document.getElementById('anual');
var carrusel_animado = document.getElementById('carrosa');

boton_mensual.addEventListener('click', function(){
    if(this.className == 'boton'){
        this.classList.add('boton_botonera_activo');
        boton_anual.classList.remove('boton_botonera_activo');
        boton_gratis.classList.remove('boton_botonera_activo');
    }

    carrusel_animado.style.marginLeft = '-100%'
});

boton_anual.addEventListener('click', function(){
    if(this.className == 'boton'){
        this.classList.add('boton_botonera_activo');
        boton_mensual.classList.remove('boton_botonera_activo');
        boton_gratis.classList.remove('boton_botonera_activo');
    }

    carrusel_animado.style.marginLeft = '-200%'
});

boton_gratis.addEventListener('click', function(){
    if(this.className == 'boton'){
        this.classList.add('boton_botonera_activo');
        boton_anual.classList.remove('boton_botonera_activo');
        boton_mensual.classList.remove('boton_botonera_activo');
    }

    carrusel_animado.style.marginLeft = '0'
});