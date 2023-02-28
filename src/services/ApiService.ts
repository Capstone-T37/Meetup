import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosResponse } from 'axios';
import React, { ReactElement } from 'react';
import Popup from '../components/Popup';


export const postRequest = async (url: string, data: any): Promise<AxiosResponse<any, any>> => {
    return axios.post(url, data)
}
export const getRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
    return axios.get(url)
}
export const patchRequest = async (url: string, data: any): Promise<AxiosResponse<any, any>> => {
    return axios.patch(url, data)
}

export const deleteRequest = async (url: string): Promise<AxiosResponse<any, any>> => {
    return axios.delete(url)
}

export const asyncStore = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(key, " could not be saved!")
    }
}
export const asyncStoreMulti = async (elements: [string, string][]) => {
    try {
        await AsyncStorage.multiSet(elements)
    } catch (e) {
        console.log(elements, " could not be saved!")
    }
}







