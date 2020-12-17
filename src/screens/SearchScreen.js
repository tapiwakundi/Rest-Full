import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, StatusBar, FlatList } from 'react-native'
import SearchBar from '../components/SearchBar'
import SwitchSelector from "react-native-switch-selector";
import VerticalCard from '../components/categoryComponents/VerticalCard'

// Context imports 
import { Context as BusinessContext } from '../context/initialBusinessesContext'
import { Context as LocationContext } from '../context/locationContext'


const options = [
    { label: "Budget Freiendly", value: "price" },
    { label: "Highest rated", value: "rating" }
];

export default function SearchScreen() {

    const { error, isLoading, fetchData, handlePress, state: { businesses } } = useContext(BusinessContext)
    const { state: { currentLocation }, setCurrentLocation } = useContext(LocationContext)

    useEffect(() => {
        setCurrentLocation()
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
                    style={{ marginHorizontal: 25 }}
                    animationDuration={400}
                />
                {
                    <FlatList
                        data={businesses}
                        renderItem={({ item }) => {
                            return (
                                <>
                                    <VerticalCard
                                        name={item.name}
                                        image={item.imageSrc}
                                        stars={item.rating}
                                        isLoading={isLoading}
                                        id={item.id}
                                        destination={item.location}
                                        currentLocation={currentLocation}
                                    />

                                    <View style={styles.border} ></View>
                                </>
                            )
                        }}
                        style={{ backgroundColor: 'white' }}
                        keyExtractor={item => item.id}
                    />
                }
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
