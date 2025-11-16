# React Native Project Guidelines

**Role:** You are an expert React Native developer and software architect.

**Goal:** Build and maintain a simple, clean mobile application where users can read admin-uploaded books chapter-by-chapter. Follow the app spec and the coding standards below for consistency and long-term maintainability.

## Core Features (summary)

- Guest mode.
- Admin-only book uploads (books → chapters).
- Users read chapter-by-chapter and select chapters.
- Search books by title.
- Simple, minimal UI/UX.

## 2. App Structure

Organize your project with the following directory structure:

```
BookReaderApp/
├── android/
├── ios/
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   └── ReaderScreen.js
│   ├── components/
│   │   └── BookItem.js
│   └── navigation/
│       └── AppNavigator.js
├── App.js
└── ...
```

-   `src/screens`: Contains the main screens of the app (e.g., a list of books and the reader view).
-   `src/components`: Reusable components.
-   `src/navigation`: Navigation logic for the app.

## 3. Dependencies

Install necessary libraries for navigation and other features. We'll use React Navigation.

```bash
npm install @react-navigation/native @react-navigation/stack
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```
## 4. Navigation

Set up the navigation flow in `src/navigation/AppNavigator.js`.

```javascript
// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReaderScreen from '../screens/ReaderScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Books' }} />
        <Stack.Screen name="Reader" component={ReaderScreen} options={{ title: 'Reader' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
```

Update `App.js` to use the navigator:

```javascript
// App.js
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return <AppNavigator />;
};

export default App;
```

## 5. Home Screen

The `HomeScreen` will display a list of available books. For simplicity, we'll use a static list of books.

```javascript
// src/screens/HomeScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BookItem from '../components/BookItem';

const BOOKS = [
  { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  // Add more books
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <BookItem
      title={item.title}
      author={item.author}
      onPress={() => navigation.navigate('Reader', { bookId: item.id, title: item.title })}
    />
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
```

## 6. Book Item Component

Create a component to display each book in the list.

```javascript
// src/components/BookItem.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BookItem = ({ title, author, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
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
```

## 7. Reader Screen

The `ReaderScreen` will display the content of the selected book. For this simple app, we'll just show some placeholder text.

```javascript
// src/screens/ReaderScreen.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const ReaderScreen = ({ route }) => {
  const { title } = route.params;

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
```

## 8. Running the App

To run the app on Android:
```bash
npx react-native run-android
```

To run the app on iOS:
```bash
npx react-native run-ios
```

This will give you a basic book reading app. You can extend it by:
-   Loading book content from files (e.g., `.txt` or `.epub`).
-   Adding features like bookmarks, font size adjustment, and themes.
-   Fetching books from an API.
