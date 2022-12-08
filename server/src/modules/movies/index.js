const axios = require('axios')
const {Movies} = require('./entities/Movies')
const {Images} = require('./entities/Images')
const {API_KEY} = require('../../config')
const {BASE_URL} = require('../../config')

const getPopular = async () => {
    const result = await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    console.log(result.data)
    return new Movies(result.data)
}

const getImages = async () => {
    const result = await axios.get(`${BASE_URL}configuration?api_key=${API_KEY}`)
    console.log(result.data)
    return new Images(result.data)
}

module.exports = {
    getPopular,
    getImages
}