//Aumentar y disminuir con Event Delegation
const container = document.querySelector('.container');
const span = document.getElementById('span')
let contador = 0;

container.addEventListener('click', e => {
    console.log(e.target.classList.contains('btn-info'))
    
    if(e.target.classList.contains('btn-info')){
        contador++
        span.textContent = contador
    }
    if(e.target.classList.contains('btn-danger')){
        contador--
        span.textContent = contador
    }
    e.stopPropagation()
})