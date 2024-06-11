// Book Class
class Book {
	constructor(name, author, genre, isRead) {
		this.name = name;
		this.author = author;
		this.genre = genre;
		this.isRead = isRead;
	}
}

// Variables
const bookContainer = document.querySelector('.book-container');
const addButton = document.querySelector('#add-button');

const myLibrary = [];

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

// Event listeners
addButton.addEventListener('click', addBookToLibrary);

bookContainer.addEventListener('click', function (event) {
	if (event.target.matches('#remove-button')) {
		const bookItem = event.target.closest('.book-item');
		bookItem.remove();
	}
});

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
function addBookToLibrary(event) {
	event.preventDefault();

	if (validateForm()) {
		const title = document.getElementById('title').value;
		const author = document.getElementById('author').value;
		const genre = document.getElementById('genre').value;
		const isRead = document.getElementById('read').value === 'true';

		const newBook = new Book(title, author, genre, isRead);

		myLibrary.push(newBook);
		bookContainer.append(createBook(newBook));

		document.querySelector('form').reset();
		clearValidationMessages();
	} else {
		alert('Please fill in all fields correctly');
	}
}

// form validation
function validateForm() {
	const title = document.getElementById('title').value.trim();
	const author = document.getElementById('author').value.trim();
	const genre = document.getElementById('genre').value.trim();

	let isValid = true;

	clearValidationMessages();

	if (!title) {
		showValidationMessage('title-error', 'Title is required.');
		isValid = false;
	}

	if (!author) {
		showValidationMessage('author-error', 'Author is required.');
		isValid = false;
	}

	if (!genre) {
		showValidationMessage('genre-error', 'Genre is required.');
		isValid = false;
	}

	return isValid;
}

function showValidationMessage(elementId, message) {
	const errorElement = document.getElementById(elementId);
	errorElement.textContent = message;
	errorElement.style.display = 'block';
}

function clearValidationMessages() {
	const errorElements = document.querySelectorAll('.error-message');
	errorElements.forEach((element) => {
		element.textContent = '';
		element.style.display = 'none';
	});
}
