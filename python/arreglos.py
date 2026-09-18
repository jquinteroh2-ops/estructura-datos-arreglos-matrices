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


def main() -> None:
    print("=== ARREGLOS EN PYTHON ===")

    print("\n1. Declaración y creación")
    arreglo = crear_arreglo()
    print(f"  Arreglo de {len(arreglo)} enteros aleatorios: {arreglo}")


if __name__ == "__main__":
    main()
