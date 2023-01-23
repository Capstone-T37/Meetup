import React, { type PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Button, Text } from 'react-native';
import { store } from './src/redux/store'
import { Provider as StoreProvider } from 'react-redux';
import BottomNavBar from './src/components/BottomNavBar';
import Login from './src/screens/Login';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SignUp from './src/screens/SignUp';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <SignUp />
      </PaperProvider>
    </StoreProvider>
    
  );
};

const styles = StyleSheet.create({});

export default App;
