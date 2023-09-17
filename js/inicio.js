let divProductos = document.getElementById("productos");

const getBeatsInformacion = async () => {
    let respuesta = await fetch("./data.json");
    let data = await respuesta.json();
    let informacion = data;

    informacion.forEach(item => {
        let card = document.createElement("div");
        card.className = "card mb-1"; 
    card.style = "max-width: 18rem;";
        card.innerHTML = `
        <img src="${item.imagen}" class="card-img-top" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">Bpm: ${item.bpm}</p>
            <p class="card-text precio"><b>$${item.precio}</b></p>
            <button id="Comprar${item.id}" class="btn btn-danger">Comprar</button>
        </div>
    `;

        divProductos.append(card);


        let btnComprar = document.getElementById(`Comprar${item.id}`);

        btnComprar.addEventListener("click", () => {

            item.id === 1 ?
                Swal.fire({
                    icon: 'error',
                    title: 'Este beat no está disponible',
                    text: 'Lo sentimos, este beat no está disponible para su compra.'
                })
            : Swal.fire({
                icon: 'success',
                title: 'El beat se agregó al carrito',
                text: 'El beat se ha agregado exitosamente a tu carrito de compras.'
            });}
    
        )
    })

}

getBeatsInformacion();














































/* import { comprarProducto } from "./carrito.js";

const divProductos = document.getElementById("productos");

export let beatsDisponibles = JSON.parse(localStorage.getItem("productos"))

document.addEventListener("DOMContentLoaded", () => {
    generarCardsBeats(beatsDisponibles)
})


export const generarCardsBeats = (productos) => {
    
    divProductos.innerHTML = "";
    
    productos.forEach((productos) => {

        const { imagen, nombre, bpm, precio, id} = productos
        
        let card = document.createElement("div")

        card.className = "producto"
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${imagen}" class="card-img-top" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${nombre}</h5>
        <p class="card-text">Bpm: ${bpm}</p>
        <p class="card-text"><b>$${precio}</b></p>
        <buttom id="Comprar${id}" class="btn btn-primary">Comprar</buttom>
        </div>
        </div>
        `;

        divProductos.appendChild(card);

        const btnComprar = document.getElementById(`Comprar${id}`)
        btnComprar.addEventListener("click", () => comprarProducto(id))

    });
} */