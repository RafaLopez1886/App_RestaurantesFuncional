/*Función para mostrar restaurantes de array*/

//restaurantes = JSON.parse(localStorage.getItem('restaurantesGuardados'));

function MostrarRestaurante() {
  let tarjeta = document.getElementById("diseñoTarjeta");

  /*Recorro array guardado para ir desplegando por cards*/

  restaurantes.map((restaurante) => {
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
}

MostrarRestaurante();
