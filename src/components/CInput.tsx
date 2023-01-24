import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Controller } from "react-hook-form";

export interface Props {
    control: any; 
    name: any;
    label: any; 
    placeholder: any; 
    secureTextEntry: any;
}

const CInput: React.FC<Props> = ({control, name, label, placeholder, secureTextEntry}) => {
   
    return (
        <View>
            <Controller
                control = {control}
                name = {name}
                render = {({field: {value, onBlur, onChange}}) => {
                    <TextInput style={{marginBottom: 30}}
                        label={label}
                        placeholder={placeholder}
                        secureTextEntry = {secureTextEntry}
                        value={value}
                    />
                }}
            />
        </View>
        
        
    );
}

export default CInput;