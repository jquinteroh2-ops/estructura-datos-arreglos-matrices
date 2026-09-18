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


def main() -> None:
    print("=== MATRICES EN PYTHON ===")

    print("\n1. Declaración e inicialización")
    matriz = crear_matriz()
    print(f"  Matriz {len(matriz)}x{len(matriz[0])} con valores del 1 al 9: {matriz}")


if __name__ == "__main__":
    main()
