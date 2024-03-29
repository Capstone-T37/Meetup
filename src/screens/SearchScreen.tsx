import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useForm } from "react-hook-form";
import CInput from '../components/CInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { routes } from '../routes/routes';
import { getRequest } from '../services/ApiService';
import { setActivities } from '../redux/slices/activitySlice';
import { setActivityLocations } from '../redux/slices/activityLocationSlice';
import Geocoder from 'react-native-geocoding';
import { TextInput } from 'react-native-paper';

type Props = {}
Geocoder.init("AIzaSyDYC0H9ezO956jUEz7tu6XhEpTOwknL0iA");


const SearchScreen = (props: Props) => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            search: '',
        }
    });
    const dispatch = useDispatch()

    const activitiesStore: Array<any> = useSelector((state: RootState) => state.activities.activities)

    const [activities, setActivitiess] = useState(activitiesStore)
    const [isRefreshing, setRefreshing] = useState(false)

    interface Event {
        title: string;
        category: string;
        date: string;
        address: string;
        size: number;
        description: string;
        participants: string[];
        created_by: string;
    }

    const renderItem = ({ item }: { item: Event }) => {
        return (
            <TouchableOpacity style={styles.itemContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F456441479%2F299947132686%2F1%2Foriginal.20230227-233246?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=e048c8bfb09de06a91eca4d0233bc58c',
                    }}
                />
                <View style={styles.textPart}>
                    <View >
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                    <View >
                        <Text style={styles.itemDesciprion}>{item.date}</Text>
                    </View>
                    <View >
                        <Text style={styles.address}>{item.address}</Text>
                    </View>
                    <View style={{flexDirection: 'row',
        flexWrap: 'wrap'}}>
                    <AntDesign style={{ color: 'white', marginRight: 10 }} name='user' size={20} />
                    <Text style={styles.address}>{item.participants.length} participants</Text>
                    </View>
                </View>

                

            </TouchableOpacity>
        );
    };

    const applySearchFilter = (filter: string) => {   
        if (filter.replace(/\s/g, "") === "") { 
            setActivitiess(activitiesStore) 
            return ;
        }
        setActivitiess(activitiesStore.filter(activity => activity.title.toLowerCase().includes(filter.toLowerCase())));
    }

    const LoadActivityCredentials = async () => {
        setRefreshing(true)
        let domain = routes.activityHost + routes.activityEndPoint
        getRequest(domain).then(async resp => {
        const activities = resp?.data;
        dispatch(setActivities(activities))
        Promise.all(activities.map(async (activity: any) => {
            try {
                const json = await Geocoder.from(activity.address)
                var location = json.results[0].geometry.location
                setRefreshing(false)
                return {loc: location, id: activity._id}
            } catch (error) {
                console.warn(error)
                return null
            }
          })).then((locations) => {
            const filteredLocations = locations.filter(location => location !== null);
            dispatch(setActivityLocations(filteredLocations));
          });
    })
}
    return (
        <View style={{ backgroundColor: 'grey' }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.input}>
                <TextInput
                    style={{ marginBottom: 20, backgroundColor: 'none'}}
                    underlineColor='white'
                    textColor='white'
                    autoCorrect={false}
                    placeholder={'search events'}
                    onChangeText={(filter) => applySearchFilter(filter)}
                />
                </View>
                <View>
                    <FlatList
                        onRefresh={LoadActivityCredentials}
                        refreshing={isRefreshing}
                        data={activities}
                        renderItem={renderItem}
                        style={styles.list}
                    />
                </View>
            </SafeAreaView>
        </View>

    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(39, 38, 39)',
        padding: 10

    },
    list: {
        height: '100%',
        width: '100%',
    },
    input: {
    },
    itemContainer: {
        height: 340,
        width: '100%',
        backgroundColor: '#484848',
        borderRadius: 10,
        marginBottom: 10
    },
    icon: {
        height: '100%',
        width: 50,
        justifyContent: 'center'
    },
    iconH: {
        height: 50,
        width: 50,
        backgroundColor: 'blue',
    },
    textPart: {
        width: '100%',
        height: '40%',
        padding: 15,
        justifyContent: 'space-evenly',
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        marginBottom: 5
    },
    itemDesciprion: {
        color: '#d1410c',
        marginBottom: 7
    },
    spots: {
        width: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    tinyLogo: {
        width: '100%',
        height: '60%',
      },
      address: {
        fontSize: 17,
        color: 'white',
        marginBottom: 11

      }
})