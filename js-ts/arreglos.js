/**
 * Arreglos en JavaScript - Estructura de Datos, Unidad 1.
 *
 * En JavaScript los arreglos (Array) son objetos dinámicos: pueden crecer,
 * encogerse y mezclar tipos. En este programa se trabaja con un arreglo de
 * 10 enteros y se respeta ese tamaño en todas las operaciones.
 *
 * Ejecución:
 *   node js-ts/arreglos.js        # busca un valor existente y uno inexistente
 *   node js-ts/arreglos.js 42     # además busca el valor 42
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

// 3. Modificación
// Para modificar se recorre por índice: en un for...of, `valor = 0` solo
// cambia la variable local del bucle (y con const ni siquiera se permite).
/** Reemplaza por 0 cada valor impar (modifica el arreglo recibido). */
function imparesACero(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 !== 0) {
      arreglo[i] = 0;
    }
  }
}

/** Multiplica cada valor por su índice (modifica el arreglo recibido). */
function multiplicarPorIndice(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] *= i;
  }
}

// 4. Búsqueda
/** Devuelve el índice de la primera aparición de `objetivo`, o -1 si no está. */
function busquedaLineal(arreglo, objetivo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === objetivo) {
      return i;
    }
  }
  return -1;
}

function mostrarBusqueda(arreglo, objetivo) {
  const indice = busquedaLineal(arreglo, objetivo);
  if (indice !== -1) {
    console.log(`  El valor ${objetivo} está en la posición ${indice}.`);
  } else {
    console.log(`  El valor ${objetivo} no se encuentra en el arreglo.`);
  }
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

  console.log("\n3. Modificación (cada operación sobre una copia del original)");
  // Los arreglos se pasan por referencia: sin la copia [...] se alteraría `arreglo`.
  const impares = [...arreglo];
  imparesACero(impares);
  console.log(`  Original:                      ${formatear(arreglo)}`);
  console.log(`  a) Impares cambiados por 0:    ${formatear(impares)}`);
  const porIndice = [...arreglo];
  multiplicarPorIndice(porIndice);
  console.log(`  b) Multiplicado por su índice: ${formatear(porIndice)}`);

  console.log(`\n4. Búsqueda lineal en ${formatear(arreglo)}`);
  // Un valor que sí existe (tomado del arreglo) y uno que no (fuera del rango).
  mostrarBusqueda(arreglo, arreglo[enteroAleatorio(0, arreglo.length - 1)]);
  mostrarBusqueda(arreglo, VALOR_MINIMO - 1);
  // Valor dado por el usuario: node js-ts/arreglos.js 42
  const argumento = process.argv[2];
  if (argumento !== undefined) {
    // Number() convierte el texto; a diferencia de int() en Python no lanza
    // error: devuelve NaN si el texto no es un número.
    const objetivo = Number(argumento);
    if (argumento.trim() !== "" && Number.isInteger(objetivo)) {
      mostrarBusqueda(arreglo, objetivo);
    } else {
      console.log(`  '${argumento}' no es un número entero válido.`);
    }
  }
}

main();
