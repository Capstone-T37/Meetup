import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider, TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useForm } from "react-hook-form";
import CInput from '../components/CInput';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {}

const SearchScreen = (props: Props) => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            search: '',
        }
    });
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

    const data = [
        {
            title: "Lil Tjay + Killy Live In Ottawa March 8th",
            category: 'sports',
            date: "Fri, Mar 10, 8:00 PM",
            address: "EY Centre • Ottawa, ON",
            size: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            participants: ["John", "Jane", "Mike"],
            created_by: "Alice"
        },
        {
            title: "Event 2",
            category: 'study',
            date: "2023-04-15",
            address: "456 Second Ave",
            size: 4,
            description: "Nulla eget nulla euismod, faucibus odio vitae, auctor arcu.",
            participants: ["Sarah", "Tom"],
            created_by: "Bob"
        },
        {
            title: "Event 3",
            category: 'leasure',
            date: "2023-05-20",
            address: "789 Third St",
            size: 3,
            description: "Etiam commodo consectetur neque vitae commodo.",
            participants: ["David"],
            created_by: "Charlie"
        }
    ];
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
    return (
        <View style={{ backgroundColor: 'grey' }}>
            <SafeAreaView style={styles.container}>
                <View style={styles.input}>
                    <CInput
                        control={control}
                        style={{ marginBottom: 30 }}
                        placeholder="Search events"
                        rules={() => { }}
                        name="search"
                        secureTextEntry={false} />
                </View>
                <View>
                    <FlatList
                        data={data}
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