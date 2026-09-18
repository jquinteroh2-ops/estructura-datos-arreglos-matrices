/**
 * Matrices en JavaScript - Estructura de Datos, Unidad 1.
 *
 * JavaScript no tiene un tipo matriz nativo: una matriz se representa como un
 * arreglo de arreglos, donde cada arreglo interno es una fila.
 *
 * Ejecución:
 *   node js-ts/matrices.js
 */

const FILAS = 3;
const COLUMNAS = 3;

/** Representa la matriz como [[a, b], [c, d]] (igual que print en Python). */
function formatear(matriz) {
  return `[${matriz.map((fila) => `[${fila.join(", ")}]`).join(", ")}]`;
}

// 1. Declaración e inicialización
/** Crea una matriz filas x columnas con valores consecutivos desde 1. */
function crearMatriz(filas = FILAS, columnas = COLUMNAS) {
  // Declaración: cada fila debe ser un arreglo distinto. Escribir
  // new Array(filas).fill(new Array(columnas).fill(0)) crearía filas que
  // son EL MISMO arreglo.
  const matriz = Array.from({ length: filas }, () => new Array(columnas).fill(0));
  // Inicialización: valores del 1 al filas*columnas (1..9 en una 3x3).
  // Equivalente literal: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  let valor = 1;
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      matriz[i][j] = valor;
      valor++;
    }
  }
  return matriz;
}

function main() {
  console.log("=== MATRICES EN JAVASCRIPT ===");

  console.log("\n1. Declaración e inicialización");
  const matriz = crearMatriz();
  console.log(`  Matriz ${matriz.length}x${matriz[0].length} con valores del 1 al 9: ${formatear(matriz)}`);
}

main();
