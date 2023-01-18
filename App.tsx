import React, { type PropsWithChildren } from 'react';
import { SafeAreaView, StyleSheet, Button, Text } from 'react-native';
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import Counter from './src/components/Counter';

const App = () => {
  return (
    <SafeAreaView >
      <Provider store={store}>
      <Counter />
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
