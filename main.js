
const productos = [
    {
        id: 1,
        nombre: "Pizza muzzarella",
        precio:600,
        ingredientes: ["muzzarella"]
    },
    
    {
        id: 2,
        nombre: "Pizza con anana",
        precio:750,
        ingredientes:["muzzarella", "anana"]
    },
    
    {
        id: 3,
        nombre: "Pizza con morron y jamon",
        precio : 1500,
        ingredientes: ["muzzarella", "morron", "jamon"]
      
    },
    
    {
        id: 4, 
        nombre: "Pizza con jamon",
        precio: 1000,
        ingredientes: ["muzzarella", "jamon"]
    },
    
    {
        id: 5, 
        nombre:"Pizza fugazzetta",
        precio: 2000,
        ingredientes: ["muzzarella", "cebolla"]
    },
    
    {
        id: 6, 
        nombre: "Pizza con panceta y huevo",
        precio: 1000,
        ingredientes: ["muzzarella", "panceta", "huevo"]
    },
    
];

/* id impar */
const ImprimirIdImpar = () => productos.forEach(producto) => console.log( producto.id)

ImprimirIdImpar ()


// /*menor precio de 600*/
// const menoresA = () => {
//     if (productos.some((producto) => producto.precio.length <= 600)){
//         return "Hay pizzas por menos de 600 pesos"
//     } else {
//         return "No hay pizzas `por menos de 600 pesos"
//     }
// }

//  console.log (menoresA())



// /* nombre de cada pizza */
// const ImprimirNombre = () => productos.forEach((producto) => console.log(producto.nombre))

// ImprimirNombre ()


// /*precio de cada pizza*/
// /* nombre de cada pizza y su precio */
// const ImprimirPrecio = () => productos.forEach((producto) => console.log(producto.precio))

// ImprimirPrecio ()


// /* nombre de cada pizza y su precio */
// const ImprimirNombreYPrecio = () => productos.forEach((producto) => console.log("La ${producto.nombre} sale $${producto.precio}"))

// ImprimirNombreYPrecio ()

