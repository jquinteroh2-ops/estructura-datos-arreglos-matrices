"""
Matrices en Python - Estructura de Datos, Unidad 1.

Python no tiene un tipo matriz nativo: una matriz se representa como una
lista de listas, donde cada lista interna es una fila.

Ejecución:
    python python/matrices.py
"""

FILAS = 3
COLUMNAS = 3


# 1. Declaración e inicialización
def crear_matriz(filas: int = FILAS, columnas: int = COLUMNAS) -> list[list[int]]:
    """Crea una matriz filas x columnas con valores consecutivos desde 1."""
    # Declaración: cada fila debe ser una lista distinta. Escribir
    # [[0] * columnas] * filas crearía filas que son LA MISMA lista.
    matriz = [[0] * columnas for _ in range(filas)]
    # Inicialización: valores del 1 al filas*columnas (1..9 en una 3x3).
    # Equivalente literal: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    valor = 1
    for i in range(filas):
        for j in range(columnas):
            matriz[i][j] = valor
            valor += 1
    return matriz


# 2. Recorrido
def imprimir_tabla(matriz: list[list[int]]) -> None:
    """Imprime la matriz en forma de tabla, recorriéndola fila por fila."""
    separador = "    +" + "----+" * len(matriz[0])
    print(separador)
    for i in range(len(matriz)):              # filas
        linea = "    |"
        for j in range(len(matriz[i])):       # columnas de la fila i
            linea += f" {matriz[i][j]:2d} |"
        print(linea)
        print(separador)


def recorrer_por_columnas(matriz: list[list[int]]) -> None:
    """Recorre la matriz columna por columna: el bucle externo va sobre columnas."""
    for j in range(len(matriz[0])):           # columnas
        linea = f"    Columna {j}:"
        for i in range(len(matriz)):          # filas de la columna j
            linea += f" {matriz[i][j]}"
        print(linea)


# 3. Operaciones
def sumar_elementos(matriz: list[list[int]]) -> int:
    """Suma todos los elementos de la matriz."""
    # Forma idiomática equivalente: sum(sum(fila) for fila in matriz)
    total = 0
    for fila in matriz:
        for valor in fila:
            total += valor
    return total


def main() -> None:
    print("=== MATRICES EN PYTHON ===")

    print("\n1. Declaración e inicialización")
    matriz = crear_matriz()
    print(f"  Matriz {len(matriz)}x{len(matriz[0])} con valores del 1 al 9: {matriz}")

    print("\n2. Recorrido")
    print("  a) En forma de tabla (por filas):")
    imprimir_tabla(matriz)
    print("  b) Por columnas:")
    recorrer_por_columnas(matriz)

    print("\n3. Operaciones")
    print(f"  a) Suma de todos los elementos: {sumar_elementos(matriz)}")


if __name__ == "__main__":
    main()
