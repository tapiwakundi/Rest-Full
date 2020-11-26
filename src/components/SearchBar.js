import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

export default function SearchBar(props) {
    const [searchItem, setSearchItem] = useState('')

    const handleChange = e => {
        setSearchItem(e)
    }

    const handleSearch = () => {
        props.handlePress(searchItem)
        setSearchItem('')
    }


    return (

            <View style={styles.container} >
                <Feather name='search' style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder='Search Restaurant'
                    autoCapitalize='sentences'
                    autoCorrect={false}
                    value={searchItem}
                    onChangeText={handleChange}
                    onEndEditing={handleSearch}
                />
            </View>
    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        marginTop: 20,
        flexDirection: 'row',
        backgroundColor: '#eee',
        marginHorizontal: 30,
        borderRadius: 15,
        height: 50,
        width: 320,
        paddingHorizontal: 15

    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18
    },
    icon: {
        alignSelf: 'center',
        fontSize: 35
    }
})
