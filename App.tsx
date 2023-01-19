import React, { type PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Button, Text } from 'react-native';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import BottomNavBar from './src/components/BottomNavBar';


const App = () => {
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Provider store={store}>
        <BottomNavBar />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
