import React, { useState, useEffect, useContext } from 'react'
import { Button, StyleSheet, Text, View, Linking } from 'react-native'
import MapView, {Circle, Marker, PROVIDER_DEFAULT} from 'react-native-maps'
import { Dimensions } from 'react-native'
import openMap from 'react-native-open-maps';
import { Permissions } from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions'
import * as Location from 'expo-location';
import { Context as LocationContext} from '../../context/locationContext'

const SCREEN_WIDTH = Dimensions.get('window').width

const GOOGLE_MAPS_KEY = 'Your api key goes here'

const Directions = ({destination, name}) => {

    const {setCurrentLocation, 
        state: {currentLocation}
    } = useContext(LocationContext)
    
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

    const [errorMsg, setErrorMsg] = useState(null);
    const [duration, setDuration] = useState('')
    const [distance, setDistance] = useState('')

    useEffect(() => {
      setCurrentLocation();
      }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } 

    
   
    return (
        <View style={styles.container}>
            <Text style={styles.header} >Directions</Text>
            <Text style={styles.directions}>{`${name} is ${duration} away and ${distance} away `}</Text>
            <MapView 
            style={styles.map} 
            showsPointsOfInterest={true}

            region={
                {latitude: destination.latitude,
                longitude: destination.longitude,
                longitudeDelta: 0.08,
                latitudeDelta: 0.2
            }
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
                origin={currentLocation}
                destination={destination}
                apikey={GOOGLE_MAPS_KEY}
                strokeWidth={3}
                strokeColor='rgb(0,122,255)'
                onReady={result => {
                    let distance= result.distance
                    let duration = result.duration
                    setDistance(`${Math.round(distance * 100) / 100} km`)
                    setDuration(`${Math.round(duration) } min`)
                }}
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
    },
    directions: {
        marginHorizontal: 25,
        color: '#777',
        marginVertical: 10
    }

})
