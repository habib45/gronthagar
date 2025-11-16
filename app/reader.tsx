import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ReaderScreen = () => {
  const { title } = useLocalSearchParams<{ title: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView>
        <Text style={styles.content}>
          {/* Placeholder content for the book */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
        </Text>
      </ScrollView>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default ReaderScreen;
