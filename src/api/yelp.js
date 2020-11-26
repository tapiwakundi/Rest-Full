import axios from 'axios'
import { NativeModules } from 'react-native'

const apiKey = '8yC19Qb1LhfI5R7XXm65RoogEKVuq19uscnTP8Qppzij22Fa7m4rSF1W4SQD9Av9gLv4WyzSAx6YhWB3hsacVZxFYNXEb-8UwfFZc6yTOC28GOk4MO4350_1HmWLX3Yx'

// export default axios.create({
//     baseURL: `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses`,
//     headers: {
//         Authorization: `Bearer ${apiKey}`
//         }
// })


const sortBy = 'best_match'
const location = 'calgary'


const Yelp = {
    search(term){
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=calgary&sort_by=best_match&limit=50`, 
        { headers: {
            Authorization: `Bearer ${apiKey}` 
          }})
            .then((response) => {
                if (response) return response.json()
            })
            .then((jsonResponse) => {
                if (jsonResponse){
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].alias,
                            rating: business.rating,
                            reviewCount: business.review_count,
                            url: business.url,
                            price: business.price
                        }
                    })
                } 
            })
            
            
    }
}



module.exports = Yelp
