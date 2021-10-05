// Boolean
let muted: boolean = true;
muted = false;

// Numeros
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = "Antonio";
let saludo: string = `Me llamo ${nombre}`;

// Arreglos
let people: string[] = [];
people = ["isabel","raul","Nicole"];
// people.push("9000");

// Arreglos ques aceptan mas de un tipo de dato.
let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9001);

// Enum
enum Color {
    Rojo = "Rojo", Verde = "Verde", Azul = "Azul",
}
let colorFavorito: Color = Color.Verde;

// keyword 'any'
let comodin: any = "joker";
comodin = { type: 'Wildcard'};

// Object
let someObject: object = { type: 'Wilcard'};
