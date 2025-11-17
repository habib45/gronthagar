import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

interface BookItemProps {
  title: string;
  author: string;
  imageUrl: string;
}

const BookItem: React.FC<BookItemProps> = ({ title, author, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.bookImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.author} numberOfLines={1}>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  bookImage: {
    width: 150,
    height: 220,
    borderRadius: 4,
    backgroundColor: '#eee', // Placeholder background
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

export default BookItem;
