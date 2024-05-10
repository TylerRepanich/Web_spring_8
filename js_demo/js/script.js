function askQuestion() {
    var q = prompt("Whats your name");
    if (q !== null) {
        document.getElementById('question').innerHTML = 'Thanks! ' + q + ' is a great color.';
    }
}

function showImage() {
    var image = document.getElementById('guyimage'); // Use a valid ID without spaces
    image.src = "images/guyglasses.jpg"; // Specify the file extension (e.g., .jpg or .png)
}

