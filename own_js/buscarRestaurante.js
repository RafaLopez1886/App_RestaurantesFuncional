let valorBuscado;

let arrayResultados = new Array();

let tarjeta = document.getElementById("diseñoTarjetaBusqueda");

const buscaArray = function buscarEnArray() {
  tarjeta.innerHTML = "";

  arrayResultados.length = 0;

  valorBuscado = document.getElementById("valorBuscado").value;

  valorBuscado = valorBuscado.toLowerCase();

  console.log(valorBuscado);
  console.log(typeof restaurantes[0].nombreRestaurante);
  console.log(typeof valorBuscado);

  for (var i = 0; i < restaurantes.length; i++) {
    var nombreDeBusqueda = restaurantes[i].nombreRestaurante;
    nombreDeBusqueda = nombreDeBusqueda.toLowerCase();

    if (nombreDeBusqueda.includes(valorBuscado)) {
      var restauranteNuevo = nuevoRestaurante(
        restaurantes[i].nombreRestaurante,
        restaurantes[i].direccionRestaurante,
        restaurantes[i].descripcionRestaurante,
        restaurantes[i].imagenRestaurante
      );
      arrayResultados[arrayResultados.length] = restauranteNuevo;
      console.log(arrayResultados);
    }
  }

  if (arrayResultados.length != 0) {
    const despliegueResultados = function MostrarResultados() {
      /*Recorro array guardado para ir desplegando por cards*/

      arrayResultados.map((restaurante) => {
        tarjeta.innerHTML += `
        
                <div class="col-xs-12 col-sm-6 col-md-3">
                    <div class="card shadow-sm border p-2 h-100">
                        <img src="${restaurante.imagenRestaurante}" alt="${restaurante.nombreRestaurante}" style="height:100%; width:100%; min-height:450px;"/>
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
      });
    };

    despliegueResultados();
  } else {
    if (arrayResultados.length == 0) {
      arrayResultados.length = 0;
      tarjeta.innerHTML = "";
      window.alert("No hay resultados coincidentes con el nombre buscado.");
      console.log(arrayResultados);
    }
  }

  if (valorBuscado == "") {
    arrayResultados.length = 0;
    tarjeta.innerHTML = "";
    window.alert("Por favor, ingrese un valor en el cuadro de búsqueda.");
  }
};
