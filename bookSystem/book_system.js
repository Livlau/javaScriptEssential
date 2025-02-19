let books = [];

function addBook() {
    //get data from user input
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDesciption = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    //data validation
    if (bookName && authorName && bookDesciption && !isNaN(pagesNumber)) {
        //create a book object
        const book = {
            bookName: bookName,
            authorName: authorName,
            bookDesciption: bookDesciption,
            pagesNumber: pagesNumber

        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}


function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.bookName}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDesciption}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}


function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}


function editbook(index) {
    // Get the book to edit
    const book = books[index];

    // Prompt the user for new values, allowing them to press "Cancel" to keep the original
    const newBookName = prompt("Edit Book Name:", book.bookName);
    const newAuthorName = prompt("Edit Author Name:", book.authorName);
    const newBookDescription = prompt("Edit Book Description:", book.bookDesciption);
    const newPagesNumber = prompt("Edit Number of Pages:", book.pagesNumber);

    // Update only the fields the user provided a value for
    books[index] = {
        bookName: newBookName !== null ? newBookName : book.bookName,
        authorName: newAuthorName !== null ? newAuthorName : book.authorName,
        bookDesciption: newBookDescription !== null ? newBookDescription : book.bookDesciption,
        pagesNumber: newPagesNumber !== null && !isNaN(parseInt(newPagesNumber)) ? parseInt(newPagesNumber) : book.pagesNumber
    };

    showbooks();
}


function deletebook(index) {
    books.splice(index, 1);
    showbooks();
}