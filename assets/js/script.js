const baseFontSize = 16; // Base font size for rem and em
const inchInPx = 96; // 1 inch = 96 px
const cmInPx = inchInPx / 2.54; // 1 cm = 96/2.54 px
const mmInPx = cmInPx / 10; // 1 mm = 1/10 of a cm
const ptInPx = inchInPx / 72; // 1 pt = 1/72 inch
const pcInPx = ptInPx * 12; // 1 pc = 12 pt

document.getElementById('convertButton').addEventListener('click', function () {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    let valueInPx;

    // Convert input value to px
    switch (inputUnit) {
        case 'px':
            valueInPx = inputValue;
            break;
        case 'rem':
        case 'em':
            valueInPx = inputValue * baseFontSize;
            break;
        case 'cm':
            valueInPx = inputValue * cmInPx;
            break;
        case 'mm':
            valueInPx = inputValue * mmInPx;
            break;
        case 'in':
            valueInPx = inputValue * inchInPx;
            break;
        case 'pt':
            valueInPx = inputValue * ptInPx;
            break;
        case 'pc':
            valueInPx = inputValue * pcInPx;
            break;
        case 'vw':
            valueInPx = inputValue * window.innerWidth / 100;
            break;
        case 'vh':
            valueInPx = inputValue * window.innerHeight / 100;
            break;
        default:
            alert('Unsupported unit');
            return;
    }

    let convertedValue;

    // Convert px to output unit
    switch (outputUnit) {
        case 'px':
            convertedValue = valueInPx;
            break;
        case 'rem':
        case 'em':
            convertedValue = valueInPx / baseFontSize;
            break;
        case 'cm':
            convertedValue = valueInPx / cmInPx;
            break;
        case 'mm':
            convertedValue = valueInPx / mmInPx;
            break;
        case 'in':
            convertedValue = valueInPx / inchInPx;
            break;
        case 'pt':
            convertedValue = valueInPx / ptInPx;
            break;
        case 'pc':
            convertedValue = valueInPx / pcInPx;
            break;
        case 'vw':
            convertedValue = valueInPx / (window.innerWidth / 100);
            break;
        case 'vh':
            convertedValue = valueInPx / (window.innerHeight / 100);
            break;
        default:
            alert('Unsupported unit');
            return;
    }

    document.getElementById('outputValue').value = convertedValue;
});