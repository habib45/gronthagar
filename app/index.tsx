import React from 'react';
import { View, FlatList, StyleSheet, Pressable } from 'react-native';
import BookItem from '../components/BookItem';
import { useRouter } from 'expo-router';

const BOOKS = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', imageUrl: 'https://picsum.photos/seed/gatsby/200/300' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', imageUrl: 'https://picsum.photos/seed/mockingbird/200/300' },
  { id: '3', title: '1984', author: 'George Orwell', imageUrl: 'https://picsum.photos/seed/1984/200/300' },
  { id: '4', title: 'Pride and Prejudice', author: 'Jane Austen', imageUrl: 'https://picsum.photos/seed/pride/200/300' },
  { id: '5', title: 'The Catcher in the Rye', author: 'J.D. Salinger', imageUrl: 'https://picsum.photos/seed/catcher/200/300' },
];

const HomeScreen = () => {
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof BOOKS[0] }) => (
    <Pressable onPress={() => router.push({ pathname: "/reader", params: { bookId: item.id, title: item.title } })}>
      <BookItem
        title={item.title}
        author={item.author}
        imageUrl={item.imageUrl}
      />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={BOOKS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
