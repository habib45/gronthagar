import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="drawer" options={{ headerShown: false }} />
      <Stack.Screen name="reader" options={{ title: 'Reader' }} />
    </Stack>
  );
}
