import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Yelp from '../../api/yelp'
import  { withNavigation } from 'react-navigation'
import useResults from '../../hooks/useResults'

const CategoryCard = ({name, image, navigation}) => {

    
    return (
        <View>
            <TouchableOpacity activeOpacity={.8} onPress={()=>navigation.navigate('category', {name})} >
            <ImageBackground style={styles.image} imageStyle={{borderRadius: 24}} source={image}>
                <View style={styles.overlay} >
                <Text style={styles.text} >{name}</Text>
                </View>

            </ImageBackground>
            </TouchableOpacity>
            
        </View>
    )
}

export default withNavigation(CategoryCard)

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
        resizeMode: 'cover',
        marginTop: 15,
        marginRight: 0,
        borderRadius: 24,
        marginBottom: 15,
        marginLeft: 30,
    },
    text: {
        position: 'absolute',
        bottom: 20,
        left: 15,
        zIndex: 10,
        color: 'white',
        fontWeight: '800',
        fontSize: 30
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 24,
        flex: 1

    }
})
