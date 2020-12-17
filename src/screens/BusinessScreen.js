import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import Details from '../components/activityComponents/Details'
import { Dimensions } from 'react-native'
import Directions from '../components/mapComponents/Directions'
import { ScrollView } from 'react-native-gesture-handler'
import { Context as BusinessContext} from '../context/initialBusinessesContext'
const SCREEN_WIDTH = Dimensions.get('window').width

export default function BusinessScreen({ navigation }) {
    const id = navigation.getParam('id')
    
    const {state: {business}, fetchBusiness} = useContext(BusinessContext)

    useEffect(() => {
        let isCancelled = false
        if (!isCancelled) {
            fetchBusiness(id)
        }
        return () => {
            isCancelled = true
        }
    }, [])
    
    if (!business) {
        console.log('nothinig to show');
    } 
    

    return (
        <View>
            <ImageBackground source={{ uri: business.photos[2] }} style={styles.backgroundImage} />
            <ScrollView style={styles.container} >
                <Details 
                name={business.name} 
                stars={business.rating} 
                image={business.photos} 
                phone={business.phone} 
                reviews={business.review_count} 
                hours={business.hours}
                isOpen={business.hours.[0].is_open_now}
                address={business.location.display_address}

                />
                <Directions destination={business.coordinates} name={business.name}/>
            </ScrollView>
    <Text>debugging</Text>
        </View>
    )
    

    
}

BusinessScreen.navigationOptions = ({ /*navigation*/ }) => {
    return {
        headerShown: false,

    }
}


const styles = StyleSheet.create({
    backgroundImage: {
        width: SCREEN_WIDTH,
        flex: 1,
        height: 400,
        resizeMode: 'contain'
    },
    container: {
        marginTop: '90%',
        borderRadius: 46,
        backgroundColor: 'white',
        height: 500,
    },
})
