// Variables
const bookContainer = document.querySelector('.book-container');
const addButton = document.querySelector('#add-button');
const removeButton = document.querySelector('#remove-button');

const myLibrary = [];

//
const book1 = new Book(
	'The Eye of The World',
	'Robert Jordan',
	'Science Fiction',
	true
);

const book2 = new Book(
	'The End of Everything',
	'Victor Davis Hanson',
	'History',
	false
);

myLibrary.push(book1);
myLibrary.push(book2);

// Initialize
browseLibrary();

// Functions
function Book(name, author, genre, isRead) {
	this.name = name;
	this.author = author;
	this.genre = genre;
	this.isRead = isRead;
}

// loop through myLibrary array and display each book
function browseLibrary() {
	myLibrary.forEach(function (book) {
		const bookItem = createBook(book);
		bookContainer.append(bookItem);
	});
}

// create book item
function createBook(book) {
	const div = document.createElement('div');
	div.classList.add('book-item');

	const h2 = document.createElement('h2');
	h2.textContent = `${book.name}`;

	const h3 = document.createElement('h3');
	h3.textContent = `${book.author}`;

	const p = document.createElement('p');
	p.textContent = `${book.genre}`;

	const checkBox = document.createElement('div');

	const label = document.createElement('label');
	label.setAttribute('for', 'is-read');
	label.textContent = 'Read? ';

	const input = document.createElement('input');
	input.setAttribute('type', 'checkbox');
	input.setAttribute('id', 'is-read');
	input.checked = book.isRead;

	checkBox.append(label, input);

	const btn = document.createElement('button');
	btn.setAttribute('type', 'button');
	btn.setAttribute('id', 'remove-button');
	btn.textContent = 'Remove';

	div.append(h2, h3, p, checkBox, btn);

	return div;
}

// add book item
function addBookToLibrary() {}

// remove book item
function removeBook() {}
