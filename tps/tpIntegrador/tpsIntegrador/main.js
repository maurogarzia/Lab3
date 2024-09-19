//-----Funcion que cuando agrego un elemento aparece el form----
const addProductFunction = () =>{
    const addProduct = document.getElementById("addElement");
    const formAddProduct = document.getElementById("formAddProduct");
    const cancelFormAddProduct = document.getElementById("cancelar");
    const aceptButton = document.getElementById("aceptar");
    const deletButton = document.getElementById("eliminar");

    //Evento para abrir el formulario
    addProduct.addEventListener("click",() => {
        formAddProduct.style.display = "inherit";  
    })
    //Evento para cancelar el evento anterior
    cancelFormAddProduct.addEventListener("click", () => {
        formAddProduct.style.display = "none";  
    })
    aceptButton.addEventListener("click", () =>{
        formAddProduct.style.display = "none";
    })
    deletButton.addEventListener("click", () => {
        formAddProduct.style.display = "none";
    })
}

//----Funcion que recibe los parametros del producto y crea nuevo Producto----
const createProduct = (arrayOfObject) =>{
    
    const aceptButton = document.getElementById("aceptar");
    aceptButton.addEventListener("click",() =>{
        //Creo un objeto en el form
        event.preventDefault();
        let name = document.getElementById("nameProduct");
        let image = document.getElementById("pictureProduct");
        let price = document.getElementById("priceProduct");
        let category = document.getElementById("categoryProduct");
        const newProduct = new Producto(name.value, image.value, price.value, category.value);

        //Reviso si tiene el mismo nombre
        if(verificationName(arrayOfObject, name.value)){
            arrayOfObject.forEach(element => {
                if(element.name === name.value){
                    element.picture = newProduct.picture;
                    element.price = newProduct.price;
                    element.category = newProduct.category;
                }
            })

        //Reviso que ningun campo sea nulo
        }else if((!name.value || !image.value || !price.value || !category.value) 
            || (name.value.trim() === "" || !image.value.trim() === " " || !price.value.trim() === " " )){
            alert("No puede haber un campo nulo");

        //Reviso que el precio no sea negativo
        }else if(price.value < 0){
            alert("No puede tener precio negativo");
        } else{
            //Ya se cumple la condicion 
            arrayOfObject.push(newProduct);
        }
        //Guardo en el LocalStorage
        saveToLocalStorage(arrayOfObject);

        //Reseteo los valores de los inputs
        name.value = "";
        image.value = "";
        price.value = "";
        category.value = "";
    })
    
    return arrayOfObject;
}

//---Verificar si el nombre coincide---
const verificationName = (arrayOfObject, nameProduct) =>{
    let option = false
    arrayOfObject.forEach(element => {
        if(element.name === nameProduct){
            option = true;
        }
    })
    return option;
}


//----Funcion que elimina los productos----
const deletProduct = (arrayOfObject) =>{
    const deletButton = document.getElementById("eliminar");
    deletButton.addEventListener("click", () => {
        let indice = null;
        event.preventDefault();
        let name = document.getElementById("nameProduct");
        let image = document.getElementById("pictureProduct");
        let price = document.getElementById("priceProduct");
        let category = document.getElementById("categoryProduct");

        //Si encuentra el que coincida con el nombre lo guardo en el array
        arrayOfObject.forEach((element,index) => {
            if (element.name === name.value){
                indice = index;
            }
        })
        if(indice != null){
            arrayOfObject.splice(indice,1); //Borro el elemento del array 
            saveToLocalStorage(arrayOfObject);//Guardo en el LocalStorage
        }else{
            alert("No se encontro el producto");
        }

        

        name.value = "";
        image.value = "";
        price.value = "";
        category.value = "";
    })
    return arrayOfObject;
}

//----Funcion que pinta los elementos de la categoria----
const category = () =>{
    const ulList = document.getElementById("list_filter");

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach(element => {
        element.addEventListener("click", () =>{
        
            if(element.classList.contains("clickCategory")){
                element.classList.remove("clickCategory"); //Si esta pintado lo despinta 

            }else{ //Si no esta pintado
                liElements.forEach(elemento =>{ //Recorre de nuevo la lista por si hay alguno pintado
                    if(elemento.classList.contains("clickCategory")){ //Si lo hay lo despinta 
                        elemento.classList.remove("clickCategory"); 
                    }
                })
                element.classList.add("clickCategory"); //Luego pinta el seleccionado
            }
        })
    })
};

//----Funcion que muestra los productos que estan en la store----
const mostrarStore = (arrayOfObject) =>{
    const store = document.getElementById("viewStore");
    store.innerHTML = ``
    arrayOfObject.forEach(element => {
        store.innerHTML += `
            <div class = "object__element">
                <h2> ${element.name}</h2> <br>
                <img src ="${element.picture}">
                <p>Categoria: ${element.category}</p> <br>
                <p>Precio: $${element.price}</p>
            </div>
        `
    })
}

//----Muestra todo el catalogo cuando se toca en "Todos los productos"----
const getAllProducts = (arrayOfObject) =>{
    const allProducts = document.getElementById("todos");
    allProducts.addEventListener("click",() =>{
        mostrarStore(arrayOfObject)
    });
}

//----Muestra los productos filtrados por id y categoria----
const getProducts = (arrayOfObject,id,categoryProduct) => { //Recibe un array, un id y la categoria del producto
    const product = document.getElementById(id); 
    product.addEventListener("click", () => {
        const productsFilters = arrayOfObject.filter(element => element.category === categoryProduct);
        mostrarStore(productsFilters);
        
    });
}

//----Muestra los productos filtrados por precios----
const getProductsForPrice = (arrayOfObject,id) => { //Recibe un array, un id y la categoria del producto
    const product = document.getElementById(id); 
    product.addEventListener("click", () => {
        if(product.id === "menorPrecio"){
            let sortedProducts = arrayOfObject.slice();
            sortedProducts = sortedProducts.sort((a,b) => a.price - b.price);
            mostrarStore(sortedProducts);
        }else if(product.id === "mayorPrecio"){
            let sortedProducts = arrayOfObject.slice();
            sortedProducts = sortedProducts.sort((a,b) => b.price - a.price);
            mostrarStore(sortedProducts);
        }
    });
}

//---Buca productos por nombre---
const getName = (arrayOfObject) => {
    const buttonSearch = document.getElementById("buttonSearch");
    buttonSearch.addEventListener("click", () => {
        const inputSearch = document.getElementById("inputSearch").value.toLowerCase(); //Lo paso a minuscula
        
        //Le pido que busque por nombre
        const result = getFilterForName(arrayOfObject, inputSearch);
        if(result == null){
            alert("No se encontro el producto");
        }else{
            let newArray = [];
            newArray.push(result)
            mostrarStore(newArray); //Paso el resultado de la funcion getFilterForName
            inputSearch.value = ""; //Vacio el buscador
        }
        
    })

}

//----Muestra los productos buscados por nombre---
const getFilterForName = (arrayOfObject, name) =>{
    return arrayOfObject.find(element => element.name.toLowerCase() === name) || null;
}

//=---Guardo productos en el LocalStorage----
const saveToLocalStorage = (arrayOfObject) => {
    localStorage.setItem('products', JSON.stringify(arrayOfObject)); // Convierte el array a string y lo guarda a 
}

//----Cargo productos desde el LocalStorage----
const loadFromLocalStorage = () => {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : []; // Si no hay nada en localStorage, devuelve un array vacio
}


//----Creo una clase Producto----
class Producto {
    constructor(name,picture, price, category){
        this.name = name;
        this.picture = picture;
        this.price = price;
        this.category = category;
    }
}


//Array de productos 
let productArray = loadFromLocalStorage();


addProductFunction(productArray);//Abre div para agregar productos al catalogo

createProduct(productArray);//Crea un nuevo producto y lo agrega a la lista

deletProduct(productArray);//Elimina el producto que se ingresa

getAllProducts(productArray); //Muestro todos los productos del catalogo

getProducts(productArray, "hamburguesas","Hamburguesas" ); //Muestro las hamburguesas del catalogo

getProducts(productArray, "papas", "Papas");//Muestro las papas del catalogo

getProducts(productArray, "gaseosas", "Gaseosas");//Muestro las gaseosas del catalogo

getProductsForPrice(productArray, "menorPrecio");//Muestro los productos de menor precio

getProductsForPrice(productArray, "mayorPrecio");//Muestro los productos de mayor precio

getName(productArray); //Busca un producto por nombre

category();//Le doy detalle a la categoria


