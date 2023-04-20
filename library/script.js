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

// Update the library when the webpage is loaded as well as set up the form
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector(".add-book-button").addEventListener('click', showForm);
    document.querySelector(".cancel").addEventListener('click', showForm);
    document.querySelector(".book-form").addEventListener('submit', addBookToLibrary);
    updateLibrary(false);
});

// Add a book to the current library/viewing
function appendBook(book, index) {
    // Create general book container (allows for flex styling)
    let bookContainer = document.createElement('div');
    bookContainer.classList.add("book-container");
    bookContainer.setAttribute('id', index);

    // Separate container for image / content
    let cardContainer = document.createElement('div');
    cardContainer.classList.add("content-container");
    let imageContainer = document.createElement('div');
    imageContainer.classList.add("image-container");
    imageContainer.innerHTML += `<svg class='unread-indicator' svg-id="${index}" viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><circle cx='50' cy='50' r='50' /></svg>`;


    // Container for title and author
    let info1 = document.createElement('div');
    info1.classList.add("info1");
    let title = document.createElement('span');
    title.innerHTML = book.title;
    title.style.fontWeight = "bold";
    let author = document.createElement('span');
    author.innerHTML = " by " + book.author;
    info1.append(title, author);

    // Container for pages and genre
    let info2 = document.createElement('div');
    info2.classList.add("info2");
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
    buttons.classList.add("button-container");
    let deleteButton = document.createElement('button');
    deleteButton.classList.add("classic-button", "delete");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener('click', deleteBook);
    let readButton = document.createElement('button');
    readButton.classList.add("classic-button", "read");
    readButton.innerHTML = "Read";
    readButton.addEventListener('click', readBook);
    buttons.append(deleteButton, readButton);

    cardContainer.append(info1, info2, buttons);

    // Add everything to the DOM
    bookContainer.append(imageContainer, cardContainer);
    document.querySelector(".library-container").append(bookContainer);

}

// Keep updating the browser with the objects inside myLibrary
function updateLibrary(addedBook) {
    // Add only the most recently added book
    if (addedBook) {
        recentBook = myLibrary[myLibrary.length - 1];
        appendBook(recentBook, myLibrary.length - 1);
    } 

    // Otherwise, refresh the entire library
    else {
        document.querySelector('.library-container').innerHTML = "";
        myLibrary.forEach(book => {
            appendBook(book, myLibrary.indexOf(book));
    })
    }
}

// Delete a book from the array
function deleteBook() {
    let index = parseInt(event.target.parentElement.parentElement.parentElement.getAttribute('id'));
    myLibrary.splice(index, 1);
    updateLibrary(false);
}

// Modify the read indicator depending on the current state of the book
function readBook() {
    let id = parseInt(event.target.parentElement.parentElement.parentElement.getAttribute('id'));
    if (event.target.innerHTML === "Read") {
        readSvg = document.querySelector(`[svg-id="${id}"]`);
        readSvg.classList.remove('unread-indicator');
        readSvg.classList.add('read-indicator');
        event.target.innerHTML = "Unread";
    } else if (event.target.innerHTML === "Unread") {
        readSvg = document.querySelector(`[svg-id="${id}"]`);
        readSvg.classList.remove('read-indicator');
        readSvg.classList.add('unread-indicator');
        event.target.innerHTML = "Read";
    }
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