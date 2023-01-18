import { View, Text, Button } from 'react-native'
import React from 'react'
import type { RootState } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/slices/counterSlice'

type Props = {}

const Counter = (props: Props) => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <View style={{alignItems:'center'}}>
            <Button title='Increment' onPress={()=>dispatch(increment())}/>
            <Button title='Decrement' onPress={()=>dispatch(decrement())}/>
            <Text>{count}</Text>
        </View>
    )
}

export default Counter