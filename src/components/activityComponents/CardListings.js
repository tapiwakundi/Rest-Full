import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Card from './Card'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

export default function CardListings({ businesses, type, isLoading }) {

    if (!businesses.length) {
        return null
    }

    return (
        <View style={styles.card} >
            <Text style={styles.header}>{type}</Text>
            {/* <Text style={{marginLeft: 30}}>{`Results: ${businesses.length}`}</Text> */}
            <View>
                {
                    isLoading ? <ShimmerPlaceHolder
                        style={{ height: 100 }}

                    /> : <FlatList
                            data={businesses}
                            renderItem={({ item }) => {
                                return <Card name={item.name} stars={item.rating} image={item.imageSrc} id={item.id} reviews={item.reviewCount} />
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
