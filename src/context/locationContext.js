import createDataContext from '../context/createDataContext'
import * as Location from 'expo-location';
import {SET_CURRENT_LOCATION} from './types'

const locationReducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_LOCATION:
            return {...state, currentLocation: action.payload}
        default:
            return state
    }
}

const setCurrentLocation = dispatch => async () => {
    let { status } = await Location.requestPermissionsAsync();
    if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
    }

    let location = await Location.getCurrentPositionAsync({});
    const origin = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
    }
    dispatch({type: SET_CURRENT_LOCATION, payload: origin})
      
}

export const { Provider, Context } = createDataContext(
    locationReducer,
    {setCurrentLocation
    },
    {currentLocation: {}} 
)