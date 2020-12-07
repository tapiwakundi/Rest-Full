import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  { withNavigation } from 'react-navigation'
import { Dimensions } from 'react-native'

const VerticalCard = ({name, image, navigation}) => {

    
    return (
        <View>
            <TouchableOpacity activeOpacity={.8} onPress={()=>navigation.navigate('category', {name})} >
            <ImageBackground style={styles.image} imageStyle={{borderRadius: 24}} source={{uri: image}}>
       
                <Text style={styles.text} >{name}</Text>
             

            </ImageBackground>
            </TouchableOpacity>
            
        </View>
    )
}

export default withNavigation(VerticalCard)

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        marginTop: 15,
        borderRadius: 24,
        marginBottom: 15,
        paddingHorizontal: 30,
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
