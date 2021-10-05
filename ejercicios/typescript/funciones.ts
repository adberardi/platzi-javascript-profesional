// Funciones
function add(a: number, b: number) {
    return a + b;
}

// function nameFunction (arg1, ..., argn): tipo_valor_a_retornar { return .... }
function addExplicit(a: number, b: number): number {
    return a + b;
}

const sum = add(4,6);


// Funciones que retornan otras funciones
function createOther(a: number): (number) => number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createOther(4);
const fourPlus6= addFour(6);

// Funciones con parametros opcionales
function fullName(firstName: string, lastName?: string): string {
    // Puede retornar `undefined` en caso de que lastname sea nulo.
    return `${firstName} ${lastName}`;
}

function fullNameOmision(firstName: string, lastName: string = "Smith"): string {
    // En caso de que lastname sea nulo, por omision tendra valor de "Smith".
    return `${firstName} ${lastName}`;
}

const antonio = fullName('Antonio');
const antonio2 = fullNameOmision('Antonio');