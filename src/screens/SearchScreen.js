import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, StatusBar } from 'react-native'
import CardListings from '../components/activityComponents/CardListings'
import SearchBar from '../components/SearchBar'
import CategoryListings from '../components/categoryComponents/CategoryListings'
import ActivityCategoryListings from '../components/activityComponents/ActivityCategoryListings'
import { Context as BusinessContext } from '../context/initialBusinessesContext'
import SwitchSelector from "react-native-switch-selector";


const options = [
    { label: "Budget Freiendly", value: "price" },
    { label: "Highest rated", value: "rating" }
];

export default function SearchScreen() {

    const { error, isLoading, fetchData, handlePress, state: { businesses } } = useContext(BusinessContext)

    useEffect(() => {
        fetchData()
    }, [error])



    return (
        <>
            <View style={styles.container}>

            </View>
            <ScrollView style={styles.container}>
                {error ? <Text>error</Text> : null}
                <View style={styles.hello} >
                    <Text style={styles.greet} >Hey, Tapiwa</Text>
                    <Image style={styles.profilepic} source={require('../../assets/images/profile.png')} />
                </View>

                <SearchBar handlePress={handlePress} />
                <SwitchSelector
                    options={options}
                    initial={0}
                    onPress={value => console.log(`Call onPress with value: ${value}`)}
                />

                <CategoryListings type='Explore Food' />
                <ActivityCategoryListings type='Explore Activities' />
                <CardListings businesses={businesses} type='Recommended' isLoading={isLoading} />
                {/* <CardListings businesses={filterBusinessesByPrice('$$')} type='Cheaper' isLoading={isLoading} />
                <CardListings businesses={filterBusinessesByPrice('$')} type='Cheap' isLoading={isLoading} /> */}
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
