const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const coverInput = document.querySelector('#cover');
const readInput = document.querySelector('#read');
const submitBtn = document.getElementById('submitBtn');
const bookList = document.querySelector('.book-list');

let library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = Number(pages);
  this.read = read;
  this.id = title.slice(0, 3).toUpperCase() + pages;
}

const addBook = () => {
  title = titleInput.value;
  author = authorInput.value;
  pages = pagesInput.value;
  read = readInput.checked;
  id = this.id;

  let newBook = new Book(title, author, pages, read);

  library.push(newBook);
  noBooksAdded();
  setLocal();
  formReset();
  updateBooks();
  stats();
}

const updateBooks = () => {
  const bookList = document.querySelector('.book-list');
  bookList.querySelectorAll('div').forEach(n => n.remove());

  for (let i = 0; i < library.length; i++) {
    createBook(library[i]);
  }
}

const createBook = (item) => {
  const div = document.createElement('div');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');
  const pRead = document.createElement('p');
  const h3 = document.createElement('h3');
  const pAuthor = document.createElement('p');
  const pPages = document.createElement('p')

  removeBtn.className = "outline";
  div.className = "book-list__book";
  div.setAttribute("id", item.id);
  bookList.appendChild(div);

  h3.innerText = item.title;
  pAuthor.innerText = `Author: ${item.author}`;
  pPages.innerText = `Total Pages: ${item.pages}`;
  pRead.innerText = `Read: ${item.read}`;
  removeBtn.textContent = 'Remove';
  removeBtn.setAttribute('id', 'removeBtn');

  div.appendChild(h3);
  div.appendChild(pAuthor);
  div.appendChild(pPages);
  div.appendChild(removeBtn);

  readBtn.classList.add('readBtn')
  div.appendChild(readBtn);
  if (item.read === false) {
    readBtn.textContent = 'Not Read';
  } else {
    readBtn.textContent = 'Read';
  }

  removeBtn.addEventListener('click', () => {
    library.splice(library.indexOf(item), 1);
    noBooksAdded();
    stats();
    setLocal();
    updateBooks();
  });

  readBtn.addEventListener('click', () => {
    item.read = !item.read;
    setLocal();
    updateBooks();
  });
};

submitBtn.addEventListener('click', addBook);

//Reset form value
const formReset = () => {
  titleInput.value = '';
  authorInput.value = '';
  pagesInput.value = '';
  readInput.value = '';
};
//Read Books and Unread Books Stats Not Finished
const stats = (item) => {
  const readBtn = document.createElement('button');
  const totalBooksEl = document.querySelector('#totalBooks');
  const readBooksEl = document.querySelector('#readBooks');
  const unreadBooksEl = document.querySelector('#unreadBooks');

  const totalBooks = `${library.length} Total Books`;
  totalBooksEl.innerHTML = totalBooks;
}

const noBooksAdded = () => {
  const noBooksDiv = document.querySelector('.no-books');
  if (library.length === 0) {
    noBooksDiv.style.display = 'flex';
  } else {
    noBooksDiv.style.display = 'none';
  }
};

//Set library to be stored in local storage
function setLocal() {
  localStorage.setItem(`library`, JSON.stringify(library));
};

//Pull data from local storage when page is refreshed
function restoreLocal() {
  library = JSON.parse(localStorage.getItem('library'));
  if (library === null) {
    library = [];
  } else {
    noBooksAdded();
    stats();
    updateBooks();
  };
};

restoreLocal();