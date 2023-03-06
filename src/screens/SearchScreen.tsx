import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Divider, TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import { useForm } from "react-hook-form";
import CInput from '../components/CInput';

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
            title: "Event 1",
            category: 'sports',
            date: "2023-03-10",
            address: "123 Main St",
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
                <View style={styles.icon}><MaterialIcons name='sports-soccer' size={50} color='white' /></View>
                <View style={styles.textPart}>
                    <View >
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                    <View >
                        <Text style={styles.itemDesciprion}>{item.description}</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', height: '100%' }}>

                    <View style={styles.spots}>
                        <Feather name='circle' color='blue' size={15} />
                        <Feather name='circle' color='blue' size={15} />
                        <Feather name='check-circle' color='green' size={15} />

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
                        placeholder="Search"
                        rules={() => { }}
                        name="search"
                        secureTextEntry={false} />
                </View>
                <View>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        //keyExtractor={(item) => item.id}
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
        height: 100,
        width: '100%',
        flexDirection: 'row',
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
        width: '70%',
        height: '100%',
        justifyContent: 'space-evenly'

    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    itemDesciprion: {
        color: 'white'
    },
    spots: {
        width: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',

    }
})