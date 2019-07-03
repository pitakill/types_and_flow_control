// undefined
var a;

// null;
var b = null;

// boolean
var c = false; // true

// number
var d = 0; // Número entero o flotante

// string
var e = ""; // Cadena vacía

// Qué imprime?
console.log("Este es con triple igualdad");
console.log();
console.log("a: ", a);
console.log("b: ", b);
console.group();
console.assert(a === b);
console.groupEnd();

console.log();
console.log("b: ", b);
console.log("c: ", c);
console.group();
console.assert(b === c);
console.groupEnd();

console.log();
console.log("c: ", c);
console.log("d: ", d);
console.group();
console.assert(c === d);
console.groupEnd();

console.log();
console.log("d: ", d);
console.log("e: ", e);
console.group();
console.assert(d === e);
console.groupEnd();

// Qué imprime?
console.log();
console.log("Este es con doble igualdad");
console.log();
console.log("a: ", a);
console.log("b: ", b);
console.group();
console.assert(a == b);
console.groupEnd();

console.log();
console.log("b: ", b);
console.log("c: ", c);
console.group();
console.assert(b == c);
console.groupEnd();

console.log();
console.log("c: ", c);
console.log("d: ", d);
console.group();
console.assert(c == d);
console.groupEnd();

console.log();
console.log("d: ", d);
console.log("e: ", e);
console.group();
console.assert(d == e);
console.groupEnd();
