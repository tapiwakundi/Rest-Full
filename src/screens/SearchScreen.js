import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import CardListings from '../components/CardListings'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/yelp'





export default function SearchScreen() {
    const [businesses, setBusineses] = useState([])
    const [isAddMode, setIsAddMode] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')


    // const searchBusiness = () => {
    //     setIsAddMode(true)
    // }

    const filterBusinessesByPrice = (price) => {
        return businesses.filter(business => {
            return business.price === price
        })
    }

    const handlePress = (term) => {
        Yelp.search(term)
            .then(setIsLoading(true))
            .then((businesses) => {
                setBusineses(businesses)
                setIsLoading(false)
            })
            .catch(err => setError('Unfortunately something went wrong'))

        setIsAddMode(false)

    }

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await Yelp.search('sushi')
                setBusineses(res)
                setIsLoading(false)
            } catch (error) {
                setError('Unfortunately somethng went wrong')
            }
        }
        fetchData()

    }, [error])

    return (
        <View style={styles.container} >
            {error ? <Text>error</Text> : null}
            {/* <Button title='Search here' onPress={searchBusiness} /> */}
            <SearchBar handlePress={handlePress} />
            {/* <SearchBusiness isAddMode={isAddMode} handleCancel={() => setIsAddMode(false)} handlePress={handlePress} /> */}


            <CardListings businesses={filterBusinessesByPrice('$$$')} type='Expensive' isLoading={isLoading} />
            <CardListings businesses={filterBusinessesByPrice('$$')} type='Cheaper' isLoading={isLoading} />
            <CardListings businesses={filterBusinessesByPrice('$')} type='Cheap' isLoading={isLoading} />


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})
