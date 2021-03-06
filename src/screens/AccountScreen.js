import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, StatusBar } from 'react-native'
import CardListings from '../components/activityComponents/CardListings'
import SearchBar from '../components/SearchBar'
import CategoryListings from '../components/categoryComponents/CategoryListings'
import ActivityCategoryListings from '../components/activityComponents/ActivityCategoryListings'
import { Context as BusinessContext } from '../context/initialBusinessesContext'
import SwitchSelector from "react-native-switch-selector";



export default function AccountScreen() {



    return (
        <>
            <View style={styles.container}>

            </View>
            <ScrollView style={styles.container}>
                <View style={styles.hello} >
                    <Text style={styles.greet} >Hey, Tapiwa</Text>
                    <Image style={styles.profilepic} source={require('../../assets/images/profile.png')} />
                </View>
                <Text style={styles.greet} >Welcome to your account page</Text>


            </ScrollView>
            <StatusBar barStyle='dark-content' />
        </>
    )
}

AccountScreen.navigationOptions = ({ /*navigation*/ }) => {
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
