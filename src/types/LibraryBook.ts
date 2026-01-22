import chalk from 'chalk';
import { Book } from './Book';
import { Borrowable } from './Borrowable';

export class LibraryBook implements Borrowable {
  info: Book;

  constructor(info: Book) {
    this.info = info;
  }

  borrow(userName: string): void {
    console.log(
      chalk.cyan(`Книга "${this.info.title}" выдана пользователю ${chalk.bold(userName)}`)
    );
  }
}
