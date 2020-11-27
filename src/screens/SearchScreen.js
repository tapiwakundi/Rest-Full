import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import CardListings from '../components/CardListings'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/yelp'
import useResults from '../hooks/useResults'

export default function SearchScreen() {

    const [error, filterBusinessesByPrice, handlePress, isLoading] = useResults()

    return (
        <>
            {error ? <Text>error</Text> : null}
            <View style={styles.container}>
                <SearchBar handlePress={handlePress} />

            </View>
            <ScrollView style={styles.container}>
                <CardListings businesses={filterBusinessesByPrice('$$$')} type='Expensive' isLoading={isLoading} />
                <CardListings businesses={filterBusinessesByPrice('$$')} type='Cheaper' isLoading={isLoading} />
                <CardListings businesses={filterBusinessesByPrice('$')} type='Cheap' isLoading={isLoading} />
            </ScrollView>



        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    }
})
