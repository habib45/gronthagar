import React from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';

interface BookItemProps {
  title: string;
  author: string;
  imageUrl: string;
}

const { width } = Dimensions.get('window');
let divSize = 2;

 if(width >= 1024){ let divSize=4 };
const bookWidth = (width - 90) / divSize;

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
    width: bookWidth,
    margin: 8,
    alignItems: 'center',
  },
  bookImage: {
    width: bookWidth - 20,
    height: (bookWidth - 20) * 1,
    borderRadius: 5,
    backgroundColor: '#eee', // Placeholder background
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  author: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
  },
});

export default BookItem;
