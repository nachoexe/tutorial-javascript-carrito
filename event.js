//Incrementar y disminur con AddEventListener
const btnAumentar = document.querySelector('.btn-info')
    const span = document.getElementById('span');
    let contador = 0


    btnAumentar.addEventListener('click', ()=> {
      console.log("Me diste click aumentar")
      contador++
      span.textContent = contador;

    })
    const  btnDisminuir = document.querySelector(".btn-danger");
    btnDisminuir.addEventListener('click', ()=>{
      console.log("Me diste click disminuir")
      contador--
      span.textContent = contador;
    })