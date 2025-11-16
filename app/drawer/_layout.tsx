import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: 'Home' }} />
      <Drawer.Screen name="settings" options={{ title: 'Settings' }} />
      <Drawer.Screen name="category" options={{ title: 'Category' }} />
      <Drawer.Screen name="writers" options={{ title: 'Writers' }} />
    </Drawer>
  );
}
