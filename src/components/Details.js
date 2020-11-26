import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  { NavigagationInjectedProps, withNavigation } from 'react-navigation'
import { StackNavigator } from 'react-navigation';



 export default function Details({ stars, name, image }) {

    return (
    <View>

            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.details} >
                <Text style={styles.detailsText}>{name}, </Text>
                <Text style={styles.detailsText} >{stars}</Text>
            </View>
            </View>
       
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 110,
        marginRight: 30
    },
    details: {
        flexDirection: 'row',
    },
    detailsText: {
        color: '#999'
    }
})


