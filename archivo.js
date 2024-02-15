function calcularRaizResta(a, b, c) {
    // Calcular el discriminante
    var discriminante = b * b - 4 * a * c;

    // Verificar si el discriminante es negativo (no hay raíces reales)
    if (discriminante < 0) {
        return 'No hay raíces reales';
    }

    // Calcular la raíz cuadrática con la versión que resta
    var raizResta = (-b - Math.sqrt(discriminante)) / (2 * a);

    return 'Raíz (-): ' + raizResta;
}

// Ejemplo de uso
var a = 1;
var b = -3;
var c = 2;

var resultado = calcularRaizResta(a, b, c);
console.log(resultado);