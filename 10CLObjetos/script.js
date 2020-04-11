var arreglo = [1, 2, 5, 8];
//No tiene un orden 
//Llave: valor

//JSON

//JavaScript
//Object
//Notation


var objeto = {
    //Atributos
    nombre: "La noche estrellada",
    autor: "Van Gogh",
    tecnica: "Óleo sobre tela",
    colores: ["#FFFFFF", ],
    anio: 1889,
    lugar: "Amsterdam",
    mensaje: "Es  una obra muy linda",
    museo: "Esta obra esta en el museo de Van Gogh",


    //Métodos
    calcularEdad: function () {
        return 2020 - this.anio
    },
    numeroColores: function () {
        if (this.colores.length === 1) {

            return "la pintura " + this.nombre + " tiene " + this.colores.length + " color "
        } else {
            return "la pintura " + this.nombre + " tiene " + this.colores.length + " colores "
        }
    },


    obtenerInfo: function(){
        return " La obra " + this.nombre + " fue pintada por " + this.autor + " en  el  año " + this.anio
    },

}

console.log(objeto);
console.log(objeto.nombre);

console.log(objeto.calcularEdad());
console.log(objeto.numeroColores());
console.log(objeto.obtenerInfo());
