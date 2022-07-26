console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book {
    constructor(id, title, author, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.books = [
            {
                id: 1,
                title: 'Name of the Wind',
                author: 'Patrickk Rothfus',
                read: true
            }
        ];

        this.bookCount = this.books.length + 1;
    }
    addBook () {
        let title = document.getElementById('titleInput').value;
        let author = document.getElementById('authorInput').value;
        let read = document.getElementById('readCheckbox').checked;

        let newBook = new Book(this.bookCount, title, author, read);
        this.books.push(newBook);

        let newRow = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.textContent = newBook.title;

        let td2 = document.createElement('td');
        td2.textContent = newBook.author;

        let td3 = document.createElement('td');
        let checkbox = document.createElement('input');
        checkbox.id = this.bookCount;
        checkbox.type = 'checkbox';
        checkbox.checked = newBook.read;
        checkbox.disabled = newBook.read;

        checkbox.addEventListener('click', () => {
            library.markRead(checkbox, checkbox.id);
        });

        td3.appendChild(checkbox);

        newRow.appendChild(td1);
        newRow.appendChild(td2);
        newRow.appendChild(td3);
        let tableBody = document.querySelector('tbody');
        tableBody.appendChild(newRow);

        this.bookCount++;
    }

    markRead (checkbox, id) {
        for (let book of this.books) {
            if (book.id === parseInt(id)) {
                checkbox.checked = true;
                checkbox.disabled = true;
                book.read = true;
            }
        }
    }
}

const library = new Library();

document.getElementById('addButton')
    .addEventListener('click',() => {
        library.addBook();
    });