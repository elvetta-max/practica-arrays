/***
 * EJERCICIO 1
 */
console.log("============ EJERCICIO 1 ============")

let frutas = ["banana", "kiwi", "granada", "manzana"];
console.log(frutas);
console.log(`Primer valor de la lista: ${frutas[0]}`);


/***
 * EJERCICIO 2
 */
console.log("============ EJERCICIO 2 ============");

let colores = ["blanco", "negro", "rojo"];
console.log(colores);
console.log(`Ultimo valor en la lista : ${colores.pop()}`);

/***
 * EJERCICIO 3
 */
console.log("============ EJERCICIO 3 ============");

let numeros = [2, 32, 4, 33, 1, 7];

console.log(numeros);
console.log(`Añadir un valor en el inicio de la lista`);
numeros.unshift(0);
console.log(numeros);

/***
 * EJERCICIO 4
 */
console.log("============ EJERCICIO 4 ============");

let letras = ["A", "B", "C", "D"];

console.log(letras);
letras.shift();
console.log(`Quitar el ultimo valor de la lista`);
console.log(letras);

/***
 * EJERCICIO 5
 */
console.log("============ EJERCICIO 5 ============");
let trans = ["coche", "tranvia", "tren", "avion"];
console.log(trans);
trans.push("bici");
console.log(trans);

/***
 * EJERCICIO 6
 */
console.log("============ EJERCICIO 6 ============");
let paises = ["españa", "francia", "italia", "alemaña"]

console.log(paises);
paises.pop()
console.log(paises);

/***
 * EJERCICIO 7
 */
console.log("============ EJERCICIO 7 ============");

let alumnos = ["pepe", "juan", "javi", "dani"];
let alumnas = ["sara", "ana", "raquel"];
console.log(alumnas);
console.log(alumnos);
let estudiantes = alumnas.concat(alumnos);
console.log(estudiantes);

/***
 * EJERCICIO 8
 */
console.log("============ EJERCICIO 8 ============");

let chicos = ["pedro", "gabi", "antonio"]

console.log(chicos);
console.log(`pedro esta en el array? :` + chicos.includes("pedro"));

/***
 * EJERCICIO 9
 */
console.log("============ EJERCICIO 9 ============");
let bebidas = ["cocacola", "fanta", "7up", "pepsi"]
let bebida = "pepsi";

console.log(bebidas);
console.log(`El índice de la primera aparición de ${bebida} : ` + bebidas.indexOf(bebida));

/***
 * EJERCICIO 10
 */
console.log("============ EJERCICIO 10 ============");

let ciudades = ["vitoria", "sevilla", "barcelona", "bilbao"];
console.log(ciudades);
[ciudades[0], ciudades[2]] = [ciudades[2], ciudades[0]]
console.log(ciudades);

/***
 * EJERCICIO 11
 */
console.log("============ EJERCICIO 11 ============");

let myNumeros = [23, 4, 6, 32, 7, 12, 3, 5];
let suma = myNumeros.reduce((a, b) => a + b);
console.log(myNumeros);
console.log(`Suma total de los elementos ${suma}`);

/***
 * EJERCICIO 12
 */
console.log("============ EJERCICIO 12 ============");

let valores = [3, 4, 62, 23, 56, 8];

let nuevosValores = valores.map(valor => valor * 2);
console.log(valores)
console.log(`Multiplicamos X 2 : `)
console.log(nuevosValores);

/***
 * EJERCICIO 13
 */
console.log("============ EJERCICIO 13 ============");

let mValores = [23, 5, 66, 23, 70, 2, 14, 6];
let valoresMayoresQueDiez = mValores.filter(valor => valor > 10);
console.log(mValores);
console.log(`Valores mayores que 10 :`);
console.log(valoresMayoresQueDiez);

/***
 * EJERCICIO 14
 */
console.log("============ EJERCICIO 14 ============");

let edades = [30, 2, 76, 60, 22, 66, 25]

let sonTodosAdultos = edades.every(edad => edad > 18);
console.log(edades);
console.log(`Todos valores mayores a 18 ? :`)
console.log(sonTodosAdultos);


/***
 * EJERCICIO 15
 */
console.log("============ EJERCICIO 15 ============");

let nums = [10, 22, 5, 70, 91, 3, 24, 6]

console.log(nums);
console.log(`El primer número que es mayor a 25 :`)
console.log(nums.find(num => num > 25));

/***
 * EJERCICIO 16
 */
console.log("============ EJERCICIO 16 ============");

let numbers = [23, 5, 33, 12, 7, 87];
numbers.forEach(valor => {
    console.log(valor);
});

/***
 * EJERCICIO 17
 */
console.log("============ EJERCICIO 17 ============");

let misNumeros = [43, 98, 2, 12, 65, 71];
let nuevosNumsDoblads = misNumeros.map(num => num * 2);
console.log(`Lista de numeros valor originales`)
console.log(misNumeros)
console.log(`Nueva lista de numeros de valor doblado`);
console.log(nuevosNumsDoblads);

/***
 * EJERCICIO 18
 */
console.log("============ EJERCICIO 18 ============");
let nombreAlumnos = ["sara", "pedro", "dani", "javi"];
nombresAlumnosMaysculas = nombreAlumnos.map(nombreAlumno => nombreAlumno.toUpperCase());

console.log(nombreAlumnos);
console.log(`Nombre en Mayusculas :`);
console.log(nombresAlumnosMaysculas);