/*Punto1*/
function convertidorTemp(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}


/*Punto2*/

function resolvedor(a, b, c, positivo = true) {
    let discriminante = Math.sqrt(b * b - 4 * a * c);
    if (positivo) {
        return (-b + discriminante) / (2 * a);
    } else {
        return (-b - discriminante) / (2 * a);
    }
}

/*Punto3*/

function mejorParidad(numero) {
    return numero % 2 === 0;
}

/*Punto4*/

function peorParidad(numero) {
    if (numero === 0 || numero === 2 || numero === 4 || numero === 6 || numero === 8 || numero === 10) {
        return 'par';
    } else {
        return 'impar';
    }
}

console.log(peorParidad(7)); 

