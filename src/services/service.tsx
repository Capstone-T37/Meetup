import AsyncStorage from '@react-native-async-storage/async-storage';

export const postToBackend = async (data: any, domain: RequestInfo) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    await fetch(domain, requestOptions).then(async response => {
        return response
    })
}
    // try {
    //     fetch(domain, requestOptions)
    //         .then(response => {
    //             console.log(response.status)
    //             response.json()
    //         })
    //     }
    // catch (error) {
    //         console.error('loginError:'+ error);
    //     }
    

export const asyncStore = async (value: any) => {
    try {
      await AsyncStorage.setItem('@token', value)
    } catch (e) {
        console.log("Token could not be saved!")
    }
  }

        
        

        

        