//string

var cadena: string = "Prueba1";


//numero
var numero: number = 2



//boolean

var sentencia: boolean = true
console.log(cadena, numero, sentencia)

//any--> podemos colocar cualquier tipo de datos

var cualquierValor: any = "cualquier tipo de dato"

//array
var arreglo: Array<string> = ["PHP", "JAVA"]

var year: any[] = ["DOCE", 12, 13]


console.log(cadena, numero, sentencia, cualquierValor, year)

//Declaracion personalizada

var cadena2: string | number = 12;
console.log(cadena2)

//Utilizamos la palabra reservada type

type alfanumerico = string | number;
var numeroYletra: alfanumerico = 345
console.log(numeroYletra)
