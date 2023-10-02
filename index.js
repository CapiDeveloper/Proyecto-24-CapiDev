const cajaReacciones = document.getElementById('caja-reacciones');
const reacciones = document.querySelectorAll('.reacciones li');
const reaccionar = document.getElementById('reaccionar');

const iconoReacion = document.getElementById('icono-reaccion');
const iconoDescripcion = document.getElementById('reaccion-descripcion');

cajaReacciones.addEventListener('mousemove',()=>{
    cajaReacciones.style.overflow = 'visible';
});
cajaReacciones.addEventListener('mouseout',()=>{
    cajaReacciones.style.overflow = 'hidden';
});
reaccionar.addEventListener('mousemove',()=>{
    cajaReacciones.style.overflow = 'visible';
});
reaccionar.addEventListener('mouseout',()=>{
    cajaReacciones.style.overflow = 'hidden';
});

reaccionar.addEventListener('click',()=>{
    if (iconoReacion.src.split('/')[4] == 'like.svg') {
        iconoReacion.src = '/img/like.png';
        iconoDescripcion.textContent = 'Me gusta';
        iconoDescripcion.style = 'color:blue;';
    }else{
        iconoReacion.src = '/img/like.svg';
        iconoDescripcion.textContent = 'Me gusta';
        iconoDescripcion.style = 'color:black;';
    }
});

reacciones.forEach(function(li) {
    li.addEventListener('click',function() {
        const imagen = this.querySelector('img');
        verReaccion(imagen.src.split('/')[4]);
    });
});

function verReaccion(reaccion) {
    cajaReacciones.style.overflow = 'hidden';
    switch (reaccion.split('.')[0]) {
        case 'like':
            iconoReacion.src = '/img/like.png';
            iconoDescripcion.textContent = 'Me gusta';
            iconoDescripcion.style = 'color:blue;';
            break;
        case 'corazon':
            iconoReacion.src = '/img/corazon.png';
            iconoDescripcion.textContent = 'Me encanta';
            iconoDescripcion.style = 'color:red;';
            break;
        case 'divierte':
            iconoReacion.src = '/img/divertir.png';
            iconoDescripcion.textContent = 'Me divierte';
            iconoDescripcion.style = 'color:orange;';
            break
        case 'triste':
            iconoReacion.src = '/img/triste.png';
            iconoDescripcion.textContent = 'Me entristece';
            iconoDescripcion.style = 'color:orange;';
            break;
        case 'enoja':
            iconoReacion.src = '/img/enoja.png';
            iconoDescripcion.textContent = 'Me enoja';
            iconoDescripcion.style = 'color:orange;';
            break
        default:
            break;
    }
}