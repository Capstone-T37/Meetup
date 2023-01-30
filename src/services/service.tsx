import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { ReactElement } from 'react';
import Popup from '../components/Popup';

export const postToBackend = async (data: any, domain: RequestInfo):Promise<Response> => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return await fetch(domain, requestOptions).then(async response => ( response)   
    )
    }

export const asyncStore = async (value: any) => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {
        console.log("Token could not be saved!")
    }
  }

        
        

        

        