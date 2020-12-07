import { useState, useEffect } from 'react'
import Yelp from '../api/yelp'



export default () => {
    const [error, setError] = useState('')
    const [businesses, setBusineses] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const handlePress = (term) => {
        Yelp.search(term)
            .then(setIsLoading(true))
            .then((businesses) => {
                setBusineses(businesses)
                setIsLoading(false)
            })
            .catch(err => setError('Unfortunately something went wrong'))
    }

    const filterBusinessesByPrice = (price) => {
        return businesses.filter(business => {
            return business.price === price
        })
    }



    useEffect(() => {
        async function fetchData() {
            try {
                const res = await Yelp.search('sushi')
                setBusineses(res)
                setIsLoading(false)
            } catch (error) {
                setError('Unfortunately somethng went wrong')
            }
        }
        fetchData()

    }, [error])

    return [error, filterBusinessesByPrice, handlePress, isLoading, useEffect ]
}