const axios = require('axios')
const {Movies} = require('./entities/Movies')
const {Images} = require('./entities/Images')
const {API_KEY} = require('../../config')
const {BASE_URL} = require('../../config')

const getPopular = async (page) => {
    const result = await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    return new Movies(result.data)
}

const getImages = async () => {
    const result = await axios.get(`${BASE_URL}configuration?api_key=${API_KEY}`)
    return new Images(result.data)
}

const getMoviesById = async (id) => {
    return await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
}

module.exports = {
    getPopular,
    getImages,
    getMoviesById
}