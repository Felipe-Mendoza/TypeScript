//clase (Plantilla del objeto)
var Camiseta = /** @class */ (function () {
    //Métodos (funciones o acciones del objeto)
    //El constructor es un metodo que se usa para darle un valor al crear el objeto, solo se llama una vez al instanciarlo
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
var camiseta = new Camiseta("rojo", "manga larga", "nike", "L", 14);
// camiseta.setColor("gris")
camiseta.getColor();
console.log(camiseta);
