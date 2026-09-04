// ================================
// ELEMENTOS HTML
// ================================

// Color picker
const colorPicker = document.getElementById("colorPicker");

// Recuadro
const colorBox = document.getElementById("colorBox");

// Códigos
const rgbCode = document.getElementById("rgbCode");
const hexCode = document.getElementById("hexCode");

// Inputs numéricos
const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

// Sliders
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

// Valores de los sliders
const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");


// ================================
// HEXADECIMAL
// ================================

function convertirHex(valor) {

    return Number(valor)
        .toString(16)
        .padStart(2, "0");

}


// ================================
// RGB → HEX
// ================================

function rgbAHex(r, g, b) {

    return `#${convertirHex(r)}${convertirHex(g)}${convertirHex(b)}`;

}


// ================================
// ACTUALIZAR TODO
// ================================

function actualizarColor(r, g, b) {

    // Convertir a números
    r = Number(r);
    g = Number(g);
    b = Number(b);

    // Crear RGB
    const rgb = `rgb(${r}, ${g}, ${b})`;

    // Crear HEX
    const hex = rgbAHex(r, g, b);

    // Cambiar recuadro
    colorBox.style.backgroundColor = rgb;

    // Mostrar RGB
    rgbCode.textContent = rgb;

    // Mostrar HEX
    hexCode.textContent = hex.toUpperCase();

    // Actualizar inputs
    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;

    // Actualizar sliders
    red.value = r;
    green.value = g;
    blue.value = b;

    // Mostrar valores
    redValue.textContent = r;
    greenValue.textContent = g;
    blueValue.textContent = b;

    // Actualizar color picker
    colorPicker.value = hex;

}


// ================================
// COLOR PICKER
// ================================

colorPicker.addEventListener("input", function() {

    // Obtener HEX
    const hex = colorPicker.value;

    // Convertir HEX a RGB
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    // Actualizar todo
    actualizarColor(r, g, b);

});


// ================================
// SLIDER ROJO
// ================================

red.addEventListener("input", function() {

    actualizarColor(
        red.value,
        green.value,
        blue.value
    );

});


// ================================
// SLIDER VERDE
// ================================

green.addEventListener("input", function() {

    actualizarColor(
        red.value,
        green.value,
        blue.value
    );

});


// ================================
// SLIDER AZUL
// ================================

blue.addEventListener("input", function() {

    actualizarColor(
        red.value,
        green.value,
        blue.value
    );

});


// ================================
// INPUT ROJO
// ================================

redInput.addEventListener("input", function() {

    let r = Number(redInput.value);

    if (r < 0) r = 0;
    if (r > 255) r = 255;

    actualizarColor(
        r,
        greenInput.value,
        blueInput.value
    );

});


// ================================
// INPUT VERDE
// ================================

greenInput.addEventListener("input", function() {

    let g = Number(greenInput.value);

    if (g < 0) g = 0;
    if (g > 255) g = 255;

    actualizarColor(
        redInput.value,
        g,
        blueInput.value
    );

});


// ================================
// INPUT AZUL
// ================================

blueInput.addEventListener("input", function() {

    let b = Number(blueInput.value);

    if (b < 0) b = 0;
    if (b > 255) b = 255;

    actualizarColor(
        redInput.value,
        greenInput.value,
        b
    );

});


// ================================
// COLOR INICIAL
// ================================

actualizarColor(0, 0, 0);
