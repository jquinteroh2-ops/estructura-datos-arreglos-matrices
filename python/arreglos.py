"""
Arreglos en Python - Estructura de Datos, Unidad 1.

Python no tiene un arreglo de tamaño fijo como tipo básico: se usa la lista
(list), que es dinámica. En este programa se trabaja con una lista de 10
enteros y se respeta ese tamaño en todas las operaciones.

Ejecución:
    python python/arreglos.py
"""

import random

TAMANO = 10
VALOR_MINIMO = 1
VALOR_MAXIMO = 100


# 1. Declaración y creación
def crear_arreglo(tamano: int = TAMANO) -> list[int]:
    """Crea un arreglo de `tamano` enteros con valores aleatorios."""
    # Declaración: se reservan `tamano` posiciones inicializadas en 0.
    arreglo = [0] * tamano
    # Inicialización: se asigna un valor aleatorio a cada posición.
    # Forma idiomática equivalente en una sola línea:
    #   [random.randint(VALOR_MINIMO, VALOR_MAXIMO) for _ in range(tamano)]
    for i in range(tamano):
        arreglo[i] = random.randint(VALOR_MINIMO, VALOR_MAXIMO)
    return arreglo


# 2. Recorrido e impresión
def imprimir_con_for_clasico(arreglo: list[int]) -> None:
    """Recorre el arreglo por índice (equivalente al for clásico de C o JS)."""
    for i in range(len(arreglo)):
        print(f"    arreglo[{i}] = {arreglo[i]}")


def imprimir_con_for_each(arreglo: list[int]) -> None:
    """Recorre el arreglo elemento por elemento, sin usar índices."""
    print("    ", end="")
    for valor in arreglo:
        print(valor, end=" ")
    print()


def imprimir_con_enumerate(arreglo: list[int]) -> None:
    """For-each que además entrega el índice de cada elemento."""
    for indice, valor in enumerate(arreglo):
        print(f"    [{indice}] -> {valor}")


def main() -> None:
    print("=== ARREGLOS EN PYTHON ===")

    print("\n1. Declaración y creación")
    arreglo = crear_arreglo()
    print(f"  Arreglo de {len(arreglo)} enteros aleatorios: {arreglo}")

    print("\n2. Recorrido e impresión")
    print("  a) Con for clásico (por índice):")
    imprimir_con_for_clasico(arreglo)
    print("  b) Con for-each (por elemento):")
    imprimir_con_for_each(arreglo)
    print("  c) Con for-each + índice (enumerate):")
    imprimir_con_enumerate(arreglo)


if __name__ == "__main__":
    main()
