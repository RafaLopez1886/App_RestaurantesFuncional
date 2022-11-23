/*Array de restaurantes*/ 

let restaurantes = [];

restaurantes = JSON.parse(localStorage.getItem('restaurantesGuardados'));


/*Clase para crear restaurante*/ 

class Restaurante {
    
    nombreRestaurante;
    direccionRestaurante;
    descripcionRestaurante;
    imagenRestaurante;

    constructor(nombreRestaurante, direccionRestaurante, descripcionRestaurante, imagenRestaurante) {
        this.nombreRestaurante = nombreRestaurante;
        this.direccionRestaurante = direccionRestaurante;
        this.descripcionRestaurante = descripcionRestaurante;
        this.imagenRestaurante = imagenRestaurante;
    }
}

/*Función para crear restaurantes en array*/
const nuevoRestaurante = function GuardarRestaurante(nom, desc, dir,imagen)

{
    var objetoRestaurante = new Restaurante(nom,dir,desc,imagen);
    restaurantes[restaurantes.length] = objetoRestaurante;
};


/*Variables para captura de datos de restaurante*/
let nombreNuevoRestaurante;
let direccionNuevoRestaurante;
let descripcionNuevoRestaurante;
let imagenNuevoRestaurante;


/*Captura de datos de formulario Crear Restaurante*/

var obtenerDatos = function(){

    nombreNuevoRestaurante=document.getElementById("nombreNuevoRestaurante").value;
    direccionNuevoRestaurante=document.getElementById("direccionNuevoRestaurante").value;
    descripcionNuevoRestaurante=document.getElementById("descripcionNuevoRestaurante").value;
    imagenNuevoRestaurante=document.getElementById("urlImage").value; 

    console.log(restaurantes);

    nuevoRestaurante(nombreNuevoRestaurante, direccionNuevoRestaurante, descripcionNuevoRestaurante, imagenNuevoRestaurante);

    /*Esta línea me permite guardar array del lado del servidor*/

    localStorage.setItem('restaurantesGuardados', JSON.stringify(restaurantes));

}

/*Función para mostrar restaurantes de array*/ 

const despliegueRestaurante = function MostrarRestaurante() {

    /*Traigo data de array guardado para despliegue*/

    let tarjeta = document.getElementById("diseñoTarjeta");

    /*Recorro array guardado para ir desplegando por cards*/

    restaurantes.map((restaurante)=>{
        tarjeta.innerHTML += `

        <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="card shadow-sm border p-2 h-100">
                <img src="${restaurante.imagenRestaurante}" alt="Pollo_Frito" style="height:100%; width:100%"/>
                <span class="align-bottom">
                    <h2 class="card-title text-center">${restaurante.nombreRestaurante}</h2>
                    <div>
                        <h4 id="" class="text-center">${restaurante.direccionRestaurante}</h4>
                        <h3 id="" class="text-center">${restaurante.descripcionRestaurante}</h3>
                    </div>
                </span>
             </div>
        </div>

        `;

    })
}

despliegueRestaurante();

