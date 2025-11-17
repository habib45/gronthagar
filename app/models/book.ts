export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  chapters: Chapter[];
}

export interface Chapter {
  title: string;
  content: string;
}
