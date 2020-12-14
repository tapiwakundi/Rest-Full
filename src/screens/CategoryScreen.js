import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import useResults from '../hooks/useResults'
import Yelp from '../api/yelp'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import VerticalCard from '../components/categoryComponents/VerticalCard'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { Context as BusinessContext } from '../context/initialBusinessesContext'
import { Context as LocationContext} from '../context/locationContext'

export default function CategoryScreen({ navigation }) {
    const name = navigation.getParam('name')

  
    const { error, isLoading, handlePress, state: { businesses } } = useContext(BusinessContext)
    const {state: {currentLocation}, setCurrentLocation} = useContext(LocationContext)


    useEffect(() => {
        handlePress(name)
        setCurrentLocation()
    }, [error])

  
    return (
        <ScrollView style={styles.container} >
            <Text style={styles.header} >Great choice!</Text>
            <Text style={styles.sub_header} >{`So here's what we found for ${name}`}</Text>
          


            {

                <FlatList
                    data={businesses}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <VerticalCard name={item.name} 
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



    )
}

CategoryScreen.navigationOptions = ({ /*navigation*/ }) => {
    return {
        headerShown: false
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: '800',
        marginLeft: 20
    },
    container: {
        backgroundColor: 'white',
    },
    border: {
        borderBottomWidth: 2,
        borderBottomColor: '#dfdbdb',
        marginTop: 10,
    },
    sub_header: {
        fontSize: 20,
        fontWeight: '800',
        marginLeft: 18,
        marginTop: 25
    }
})
