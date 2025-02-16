// Initialize count to 0
let count = 0;


function increaseCount() {
    count++; // Increment count by 1
    displayCount(); // call the displayCount function to display the count
    checkCountValue(); // Check count value and display messages
}


function displayCount() {
    //Display the count in html
    document.getElementById('countDisplay').innerHTML = count;
}


function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}