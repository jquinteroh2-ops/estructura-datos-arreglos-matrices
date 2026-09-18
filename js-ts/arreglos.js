/**
 * Arreglos en JavaScript - Estructura de Datos, Unidad 1.
 *
 * En JavaScript los arreglos (Array) son objetos dinámicos: pueden crecer,
 * encogerse y mezclar tipos. En este programa se trabaja con un arreglo de
 * 10 enteros y se respeta ese tamaño en todas las operaciones.
 *
 * Ejecución:
 *   node js-ts/arreglos.js
 */

const TAMANO = 10;
const VALOR_MINIMO = 1;
const VALOR_MAXIMO = 100;

/** Entero aleatorio entre minimo y maximo (ambos incluidos). */
function enteroAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

/** Representa el arreglo como [a, b, c] (igual que print en Python). */
function formatear(arreglo) {
  return `[${arreglo.join(", ")}]`;
}

// 1. Declaración y creación
/** Crea un arreglo de `tamano` enteros con valores aleatorios. */
function crearArreglo(tamano = TAMANO) {
  // Declaración: se reservan `tamano` posiciones inicializadas en 0.
  const arreglo = new Array(tamano).fill(0);
  // Inicialización: se asigna un valor aleatorio a cada posición.
  // Forma idiomática equivalente en una sola línea:
  //   Array.from({ length: tamano }, () => enteroAleatorio(VALOR_MINIMO, VALOR_MAXIMO))
  for (let i = 0; i < tamano; i++) {
    arreglo[i] = enteroAleatorio(VALOR_MINIMO, VALOR_MAXIMO);
  }
  return arreglo;
}

// 2. Recorrido e impresión
/** Recorre el arreglo por índice con el for clásico. */
function imprimirConForClasico(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    console.log(`    arreglo[${i}] = ${arreglo[i]}`);
  }
}

/** Recorre el arreglo elemento por elemento con for...of (el for-each de JS). */
function imprimirConForEach(arreglo) {
  process.stdout.write("    ");
  for (const valor of arreglo) {
    process.stdout.write(`${valor} `);
  }
  console.log();
}

/** Método forEach: recibe una función que se llama con (valor, indice). */
function imprimirConMetodoForEach(arreglo) {
  arreglo.forEach((valor, indice) => {
    console.log(`    [${indice}] -> ${valor}`);
  });
}

function main() {
  console.log("=== ARREGLOS EN JAVASCRIPT ===");

  console.log("\n1. Declaración y creación");
  const arreglo = crearArreglo();
  console.log(`  Arreglo de ${arreglo.length} enteros aleatorios: ${formatear(arreglo)}`);

  console.log("\n2. Recorrido e impresión");
  console.log("  a) Con for clásico (por índice):");
  imprimirConForClasico(arreglo);
  console.log("  b) Con for-each (for...of, por elemento):");
  imprimirConForEach(arreglo);
  console.log("  c) Con for-each + índice (método forEach):");
  imprimirConMetodoForEach(arreglo);
}

main();
