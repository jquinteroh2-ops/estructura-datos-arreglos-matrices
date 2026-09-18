# Comparativa de lenguajes: Python vs JavaScript

Análisis de la sintaxis y el comportamiento de arreglos y matrices en los dos
lenguajes usados en el proyecto. Cada sección se escribió al terminar el bloque
de código correspondiente.

---

## 1. Arreglos

### 1.1 Python (`python/arreglos.py`)

- **Tipo de dato:** Python no tiene un arreglo de tamaño fijo como tipo básico. Se usa
  `list`, una estructura **dinámica** (crece con `append`, se reduce con `pop`).
  Para arreglos homogéneos y compactos existe el módulo `array`, pero en la práctica
  se usa `list`.
- **Tipado:** dinámico y **fuerte**. La variable no tiene tipo, el valor sí, y Python no
  convierte tipos implícitamente (`"3" + 1` lanza `TypeError`). Las anotaciones
  `list[int]` son opcionales y solo documentan: el intérprete no las valida al ejecutar.
- **Declaración e inicialización:**
  ```python
  arreglo = [0] * 10                                   # reserva 10 posiciones en 0
  arreglo = [random.randint(1, 100) for _ in range(10)] # comprensión de listas
  ```
- **For clásico:** no existe el `for (i = 0; i < n; i++)`. Su equivalente es iterar sobre
  `range(len(arreglo))`.
- **For-each:** `for valor in arreglo:` entrega **una copia de la referencia** a cada
  elemento; asignar `valor = 0` no modifica la lista. Por eso las modificaciones se
  hacen por índice (`arreglo[i] = 0`). `enumerate(arreglo)` entrega índice y valor juntos.
- **Paso a funciones:** la lista se pasa por referencia al mismo objeto; si la función la
  modifica, el cambio se ve afuera. Para trabajar sobre una copia se usa `arreglo.copy()`.
- **Búsqueda:** además de la búsqueda lineal manual, Python ofrece `valor in arreglo`
  (booleano) y `arreglo.index(valor)`, que lanza `ValueError` si no lo encuentra
  (no devuelve `-1`).
- **Acceso fuera de rango:** `arreglo[10]` en una lista de 10 elementos lanza
  `IndexError`. Los índices negativos son válidos: `arreglo[-1]` es el último elemento.

### 1.2 JavaScript (`js-ts/arreglos.js`)

- **Tipo de dato:** `Array` es un objeto **dinámico**: crece con `push`, se reduce con `pop`,
  y su propiedad `length` se puede modificar. Puede mezclar tipos (`[1, "a", true]`).
  Para datos numéricos de tamaño fijo existen los *typed arrays* (`Int32Array`), cuyo
  tamaño no cambia.
- **Tipado:** dinámico y **débil**. La variable no tiene tipo y el lenguaje convierte
  tipos implícitamente: `"3" + 1` da `"31"` y `"3" * 1` da `3`. Por eso se compara con
  `===` (sin conversión) y no con `==`.
- **Declaración e inicialización:**
  ```js
  const arreglo = new Array(10).fill(0);                      // reserva 10 posiciones en 0
  const arreglo = Array.from({ length: 10 }, () => aleatorio()); // forma idiomática
  ```
  `const` impide reasignar la variable, pero **no** impide modificar el contenido del arreglo.
- **For clásico:** existe tal cual: `for (let i = 0; i < arreglo.length; i++)`.
- **For-each:** hay dos formas. `for (const valor of arreglo)` recorre los valores, y el
  método `arreglo.forEach((valor, indice) => ...)` recibe una función. Igual que en Python,
  asignar al `valor` del bucle no modifica el arreglo. Cuidado: `for...in` recorre los
  **índices como texto** (`"0"`, `"1"`...), no los valores.
- **Paso a funciones:** el arreglo se pasa por referencia; para copiarlo se usa el
  operador *spread* `[...arreglo]` o `arreglo.slice()`.
- **Búsqueda:** `arreglo.indexOf(valor)` devuelve `-1` si no lo encuentra, igual que la
  búsqueda lineal implementada; `arreglo.includes(valor)` devuelve un booleano.
- **Acceso fuera de rango:** `arreglo[10]` **no lanza error**, devuelve `undefined`.
  Los índices negativos no funcionan con `[]` (`arreglo[-1]` es `undefined`), pero sí
  con `arreglo.at(-1)`.
- **Conversión de texto a número:** `Number("abc")` no lanza error, devuelve `NaN`; en
  Python `int("abc")` lanza `ValueError`.

### 1.3 Diferencias clave en arreglos

| Aspecto | Python | JavaScript |
|---|---|---|
| Tipo usado | `list` | `Array` |
| Tipado | Dinámico y **fuerte** (no convierte tipos implícitamente) | Dinámico y **débil** (conversiones implícitas) |
| Tipos de los elementos | Puede mezclar tipos | Puede mezclar tipos |
| Tamaño | Dinámico (`append`, `pop`) | Dinámico (`push`, `pop`, `length` modificable) |
| Crear 10 posiciones en 0 | `[0] * 10` | `new Array(10).fill(0)` |
| Crear con valores calculados | `[f() for _ in range(10)]` | `Array.from({ length: 10 }, f)` |
| Número aleatorio entero | `random.randint(1, 100)` | `Math.floor(Math.random() * 100) + 1` |
| Longitud | `len(arreglo)` (función) | `arreglo.length` (propiedad) |
| For clásico | `for i in range(len(arreglo))` | `for (let i = 0; i < arreglo.length; i++)` |
| For-each | `for valor in arreglo` | `for (const valor of arreglo)` / `arreglo.forEach(...)` |
| For-each con índice | `for i, valor in enumerate(arreglo)` | `arreglo.forEach((valor, i) => ...)` |
| Modificar desde el for-each | No afecta al arreglo | No afecta al arreglo |
| Copia superficial | `arreglo.copy()` | `[...arreglo]` |
| Búsqueda nativa | `arreglo.index(v)` → `ValueError` si no está | `arreglo.indexOf(v)` → `-1` si no está |
| Índice fuera de rango | Lanza `IndexError` | Devuelve `undefined` |
| Último elemento | `arreglo[-1]` | `arreglo.at(-1)` o `arreglo[arreglo.length - 1]` |
| Igualdad | `==` compara valor | `===` estricta (`==` convierte tipos) |
| Convención de nombres | `snake_case` (`crear_arreglo`) | `camelCase` (`crearArreglo`) |
| Bloques de código | Indentación y `:` | Llaves `{ }` |

**Conclusión del bloque:** ninguno de los dos lenguajes tiene, como tipo básico, el arreglo
estático de tamaño fijo de lenguajes como C. Ambos usan estructuras dinámicas, y el tamaño
de 10 lo mantiene el programa. La diferencia más importante es el tipado: Python detiene la
ejecución ante operaciones entre tipos incompatibles o accesos inválidos, mientras que
JavaScript intenta convertir tipos o devuelve `undefined`/`NaN`. Eso obliga a validar más
en JavaScript.

---

## 2. Matrices

### 2.1 Python (`python/matrices.py`)

- **Representación:** no hay un tipo matriz nativo; se usa una **lista de listas**
  (`list[list[int]]`), donde cada lista interna es una fila. Para cálculo numérico se
  usa la librería externa NumPy (`numpy.array`), que aquí no se utiliza.
- **Declaración e inicialización:**
  ```python
  matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]      # literal
  matriz = [[0] * 3 for _ in range(3)]            # 3x3 en ceros, cada fila es una lista nueva
  ```
  **Trampa común:** `[[0] * 3] * 3` crea tres referencias a **la misma fila**; al cambiar
  `matriz[0][0]` cambian las tres filas.
- **Acceso:** `matriz[i][j]` (fila `i`, columna `j`). Dimensiones: `len(matriz)` filas y
  `len(matriz[0])` columnas.
- **Recorrido por filas (tabla):** bucle externo sobre filas y bucle interno sobre
  columnas. También se puede hacer con for-each anidado (`for fila in matriz: for valor in fila:`).
- **Recorrido por columnas:** se invierten los bucles: el externo va sobre las columnas
  `j` y el interno sobre las filas `i`, accediendo a `matriz[i][j]`.
- **Suma:** con bucles anidados, o en una línea: `sum(sum(fila) for fila in matriz)`.
- **Intercambio de filas:** la asignación múltiple `matriz[0], matriz[-1] = matriz[-1], matriz[0]`
  intercambia sin variable temporal. Solo se intercambian las **referencias** a las filas,
  no se copian sus elementos. `matriz[-1]` accede a la última fila sin calcular el índice.
