
let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
}
function actualizarCarrito() {
    let carritoElement = document.getElementById("carrito");
    let carritoCantidadElement = document.getElementById("carrito-cantidad");
  
    carritoCantidadElement.textContent = carrito.length;
  

    carritoElement.innerHTML = "";
  
    
    carrito.forEach((producto) => {
      let productoElement = document.createElement("div");
      productoElement.textContent = producto.nombre;
      carritoElement.appendChild(productoElement);
    });
  }
  
document.addEventListener("DOMContentLoaded", async () => {
  
  let respuesta = await fetch("./data.json");
  let data = await respuesta.json();
  let informacion = data;

  
  let botonesComprar = document.querySelectorAll(".btn.btn-danger");

 
  botonesComprar.forEach((boton, index) => {
    boton.addEventListener("click", () => {
  
      let producto = informacion[index];

    
      agregarAlCarrito(producto);

      Swal.fire({
        icon: "success",
        title: "El beat se agregó al carrito",
        text: "El beat se ha agregado exitosamente a tu carrito de compras.",
      });
    });
  });
});

