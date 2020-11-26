import React, { useState } from 'react'
import { Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function SearchBusiness(props) {
    const [searchItem, setSearchItem] = useState('')

    const handleChange = e => {
        setSearchItem(e)
    }

    const handleSearch = () => {
        props.handlePress(searchItem)
        setSearchItem('')
    }


    return (

        <Modal
            animationType='slide'
            visible={props.isAddMode}

        >
            <View style={styles.container} >
                <TextInput
                    style={styles.input}
                    placeholder='Enter Password '
                    autoCapitalize='sentences'
                    autoCorrect={false}
                    value={searchItem}
                    onChangeText={handleChange}
                />
                <TouchableOpacity style={styles.btn} onPress={handleSearch} >
                    <Text style={styles.done} >Search</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnGhost} onPress={props.handleCancel} >
                    <Text style={styles.textGhost} >Cancel</Text>
                </TouchableOpacity>
            </View>
        </Modal>


    )

}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        flex: 1
    },
    input: {
        backgroundColor: '#eee',
        padding: 10,
        width: 300,
        borderRadius: 20,
        height: 50

    },
    btn: {
        backgroundColor: '#fc0054',
        borderRadius: 50,
        padding: 15,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    btnGhost: {
        borderColor: '#fc0054',
        borderWidth: 2,
        borderRadius: 50,
        padding: 15,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    done: {
        color: 'white'
    },
    textGhost: {
        color: '#fc0054'
    }
})
