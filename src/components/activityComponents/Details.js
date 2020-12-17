import React from 'react'
import { StyleSheet, Text, View, Image, Linking, Alert } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
const SCREEN_WIDTH = Dimensions.get('window').width




function getTime() {
    let date = new Date
    const day = date.getDay()
    const  hours = date.getHours();
    const  minutes = date.getMinutes();
    const  strTime = day + ' ' +  hours + ':' + minutes + ' '
  }
  
getTime()


export default function Details({ stars, name, image, phone, reviews, hours, address, isOpen }) {
   
    console.log(isOpen);
    return (
        <View >

            <Text style={styles.name}>{name} </Text>
            <View style={styles.details} >
                <Text style={styles.detailsText} >{stars} Stars</Text>
                <Text style={styles.detailsText} >{reviews} Reviews</Text>

            </View>
            <View style={styles.info}>
                <View style={ isOpen ? styles.openContainer : styles.closedContainer}>
                    <Text style={styles.open} >{isOpen ? 'Open' : 'Closed'}</Text>
                </View>
                <View style={styles.phoneContainer} >
                    <FontAwesome name="phone" size={24} color="black" />
                    <Text onPress={()=>{Linking.openURL(`tel:${phone}`)}} >
                        {phone}
                    </Text>
                </View>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={image}
                keyExtractor={item => item.id}
                renderItem={({ item }) => { return <Image source={{ uri: item }} style={styles.image} /> }}
            />
        </View>

    )
}

const styles = StyleSheet.create({

    image: {
        width: 250,
        height: 200,
        borderRadius: 12,
        marginLeft: 30
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 25
    },
    detailsText: {
        color: '#999'
    },
    name: {
        fontSize: 28,
        fontWeight: '700',
        paddingTop: 15,
        paddingLeft: 25,
        color: '#292929'
    },
    open: {
        color: 'white',
    },
    openContainer: {
        backgroundColor: '#3B6828',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closedContainer: {
        backgroundColor: '#b80f0a',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginTop: 10,
        marginBottom: 25
    },
    phoneContainer: {
        flexDirection: 'row',
        backgroundColor: '#ededed',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 25,
        justifyContent: 'space-between'
    }
})


