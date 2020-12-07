import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import useResults from '../hooks/useResults'
import Yelp from '../api/yelp'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import VerticalCard from '../components/categoryComponents/VerticalCard'

export default function CategoryScreen({navigation}) {
    const name= navigation.getParam('name')
    
    const [error, setError] = useState('')
    const [businesses, setBusineses] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
              
                let res = await Yelp.search(name)
                setBusineses(res)
                setIsLoading(false)
            } catch (error) {
                setError('Unfortunately somethng went wrong')
            }
        }
        fetchData()

    }, [error])
    return (
        <FlatList 
        data={businesses}
        renderItem={({item}) => {
         return <VerticalCard name={item.name} image={item.imageSrc}/>
        }}
        />

       
    )
}

CategoryScreen.navigationOptions = ({ /*navigation*/ }) => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({})
