/* information to reach API */
const apiKey = 'SwPovueNX1mz0CeoJk6TKKt2k6l3rFRDRqX-X4KwPeu20Mhv3bjh25VV679O2Eo3CTuuSEEUEGJXL2HxpSTzcA56-o8lK2n3npAdWSYQiqZWYMKcnC2BhJ2qE9XWXXYx';
const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        id: business.id,
                        imagesrc: business.image_url
                    }
                });
            }
        })
    }
}

export default Yelp