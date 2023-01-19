import { View, Text } from 'react-native'
import React from 'react'
import Counter from '../components/Counter';

type Props = {}

const CounterScreen = (props: Props) => {
  return (
    <View>
      <Counter />
    </View>
  )
}

export default CounterScreen