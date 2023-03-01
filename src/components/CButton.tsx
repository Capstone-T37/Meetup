import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { Controller } from "react-hook-form";

export interface Props {
    control: any; 
    name: any;
    mode: any; 
    content: any; 
    onPress: any;
    style: any;
}

const CButton: React.FC<Props> = ({control, name, mode, content, onPress, style}) => {
   
    return (
        <View>
            <Controller
                control = {control}
                name = {name}
                render = {() => {
                    return <Button 
                        textColor='black'
                        style={style}
                        mode= {mode}
                        onPress={onPress}
                    > {content} </Button>
                }}
            />
        </View>
        
        
    );
}

export default CButton;