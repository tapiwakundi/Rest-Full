
const apiKey = '8yC19Qb1LhfI5R7XXm65RoogEKVuq19uscnTP8Qppzij22Fa7m4rSF1W4SQD9Av9gLv4WyzSAx6YhWB3hsacVZxFYNXEb-8UwfFZc6yTOC28GOk4MO4350_1HmWLX3Yx'


const YelpBusiness = {
    search(id){
        return fetch(`https://api.yelp.com/v3/businesses/${id}`, 
        { headers: {
            Authorization: `Bearer ${apiKey}` 
          }})
            .then((response) => {
                if (response) return response.json()
            })
            .then(r => {return r})
            .catch(err => console.log(err))
            
    }
}



module.exports = YelpBusiness
