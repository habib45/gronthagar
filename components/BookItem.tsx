import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';

interface BookItemProps {
  title: string;
  author: string;
  imageUrl: string;
  onPress?: () => void;
}

const BookItem = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, BookItemProps>(
  ({ title, author, imageUrl, onPress }, ref) => {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress} ref={ref}>
        <Image source={{ uri: imageUrl }} style={styles.bookImage} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
);

BookItem.displayName = 'BookItem';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  bookImage: {
    width: 60,
    height: 90,
    marginRight: 15,
    borderRadius: 4,
    backgroundColor: '#eee', // Placeholder background
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: '#666',
  },
});

export default BookItem;
