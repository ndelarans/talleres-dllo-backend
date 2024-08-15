function convertidorTemp(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Obtener la temperatura en Celsius desde el usuario
let temperaturaCelsius = parseFloat(prompt("Introduce la temperatura en Celsius:"));

// Verificar si la entrada es un número válido
if (!isNaN(temperaturaCelsius)) {
    let temperaturaFahrenheit = convertidorTemp(temperaturaCelsius);
    console.log(`${temperaturaCelsius}°C son ${temperaturaFahrenheit}°F`);
} else {
    console.log("Por favor, introduce un número válido.");
}
