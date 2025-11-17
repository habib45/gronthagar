import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getBook } from './data/db';
import { Book, Chapter } from './models/book';

const BookDetailsScreen = () => {
  const { bookId } = useLocalSearchParams<{ bookId: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [chapterIndex, setChapterIndex] = useState(0);

  useEffect(() => {
    if (bookId) {
      getBook(bookId).then(book => {
        if (book) {
          setBook(book);
          setCurrentChapter(book.chapters[0]);
          setChapterIndex(0)
        }
      });
    }
  }, [bookId]);

  const goToNextChapter = () => {
    if (book && chapterIndex < book.chapters.length - 1) {
      const nextChapterIndex = chapterIndex + 1;
      setChapterIndex(nextChapterIndex);
      setCurrentChapter(book.chapters[nextChapterIndex]);
    }
  };

  const goToPreviousChapter = () => {
    if (book && chapterIndex > 0) {
      const prevChapterIndex = chapterIndex - 1;
      setChapterIndex(prevChapterIndex);
      setCurrentChapter(book.chapters[prevChapterIndex]);
    }
  };

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
      {currentChapter && (
        <ScrollView style={styles.chapterContainer}>
          <Text style={styles.chapterTitle}>{currentChapter.title}</Text>
          <Text style={styles.chapterContent}>{currentChapter.content}</Text>
        </ScrollView>
      )}
      <View style={styles.navigationContainer}>
        <Button title="Previous" onPress={goToPreviousChapter} disabled={chapterIndex === 0} />
        <Button title="Next" onPress={goToNextChapter} disabled={!book || chapterIndex === book.chapters.length - 1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  author: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  chapterContainer: {
    flex: 1,
    marginBottom: 20,
  },
  chapterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chapterContent: {
    fontSize: 16,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default BookDetailsScreen;
