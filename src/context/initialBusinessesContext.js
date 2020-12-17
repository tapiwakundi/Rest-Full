import createDataContext from './createDataContext'
import Yelp from '../api/yelp'
import YelpBusiness from '../api/yelpBusiness'
import {SET_INITIAL_DATA, SET_INITIAL_DATA_FAILURE, SET_SEARCH_RESULTS, SET_SEARCH_RESULTS_FAILURE, SET_SEARCH_RESULTS_SUCCESS, SET_BUSINESS} from './types'

const initialBusinessesReducer = (state, action) => {
    switch (action.type) {
        case SET_INITIAL_DATA:
            return {...state, businesses: action.payload, isLoading: false}
        case SET_INITIAL_DATA_FAILURE:
            return{...state, error: action.payload}
        case SET_SEARCH_RESULTS_SUCCESS:
            return {...state, businesses: action.payload, isLoading: false}
        case SET_SEARCH_RESULTS:
            return {...state, isLoading: true}
        case SET_SEARCH_RESULTS_FAILURE:
            return {...state, error: 'There was an error'}
        case SET_BUSINESS:
            return {...state, business: action.payload}
        default:
            return state
    }
}

const fetchData = dispatch => async () =>  {
    try {
        const res = await Yelp.search('sushi')
        dispatch({type: SET_INITIAL_DATA, payload: res})
    } catch (error) {
        console.log(error);
        dispatch({type: SET_INITIAL_DATA_FAILURE, payload: error})
    }
}

const handlePress = dispatch => (term) => {
    Yelp.search(term)
        .then(dispatch({type: SET_SEARCH_RESULTS}))
        .then((businesses) => {
            dispatch({type: SET_SEARCH_RESULTS_SUCCESS, payload: businesses})
        })
        .catch(err => dispatch({type: SET_SEARCH_RESULTS_FAILURE}))
}

const fetchBusiness = dispatch => async id => {
    let res = await YelpBusiness.search(id)
    dispatch({type: SET_BUSINESS, payload: res})
}

const filterBusinessesByPrice= dispatch => (price) => {
    return businesses.filter(business => {
        return business.price === price
    })
}

export const { Provider, Context } = createDataContext(
    initialBusinessesReducer,
    {fetchData,
    handlePress,
    fetchBusiness
    },
    {error: '', 
    businesses: [], 
    isLoading: true, 
    business: []} 
)