// While
var i = 0;

while (i < 10) {
  console.log(i);
  i++; // i = i + 1
};

// If if/else if/if else / else

if (i === 10) {
  console.log("i vale 10. [" + i + "]");
}

i = i + 2;

console.log();
console.log("Resultado del bloque if/else if");
if (i === 11) {
  console.log("i vale 11. [" + i + "]");
} else if (i < 12 && i < 21){
  console.log("i está entre 11 y 20. [" + i + "]");
} else {
  console.log("i es mayor que 20. [" + i + "]");
}

var name = "Leopoldo";

console.log();
console.log("Resultado del bloque switch");
// Switch
switch(name) {
  case "Leopoldo":
    console.log("Probablemente te apellidas Caballero.");
    break;
  case "Juan":
    console.log("Probablemente te apellidas Pérez.");
    break;
  default:
    console.log("No sé cuál es tu apellido: ", name);
}

// For

var frutas = ['limón', 'naranja', 'kiwi'];

for (var i = 0; i < frutas.length; i++) {
  console.log("La fruta " + frutas[i] + " es ácida.")
}

// For in

var coche = {
  color: 'café',
  plazas: 5,
  motor: 'gasolina',
  marca: 'Fiat',
};

console.log("El coche tiene las siguientes caracteristicas: ");
for (var propiedad in coche) {
  console.group();
  console.log(propiedad + ": " + coche[propiedad]);
  console.groupEnd();
}
