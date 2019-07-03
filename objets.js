// Object
var f = {}; // Empty

// Array (One type of Object) Indexed
var g = []; // Empty

// Qué imprime?
var h = f;

console.log("f: ", f);
console.log("h: ", h);
console.group();
console.assert(f === h);
console.groupEnd();

var i = g;

console.log();
console.log("g: ", g);
console.log("i: ", i);
console.group();
console.assert(g === i);
console.groupEnd();

// Reasignar f con algunas propiedades nuevas
f = {
  name: 'Leopoldo',
  lastname: 'Caballero',
  work: {
    languages: ['JS', 'Go']
  }
};

// Copiar de nuevo (Referenciar) h a f
h = f;

// Modificar h

h.work = {
  languages: ['Go', 'JS', 'Bash']
};

// Qué imprime?
console.log();
console.log("f: ", f);
console.log("h: ", h);
console.group();
console.assert(f === h);
console.groupEnd();

// Reasignar g
g = [1, 'Leopoldo', [6,7]];

// Copiar de nuevo (Referenciar) g a i
i = g;

// Modificar i

i[1] = 'Caballero';

// Qué imprime?
console.log();
console.log("g: ", g);
console.log("i: ", i);
console.group();
console.assert(g === i);
console.groupEnd();
