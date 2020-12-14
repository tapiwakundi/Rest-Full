import React, {useContext, useState} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  { withNavigation } from 'react-navigation'
import { Dimensions } from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import MapViewDirections from 'react-native-maps-directions'
import * as Location from 'expo-location';

const SCREEN_WIDTH = Dimensions.get('window').width
const GOOGLE_MAPS_KEY = 'AIzaSyCwiRauwwaNWHnuLAEWZiFj0ewyb5kTjFA'

const VerticalCard = ({name, image, navigation, stars, isLoading, id, destination, currentLocation}) => {
    const [duration, setDuration] = useState('')
    const [distance, setDistance] = useState('')
    const renderCards = () => {
        if (isLoading) {
            return <ShimmerPlaceHolder style={{ height: 100 }}/>
            
        } else {
            return(
                <View>
                      <MapViewDirections 
                origin={currentLocation}
                destination={destination}
                apikey={GOOGLE_MAPS_KEY}
                onReady={result => {
                    let distance= result.distance
                    let duration = result.duration
                    
                    setDistance(`${Math.round(distance * 100) / 100} km`)
                    setDuration(`${Math.round(duration ) } min`)
                }}
                />


                <TouchableOpacity activeOpacity={.8} onPress={()=>navigation.navigate('business', {id})} >
                <Image style={styles.image}  source={{url: image}} />
                <Text style={styles.text} >{name}</Text>
                <View style={styles.info}>
                <Text style={styles.stars}>{`${stars} stars`}</Text>
            <Text>{`${duration} away`}</Text>

                </View>
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
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 25
    }
})
