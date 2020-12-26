const parrafo = document.querySelector('.main');
parrafo.textContent = "Texto cambiado desde app.JS";
//innerHTML funciona de la misma forma pero sirve tambien para agragar HTML

//Saber que clases contamos
console.log(parrafo.className)
//Agregar nuevas clases al nodo
parrafo.classList.add("mt-5")

//Ubicamos donde queremos modificar el documento
const lista = document.getElementById('lista')
console.log(lista)

//const li = document.createElement('li')
//li.textContent = "Primer elemento"
//lista.appendChild(li)

//Creamos un array para desplazarnos entre valores
const arrayElement = ['primer elemento', 'segundo elemento' , 'tercer elemento']
arrayElement.forEach(element => {
    const li = document.createElement('li')
    li.textContent = element
    lista.appendChild(li)

})

//Se puede hacer tambien con innerHTML
arrayElement.forEach(item =>{
    lista.innerHTML += `<li>${item}</li>`
})



//Fragment (evitar Reflow)
const arrayItem = ["item 1", "item 2", "item 3"];
const fragment = document.createDocumentFragment()

arrayItem.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item
    fragment.appendChild(li)
})

//Empujamos el fragment
lista.appendChild(fragment)

//Ahora los elementos se invierten
arrayItem.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item
    const childNode = fragment.firstChild
    fragment.insertBefore(li, childNode)
})

//Empujamos el fragment
lista.appendChild(fragment)

//Insetar de forma dinamica un elemento con Fragment y createElement
{/* <li class="list">
  <b>Nombre: </b> <span class="text-danger">descripción...</span>
</li> */}

//No es necesario porner, ya lo tenemos arriba
//const lista = document.getElementById(lista);
//const arrayItem = ["item 1", "item 2", "item 3"];
//const fragment = document.createDocumentFragment;

// arrayItem.forEach(item =>{
//          //creamos li
//     const li = document.createElement("li")
//          //agregamos clase a li
//     li.classList.add("list");
//          //creamos b
//     const b = document.createElement("b");
//          //agregamos texto a b
//     b.textContent = "Nombre: ";
//          //creamos span
//     const span = document.createElement("span");
//          //agregamos clase a span
//     span.classList.add("text-danger");
//          //agregamos texto a span
//     span.textContent = item;
//          //agregamos nodos hijo a li
//     li.appendChild(b);
//     li.appendChild(span);
//          //agregamos li al fragment
//     fragment.appendChild(li);
// })

// lista.appendChild(fragment);

//Utilizando Templete
//Ya hemos creado const lista, cost arrayItem, const fragment
const template = document.querySelector("#template-li").content;
console.log(template)
//const arrayItem = ["item 1", "item 2", "item 3"];
//const fragment = document.createDocumentFragment()

arrayItem.forEach((item) => {
    const span = template.querySelector("span")
    span.textContent = item;
    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
})

lista.appendChild(fragment);

