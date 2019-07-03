// Functions

function simple() {}; // Definition

simple(); // Call/Execute

var a = 1;

function more_complex() {
  a = 6;
};

// Qué imprime?
console.log("a: ", a);
console.log("se ejecuta: more_complex");
more_complex();
console.log("a: ", a);

function even_more_complex(num) {
  return num + 7;
};

// Qué imprime?
console.log();
console.log("a: ", a);
console.log("se ejecuta: even_more_complex");
var b = even_more_complex(a);
console.log("a: ", a);
console.log("b: ", b);
