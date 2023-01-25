import React, { type PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Button, Text } from 'react-native';
import { store } from './src/redux/store'
import { Provider as StoreProvider } from 'react-redux';
import BottomNavBar from './src/components/BottomNavBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/Login';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import SignUp from './src/screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SignUp"
                            component={SignUp}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Session"
                            component={BottomNavBar}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
    
  );
};

export default App;
