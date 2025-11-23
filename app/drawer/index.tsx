import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Pressable, Platform } from 'react-native';
import BookItem from '../../components/BookItem';
import { useRouter, useNavigation } from 'expo-router';
import { getBooks } from '../data/db';
import { Book } from '../models/book';

const HomeScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, [navigation]);

  const renderItem = ({ item }: { item: Book }) => (
    <Pressable onPress={() => router.push({ pathname: "/book", params: { bookId: item.id } })}>
      <BookItem
        title={item.title}
        author={item.author}
        imageUrl={item.cover}
      />
    </Pressable>
  );

  const numColumns = Platform.OS === 'web' ? 2 : 2;

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        key={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});

export default HomeScreen;
