import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  { withNavigation } from 'react-navigation'
import { Dimensions } from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const SCREEN_WIDTH = Dimensions.get('window').width

const VerticalCard = ({name, image, navigation, stars, isLoading, id}) => {

    const renderCards = () => {
        if (isLoading) {
            return <ShimmerPlaceHolder style={{ height: 100 }}/>
            
        } else {
            return(
                <View>
                <TouchableOpacity activeOpacity={.8} onPress={()=>navigation.navigate('business', {id})} >
                <Image style={styles.image}  source={{url: image}} />
                <Text style={styles.text} >{name}</Text>
        <Text style={styles.stars}>{`${stars} stars`}</Text>
                </TouchableOpacity>
                
            </View>
            )
        }
    }
    
    return (
      renderCards()
    )
}

export default withNavigation(VerticalCard)

const styles = StyleSheet.create({
    image: {
        width: SCREEN_WIDTH * .9,
        height: 200,
        resizeMode: 'cover',
        marginTop: 15,
        borderRadius: 24,
        marginBottom: 15,
        marginHorizontal: 20
    },
    text: {
        color: '#545454',
        fontWeight: '800',
        fontSize: 20,
        marginLeft: 25
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 24,
        flex: 1
    },
    stars: {
        marginLeft: 25
    }
})
