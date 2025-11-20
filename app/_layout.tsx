import { store } from '@/store';
import { Stack } from "expo-router";
import { Provider } from 'react-redux';
import "../global.css";

export default function RootLayout() {
  return(
    <Provider store={store}>
      {/* Hide headers globally so nested stacks/groups don't surface the native header/title */}
      <Stack screenOptions={{ headerShown: false }} />
      <Stack.Protected guard={__DEV__}>
        <Stack.Screen name="storybook" />
      </Stack.Protected>
    </Provider>
  )
}
