let length;
let width;

function calculateArea() {
    //fetch values from user as input and converts the string value retrieved from the input field to a floating-point number
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;

    // displaying this result to the user interface
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}