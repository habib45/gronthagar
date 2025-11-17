import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useColorScheme } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getBook } from './data/db';
import { Book, Chapter } from './models/book';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';

const BookDetailsScreen = () => {
  const { bookId } = useLocalSearchParams<{ bookId: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [chapterIndex, setChapterIndex] = useState(0);
  const colorScheme = useColorScheme();

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

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  const isPrevDisabled = chapterIndex === 0;
  const isNextDisabled = !book || chapterIndex === book.chapters.length - 1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={goToPreviousChapter}
          disabled={isPrevDisabled}
          style={[styles.navButton, { opacity: isPrevDisabled ? 0.5 : 1 }]}
        >
          <IconSymbol name="chevron.left" size={20} color={theme.tint} />
          <ThemedText style={{ color: theme.tint }}>Previous</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToNextChapter}
          disabled={isNextDisabled}
          style={[styles.navButton, { opacity: isNextDisabled ? 0.5 : 1 }]}
        >
          <ThemedText style={{ color: theme.tint }}>Next</ThemedText>
          <IconSymbol name="chevron.right" size={20} color={theme.tint} />
        </TouchableOpacity>
      </View>
      {currentChapter && (
        <ScrollView style={styles.chapterContainer}>
          <Text style={styles.chapterTitle}>{currentChapter.title}</Text>
          <Text style={styles.chapterContent}>{currentChapter.content}</Text>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  author: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  chapterContainer: {
    flex: 1,
    marginBottom: 20,
  },
  chapterTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  chapterContent: {
    fontSize: 18,
    lineHeight: 28,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default BookDetailsScreen;
