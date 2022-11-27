/*Clase para crear restaurante*/

class Restaurante {
  nombreRestaurante;
  direccionRestaurante;
  descripcionRestaurante;
  imagenRestaurante;

  constructor(
    nombreRestaurante,
    direccionRestaurante,
    descripcionRestaurante,
    imagenRestaurante
  ) {
    this.nombreRestaurante = nombreRestaurante;
    this.direccionRestaurante = direccionRestaurante;
    this.descripcionRestaurante = descripcionRestaurante;
    this.imagenRestaurante = imagenRestaurante;
  }
}

/*Función para crear restaurantes en array*/
const nuevoRestaurante = function GuardarRestaurante(nom, desc, dir, imagen) {
  return (objetoRestaurante = new Restaurante(nom, dir, desc, imagen));
};
