import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, StatusBar } from 'react-native'
import CardListings from '../components/activityComponents/CardListings'
import SearchBar from '../components/SearchBar'
import Yelp from '../api/yelp'
import useResults from '../hooks/useResults'
import CategoryListings from '../components/categoryComponents/CategoryListings'
import ActivityCategoryListings from '../components/activityComponents/ActivityCategoryListings'

export default function SearchScreen() {

    const [error, filterBusinessesByPrice, handlePress, isLoading] = useResults()

    return (
        <>
            {error ? <Text>error</Text> : null}
             
            <View style={styles.container}>
            </View>
            <ScrollView style={styles.container}>
                <View style={styles.hello} >
                    <Text style={styles.greet} >Hey, Tapiwa</Text>
                    <Image style={styles.profilepic} source={require('../../assets/images/profile.png')} />
                </View>

                <SearchBar handlePress={handlePress} />
                <CategoryListings type='Explore Food' />
                <ActivityCategoryListings type='Explore Activities' />
                <CardListings businesses={filterBusinessesByPrice('$$$')} type='Recommended' isLoading={isLoading} />
                <CardListings businesses={filterBusinessesByPrice('$$')} type='Cheaper' isLoading={isLoading} />
                <CardListings businesses={filterBusinessesByPrice('$')} type='Cheap' isLoading={isLoading} />
            </ScrollView>
            <StatusBar barStyle='dark-content' />
        </>
    )
}

SearchScreen.navigationOptions = ({ /*navigation*/ }) => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    greet: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 50,
    },
    profilepic: {
        width: 75,
        height: 75,
        marginTop: 40
    },
    hello: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        marginHorizontal: 30,
        // borderColor: 'red',
        // borderWidth: 2
    }
})
