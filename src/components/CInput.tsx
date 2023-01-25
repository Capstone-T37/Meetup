import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
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
                render = {({field: {value, onBlur, onChange}, fieldState: {error}}) => {
                    return <View style={style}>
                                <TextInput 
                                    label={label}
                                    style = {{marginBottom: 5}}
                                    onBlur = {onBlur}
                                    onChangeText= {onChange}
                                    autoCorrect = {false}
                                    placeholder={placeholder}
                                    secureTextEntry = {secureTextEntry}
                                    value={value}
                                />
                                {error && (<Text style= {{color: 'red'}}>{error.message || 'error'}</Text>) }
                            </View>
                }}
            />
        </View>
        
        
    );
}

export default CInput;