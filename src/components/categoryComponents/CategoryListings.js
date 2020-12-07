import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import CategoryCard from './CategoryCard'

const categories = [
    {
        name: "Burgers",
        image: require('../../../assets/images/burger.jpg')
    },
    {
        name: "Sushi",
        image: require('../../../assets/images/sushi.jpg')
    },
    {
        name: "Pizza",
        image: require('../../../assets/images/pizza.jpg')
    },
    {
        name: "Dessert",
        image: require('../../../assets/images/dessert.jpg')
    },
    {
        name: "Mexican",
        image: require('../../../assets/images/mexican.jpg')
    },
    {
        name: "Shawarma",
        image: require('../../../assets/images/mediterranean.png')
    },
]

export default function CategoryListings({ type, isLoading }) {

 
    return (
        <View style={styles.card} >
            <Text style={styles.header}>{type}</Text>
            <View>
                {
                    isLoading ? <ShimmerPlaceHolder
                        style={{ height: 100 }}

                    /> : <FlatList
                            data={categories}
                            renderItem={({ item }) => {
                                return <CategoryCard name={item.name} image={item.image} id={item.id}  />
                            }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                }
            </View>



            <View style={styles.border} ></View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingTop: 5,
    },
    border: {
        borderBottomWidth: 2,
        borderBottomColor: '#dfdbdb',
        marginTop: 10,
        marginLeft: 30
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        marginLeft: 30
    }
})
