import { Book } from '../models/book';
import { books } from './books';

export const getBooks = (): Promise<Book[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 500);
  });
};

export const getBook = (id: string): Promise<Book | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books.find((book) => book.id === id));
    }, 500);
  });
};
