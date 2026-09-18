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
