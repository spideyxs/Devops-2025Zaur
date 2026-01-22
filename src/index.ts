import chalk from 'chalk';
import { Book } from './types/Book';
import { LibraryBook } from './types/LibraryBook';
import { Repository } from './types/Repository';

const firstBook: Book = {
  title: 'Архитектура программного обеспечения',
  author: 'Роберт Мартин',
  year: 2017,
};

const secondBook: Book = {
  title: 'Современный JavaScript',
  author: 'Кайл Симпсон',
  year: 2020,
};

const libBook1 = new LibraryBook(firstBook);
const libBook2 = new LibraryBook(secondBook);

console.log(chalk.magenta('\n=== Выдача книг ===\n'));

libBook1.borrow('Иван Петров');
libBook2.borrow('Елена Смирнова');

const bookRepo = new Repository<Book>([firstBook]);
bookRepo.add(secondBook);

const updateBook = (book: Book, changes: Partial<Book>): Book => {
  return { ...book, ...changes };
};

const updated = updateBook(firstBook, { year: 2019 });

console.log(chalk.green(`\nОбновлённая книга: ${updated.title}, ${updated.year}`));

const getReadonlyBooks = (repo: Repository<Book>): Readonly<Book[]> => {
  return repo.getAll();
};

const readonlyBooks = getReadonlyBooks(bookRepo);

console.log(chalk.blue(`\nВсего книг в репозитории: ${readonlyBooks.length}`));

readonlyBooks.forEach((book, index) => {
  console.log(chalk.yellow(`${index + 1}. ${book.title} - ${book.author} (${book.year})`));
});
