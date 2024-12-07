function convertTemp() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;

    if (isNaN(inputTemp)) {
        document.getElementById("outputResult").innerText = "Please enter a valid temperature.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (inputUnit === "Celsius") {
        celsius = inputTemp;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } else if (inputUnit === "Fahrenheit") {
        fahrenheit = inputTemp;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } else if (inputUnit === "Kelvin") {
        kelvin = inputTemp;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById("outputResult").innerHTML = `
        <strong>Converted Temperatures:</strong><br>
        Celsius: ${celsius.toFixed(2)}°C<br>
        Fahrenheit: ${fahrenheit.toFixed(2)}°F<br>
        Kelvin: ${kelvin.toFixed(2)}K
    `;
}