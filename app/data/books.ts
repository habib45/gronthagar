import { Book } from '../models/book';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    cover: 'https://dummyimage.com/300x400/000/fff&text=Book+1',
    chapters: [
      {
        title: 'Chapter 1',
        content: 'This is the content of chapter 1.',
      },
      {
        title: 'Chapter 2',
        content: 'This is the content of chapter 2.',
      },
    ],
  },
  {
    id: '2',
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    cover: 'https://dummyimage.com/300x400/000/fff&text=Book+2',
    chapters: [
      {
        title: 'Chapter 1',
        content: 'This is the content of chapter 1.',
      },
      {
        title: 'Chapter 2',
        content: 'This is the content of chapter 2.',
      },
    ],
  },
  {
    id: '3',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    cover: 'https://dummyimage.com/300x400/000/fff&text=Book+3',
    chapters: [
      {
        title: 'Chapter 1',
        content: 'This is the content of chapter 1.',
      },
      {
        title: 'Chapter 2',
        content: 'This is the content of chapter 2.',
      },
    ],
  },
];
