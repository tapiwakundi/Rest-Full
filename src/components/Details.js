import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import  { NavigagationInjectedProps, withNavigation } from 'react-navigation'
import { StackNavigator } from 'react-navigation';



 export default function Details({ stars, name, image }) {

    return (
    <View>

           
            <View style={styles.details} >
                <Text style={styles.name}>{name} </Text>
                <Text style={styles.detailsText} >{stars} Stars</Text>
               
                
            </View>
            <Text>Here do be some images</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={image}
                keyExtractor={item => item}
                renderItem={({item}) => {return <Image source={{uri: item}} style={styles.image}/>}}
                />
            </View>
       
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 110,
        borderRadius: 12,
        marginRight: 30
    },
    details: {
        flexDirection: 'row',
    },
    detailsText: {
        color: '#999'
    },
    name: {
        fontSize: 20,
        fontWeight: '700'
    }
})


