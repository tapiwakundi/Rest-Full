import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  { NavigagationInjectedProps, withNavigation } from 'react-navigation'
import { StackNavigator } from 'react-navigation';



 function Card({ stars, name, image, id, navigation, reviews }) {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Business', {id})} 
        >

            <Image style={styles.image} source={{ uri: image }} />
    <Text style={styles.name} >{name}</Text>
            <View style={styles.details} >
                <Text style={styles.detailsText}>{stars} Stars, </Text>
                <Text style={styles.detailsText} >{reviews} Reviews</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 12,
        marginBottom: 15,
        marginLeft: 30
    },
    details: {
        flexDirection: 'row',
         marginLeft: 30
    },
    detailsText: {
        color: '#999'
        

    },
    name:{
        fontWeight: "700",
        marginLeft: 30
    } 
    
})


export default withNavigation(Card)