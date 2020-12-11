import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ImageBackground } from 'react-native'
import Yelp from '../api/yelpBusiness'
import Details from '../components/activityComponents/Details'
import { Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Directions from '../components/mapComponents/Directions'
import { ScrollView } from 'react-native-gesture-handler'
const SCREEN_WIDTH = Dimensions.get('window').width

export default function BusinessScreen({ navigation }) {
    const id = navigation.getParam('id')

    const [business, setBusiness] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await Yelp.search(id)
                setBusiness(res)
            } catch (error) {
                setError('Unfortunately something went wrong')
            }

        }
        fetchData()

    }, [])

    if (!business) {
        return null
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
                isOpen={business.hours.is_open_now}

                />
                <Directions destination={business.coordinates} name={business.name}/>
            </ScrollView>

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
