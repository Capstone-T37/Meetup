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
    rules: any;
    style: any;
}

const CInput: React.FC<Props> = ({control, name, label, style, rules = {}, placeholder, secureTextEntry}) => {
   
    return (
        <View>
            <Controller
                control = {control}
                name = {name}
                rules = {rules}
                render = {({field: {value, onBlur, onChange}}) => {
                    return <TextInput 
                        style={style}
                        label={label}
                        onBlur = {onBlur}
                        onChangeText= {onChange}
                        autoCorrect = {false}
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