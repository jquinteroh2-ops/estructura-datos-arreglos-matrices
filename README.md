# Estructura de Datos — Arreglos y Matrices

Protocolo colaborativo de la Unidad 1 de la asignatura **Estructura de Datos**.
Implementación de las operaciones básicas sobre arreglos y matrices en **Python** y **JavaScript**,
con una comparativa de la sintaxis y el comportamiento de ambos lenguajes.

## Autor

- **Nombre:** Jose Antonio Quintero Herrera
- **Código:** 7502510055
- **Programa:** Ingeniería de Software — Universidad de Cartagena
- **Asignatura:** Estructura de Datos

## ¿Qué hace el proyecto?

Cada ejercicio está resuelto dos veces, una por lenguaje, con la misma lógica y la misma salida
en consola. Así se pueden comparar las dos versiones línea por línea.

### Arreglos (`arreglos.py` / `arreglos.js`)

1. **Declaración y creación:** arreglo de 10 enteros inicializado con valores aleatorios (1 a 100).
2. **Recorrido e impresión:** con `for` clásico (por índice), con `for-each` (por elemento)
   y con `for-each` + índice (`enumerate` / `forEach`).
3. **Modificación:** cambia los valores impares por cero y multiplica cada valor por su índice.
   Cada operación se aplica sobre una copia del arreglo original.
4. **Búsqueda lineal:** busca un valor que existe, uno que no existe y, opcionalmente, el valor
   que se pase como argumento en la línea de comandos.

### Matrices (`matrices.py` / `matrices.js`)

1. **Declaración e inicialización:** matriz 3x3 de enteros con los valores del 1 al 9.
2. **Recorrido:** impresión en forma de tabla (por filas) y recorrido por columnas.
3. **Operaciones:** suma de todos los elementos e intercambio de la primera fila con la última.

La comparativa de sintaxis y diferencias entre los dos lenguajes está en
[`docs/comparativa-lenguajes.md`](docs/comparativa-lenguajes.md).

## Requisitos

- **Python 3.9** o superior.
- **Node.js 18** o superior.
- No se necesita instalar dependencias: solo se usa la librería estándar de cada lenguaje.

## Cómo ejecutar

Desde la raíz del repositorio:

### Python

```bash
python python/arreglos.py        # arreglos: busca un valor existente y uno inexistente
python python/arreglos.py 42     # arreglos: además busca el valor 42
python python/matrices.py        # matrices 3x3
```

### JavaScript

```bash
node js-ts/arreglos.js           # arreglos: busca un valor existente y uno inexistente
node js-ts/arreglos.js 42        # arreglos: además busca el valor 42
node js-ts/matrices.js           # matrices 3x3
```

### Ejemplo de salida (matrices)

```
=== MATRICES EN PYTHON ===

1. Declaración e inicialización
  Matriz 3x3 con valores del 1 al 9: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

2. Recorrido
  a) En forma de tabla (por filas):
    +----+----+----+
    |  1 |  2 |  3 |
    +----+----+----+
    |  4 |  5 |  6 |
    +----+----+----+
    |  7 |  8 |  9 |
    +----+----+----+
  b) Por columnas:
    Columna 0: 1 4 7
    Columna 1: 2 5 8
    Columna 2: 3 6 9

3. Operaciones
  a) Suma de todos los elementos: 45
  b) Intercambio de la primera fila con la última:
    +----+----+----+
    |  7 |  8 |  9 |
    +----+----+----+
    |  4 |  5 |  6 |
    +----+----+----+
    |  1 |  2 |  3 |
    +----+----+----+
```

## Estructura de carpetas

```
/python/
  arreglos.py                 -> arreglos en Python
  matrices.py                 -> matrices en Python
/js-ts/
  arreglos.js                 -> arreglos en JavaScript
  matrices.js                 -> matrices en JavaScript
/docs/
  comparativa-lenguajes.md    -> análisis de sintaxis y diferencias entre Python y JavaScript
README.md
```

## Flujo de trabajo con Git

Cada bloque de trabajo se desarrolló en su propia rama, con commits por cada punto del
enunciado, y se integró a `main` con un merge:

| Rama | Contenido |
|---|---|
| `rama-arreglos-python` | `python/arreglos.py` y comparativa de arreglos en Python |
| `rama-arreglos-js` | `js-ts/arreglos.js` y comparativa de arreglos Python vs JavaScript |
| `rama-matrices-python` | `python/matrices.py` y comparativa de matrices en Python |
| `rama-matrices-js` | `js-ts/matrices.js`, comparativa de matrices y resumen general |
| `rama-documentacion` | README final |

Para ver el historial con las ramas y sus merges:

```bash
git log --oneline --graph --all
```
