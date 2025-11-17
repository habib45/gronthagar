# My Books App Features

**Goal:** Build and maintain a simple, clean mobile application where users can read admin-uploaded books chapter-by-chapter.

## Core Features

-   **Book List:** Display a list of available books in a side-by-side grid.
-   **Book Details:** Show book details, including title, author, and cover image.
-   **Chapter-by-Chapter Reading:** Allow users to read books one chapter at a time.
-   **Chapter Navigation:** Provide buttons to navigate to the next and previous chapters.
-   **NoSQL Database:** Load book data from a mock NoSQL database.

## App Structure

The project is organized with the following directory structure:

```
my-books/
├── app/
│   ├── drawer/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── ...
│   ├── data/
│   │   ├── books.ts
│   │   └── db.ts
│   ├── models/
│   │   └── book.ts
│   ├── _layout.tsx
│   ├── book.tsx
│   └── reader.tsx
├── components/
│   ├── BookItem.tsx
│   └── ...
└── ...
```

-   `app/drawer`: Contains the screens accessible from the drawer menu.
-   `app/data`: Contains the mock database and sample book data.
-   `app/models`: Contains the data models for the application.
-   `app/book.tsx`: The screen for displaying book details and reading chapters.
-   `components`: Contains reusable components.

## Running the App

To run the app on Android:

```bash
npx expo start --android
```

To run the app on iOS:

```bash
npx expo start --ios
```

This will give you a basic book reading app. You can extend it by:

-   Implementing a real NoSQL database (e.g., Firebase Firestore, MongoDB).
-   Adding features like bookmarks, font size adjustment, and themes.
-   Implementing user authentication.
-   Adding a feature to upload new books.