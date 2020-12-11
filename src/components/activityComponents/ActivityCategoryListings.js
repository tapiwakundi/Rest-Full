import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import ActivityCategories from './ActivityCategories'
import CategoryCard from '../categoryComponents/CategoryCard'

export default function ActivityCategoryListings({ type, isLoading }) {

 
    return (
        <View style={styles.card} >
            <Text style={styles.header}>{type}</Text>
            <View>
              
                <FlatList
                        data={ActivityCategories.ActivityCategories}
                        renderItem={({ item }) => {
                            return <CategoryCard name={item.name} image={item.image} id={item.id}  />
                        }}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
              
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
