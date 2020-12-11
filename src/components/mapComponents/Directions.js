import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, Text, View, Linking } from 'react-native'
import MapView, {Circle, Marker, PROVIDER_DEFAULT} from 'react-native-maps'
import { Dimensions } from 'react-native'
import openMap from 'react-native-open-maps';
import { Permissions } from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions'
import * as Location from 'expo-location';


const origin = {}

const GOOGLE_MAPS_KEY = 'AIzaSyCwiRauwwaNWHnuLAEWZiFj0ewyb5kTjFA'

const SCREEN_WIDTH = Dimensions.get('window').width


const Directions = ({destination, name}) => {
    
    const latitude = destination.latitude;
const longitude = destination.longitude;


const url = Platform.select({
  ios: `maps:0,0?q=${name}@${latitude},${longitude}`,
  android: "geo:" + latitude + "," + longitude + "?q=" + name
});

const goToDestination = () => {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          browser_url =
            "https://www.google.de/maps/@" +
            latitude +
            "," +
            longitude +
            "?q=" +
            name;
          return Linking.openURL(browser_url);
        }
      });
}

    
    
    
    let coordsPlace = {
        latitude: destination.latitude, 
        longitude: destination.longitude 
    }

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: location.latitude,
        longitude: location.longitude});
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    console.log(location);

    

    return (
        <View style={styles.container}>
            <Text style={styles.header} >Directions</Text>
            <MapView 
            style={styles.map} 
            region={
                {latitude: destination.latitude,
                longitude: destination.longitude,
                longitudeDelta: 0.002,
                latitudeDelta: 0.008}
            }
            provider={PROVIDER_DEFAULT}
            showsCompass={true}
            showsBuildings={true}
            showsTraffic={true}
            >
                <Marker 
                coordinate={coordsPlace}
                image={require('../../../assets/images/pin.png')}
                />
                <MapViewDirections 
                origin={location}
                destination={destination}
                apikey={GOOGLE_MAPS_KEY}
                />
             
            </MapView>

            <Button title='Take me here' onPress={goToDestination}  />
        </View>
    )
}

export default Directions

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: '700',
        paddingTop: 15,
        paddingLeft: 25,
        color: '#292929'
    },
    map: {
        height: 200,
        width: SCREEN_WIDTH * .85,
        marginBottom: 20,
        marginHorizontal: 25,
        borderRadius: 12,
        borderColor: 'white'
    },
    container: {
        marginBottom: 150
    }

})
