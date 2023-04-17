// Function for a new Book object
function Book(title, author, pages, cover, genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.cover = cover;
    this.genre = genre
}

// Tester objects so I don't have to add a book via browser
let book1 = new Book("Book Thief", "Markus Zusak", 608, 
        "https://target.scene7.com/is/image/Target/GUEST_c0f92136-6bb9-45b1-8604-0d98d3b5ae61?wid=488&hei=488&fmt=pjpeg", "Historical Fiction");
let book2 = new Book("Project Hail Mary", "Andy Weir", 496, 
        "https://target.scene7.com/is/image/Target/GUEST_c4639dd9-42ee-4652-9fdd-2b81ca52207c?wid=488&hei=488&fmt=pjpeg", "Science Fiction");

let myLibrary = [book1, book2];

function appendBook(book, index) {
    // Create general book container (allows for flex styling)
    let bookContainer = document.createElement('div');
    bookContainer.classList.add("book-container");
    bookContainer.setAttribute('id', index)

    // Separate container for image / content
    let cardContainer = document.createElement('div');
    cardContainer.classList.add("content-container");
    let imageContainer = document.createElement('div');
    imageContainer.classList.add("image-container");

    // Container for title and author
    let info1 = document.createElement('div');
    info1.classList.add("info1")
    let title = document.createElement('span');
    title.innerHTML = book.title;
    title.style.fontWeight = "bold";
    let author = document.createElement('span');
    author.innerHTML = " by " + book.author;
    info1.append(title, author)

    // Container for pages and genre
    let info2 = document.createElement('div');
    info2.classList.add("info2")
    let pages = document.createElement('span');
    pages.innerHTML = book.pages + " pgs • ";
    let genre = document.createElement('span');
    genre.innerHTML = book.genre;
    info2.style.color = "darkgray";
    info2.style.fontSize = "0.75rem";
    info2.append(pages, genre);

    // Container for the cover
    let cover = document.createElement('img');
    cover.src = book.cover;
    imageContainer.append(cover);

    // Container for the read and delete buttons
    let buttons = document.createElement('div');
    buttons.classList.add("button-container")
    let deleteButton = document.createElement('button');
    deleteButton.classList.add("classic-button", "delete");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener('click', deleteBook);
    let readButton = document.createElement('button');
    readButton.classList.add("classic-button", "read");
    readButton.innerHTML = "Read";
    buttons.append(deleteButton, readButton);

    cardContainer.append(info1, info2, buttons);

    // Add everything to the DOM
    bookContainer.append(imageContainer, cardContainer)
    document.querySelector(".library-container").append(bookContainer);

}

// Keep updating the browser with the objects inside myLibrary
function updateLibrary(addedBook) {
    if (addedBook) {
        recentBook = myLibrary[myLibrary.length - 1];
        appendBook(recentBook, myLibrary.length - 1);
    } else {
        document.querySelector('.library-container').innerHTML = "";
        myLibrary.forEach(book => {
            appendBook(book, myLibrary.indexOf(book));
    })
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".add-book-button").addEventListener('click', showForm);
    document.querySelector(".cancel").addEventListener('click', showForm);
    document.querySelector(".book-form").addEventListener('submit', addBookToLibrary);
    updateLibrary(false);
});

// Delete a book from the array
function deleteBook() {
    let index = parseInt(event.target.parentElement.parentElement.parentElement.getAttribute('id'));
    myLibrary.splice(index, 1);
    updateLibrary(false);
}

// Display the "add new book" form when the button is pressed
function showForm() {
    if (document.querySelector(".add-book-button").style.display != 'none') {
        document.querySelector(".add-book-button").style.display = 'none';
        document.querySelector(".add-book-form").style.display = 'block';
    } else {
        document.querySelector(".add-book-button").style.display = 'block';
        document.querySelector(".add-book-form").style.display = 'none';
    }
}

// Function for adding a Book object
function addBookToLibrary() {
    event.preventDefault();
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = parseInt(document.querySelector('#pages').value);
    let cover = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg";
    if (document.querySelector('#cover').value) {
        cover = document.querySelector('#cover').value;
    }
    let genre = document.querySelector('#genre').value;

    let newBook = new Book(title, author, pages, cover, genre);
    myLibrary.push(newBook);
    updateLibrary(true);
}