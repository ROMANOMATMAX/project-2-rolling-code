// elementos del html
const btnNewProduct = document.getElementById('new-product-btn');
const btnListsProducts = document.getElementById('list-products-btn');
const mostrarFormNuevoProducto = () => {
    console.log('Abrir form de nuevo producto');
}
//Funcion que nos traslada al html que muestra la lista de productos
const listarTodosLosProductos = () => {
    console.log("Listar los productos");
    window.location.href = "../html/productList.html";
}

btnNewProduct.addEventListener('click', mostrarFormNuevoProducto)
btnListsProducts.addEventListener('click', listarTodosLosProductos)

//Funcion que genera un id unico para cada elemento
function create_UUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

const productosJSON = localStorage.getItem('games');
let productos = JSON.parse(productosJSON) || [];

//Guarda el producto en local storage
function guardarProducto() {
    localStorage.setItem('productos', JSON.stringify(productos))
}

//Funcion que maneja el submit del formulario para dar de alta un nuevo producto
const createNewProduct = (event) => {
    event.preventDefault();
    console.log("submit new product");
    const titulo = document.getElementById('titulo').value;
    const precio = document.getElementById('precio').value;
    const url = document.getElementById('url').value;
    const src = document.getElementById('src').value;
    const src1 = document.getElementById('src1').value;
    const src2 = document.getElementById('src2').value;
    const categoria1 = document.getElementById('categoria1').value;
    const categoria2 = document.getElementById('categoria2').value;
    const fechaLimite = document.getElementById('fecha-limite').value;
    const descuento = document.getElementById('descuento').value;
    // guardarProducto()
    //Evento que maneja la suba de archivos

    const nuevoProducto = {
        id: create_UUID(),
        titulo,
        precio,
        url,
        src,
        src1,
        src2, 
        categoria1,
        categoria2,
        fechaLimite, 
        descuento
    }
    console.log(nuevoProducto);
    productos.push(nuevoProducto);
    localStorage.setItem('games', JSON.stringify(productos));
    //limpiar formulario
    limpiarFormulario();
    //Mostrar elmsj de producto creado exitosamente
    const msjError = document.getElementById('msj-error-login')
    msjError.innerHTML = "Producto creado exitosamente"
    msjError.setAttribute('class', 'alert alert-success');
    setTimeout(() => {
        msjError.setAttribute('class', 'd-none')
        const btnCloseForm = document.getElementById('btn-close-form');
        btnCloseForm.click();
    }, 1500);
}


const limpiarFormulario = () => {
    document.getElementById('titulo').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('url').value = "";
    document.getElementById('src').value = "";
    document.getElementById('src1').value = "";
    document.getElementById('src2').value = "";
    document.getElementById('categoria1').value = "";
    document.getElementById('categoria2').value = "";
    document.getElementById('fecha-limite').value = "";
    document.getElementById('descuento').value = "";
}

