import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Yelp from '../api/yelpBusiness'
import Details from '../components/Details'

export default function BusinessScreen({navigation}) {
    const id = navigation.getParam('id')
   
    const [business, setBusiness] = useState([])

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

    return (
        <View>
            <Details name={business.name} stars={business.rating} image={(business.image_url)} />
    <Text>Walking dripped down see the DETAILS </Text>
        </View>
    )
}

const styles = StyleSheet.create({})
