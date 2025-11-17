import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Pressable, Button } from 'react-native';
import BookItem from '../../components/BookItem';
import { useRouter, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { getBooks } from '../data/db';
import { Book } from '../models/book';

const HomeScreen = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} title="Menu" />,
    });
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

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
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
