//clase (Plantilla del objeto)
class Camiseta {
    //Propiedades( Carracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    //Métodos (funciones o acciones del objeto)

    //El constructor es un metodo que se usa para darle un valor al crear el objeto, solo se llama una vez al instanciarlo
    constructor(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color) {
        this.color = color;
    }
    public getColor() {
        return this.color
    }


}

var camiseta = new Camiseta("rojo","manga larga","nike","L",14)
// camiseta.setColor("gris")
camiseta.getColor()

console.log(camiseta)




