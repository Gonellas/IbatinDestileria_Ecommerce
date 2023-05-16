//Creamos un objeto Producto
class Producto{
    constructor(id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}


// Armo un array vacío para guardar los productos
let carrito = [];


//! Instanciamos la clase Producto en un nuevo array
let productos = [new Producto(1, 'Ron Blanco Ibatín', 100, './assets/DSC09155.jpg'), new Producto(2, 'Ron Dorado Ibatín', 100, './assets/DSC09005.jpg'), 
new Producto(3, 'Yungas Gin', 100, './assets/DSC09204.jpg'), new Producto(4, 'Box Degustación', 100, './assets/boxdegustacion.jpeg'),
new Producto(5, 'Box Ron', 100, './assets/boxron.jpeg'), new Producto(6, 'Box Gin', 100, './assets/boxgin.jpeg')];
console.log(productos);


//Creamos un forEach que recorra el array de productos para crearle una card a cada uno
productos.forEach(producto =>{
    let productCard = document.createElement('div');
    productCard.innerHTML = `
  <div class="card my-3" id=${producto.id} style="width: 18rem;">
    <img src=${producto.imagen} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">$${producto.precio}</p>
    </div>
    <button class="btn btn-success" onclick="addProduct(event)">Agregar al carrito</button>
  </div>
  `;

  //Le creo una clase a mi div
  productCard.classList.add('col-4');
  //Llamamos al container padre en una variable
  let productContainer = document.querySelector('#products-container');
  //Hacemos que adopte al hijo
  productContainer.appendChild(productCard);
})


function addProduct(event){
    // console.log(event.target.parentElement);
    let productId = event.target.parentElement.id;
    // console.log(productId);
    let product = productos.find(producto => producto.id == productId);
    // console.log(product);
    carrito.push(product);
    console.log(carrito);

    let productCard = document.createElement('li');
    productCard.innerHTML = `
    <div id=${product.id} class="w-50 my-3">
        <div class="card-body">
            <h5 class="card-title">${product.nombre}</h5>
            <p class="card-text">${product.precio}</p>
            <a href="#" class="btn btn-primary">Eliminar Producto</a>
        </div>
    </div>
    `;
    let carritoContainer = document.querySelector('#carrito-container')
    carritoContainer.appendChild(productCard);
}

