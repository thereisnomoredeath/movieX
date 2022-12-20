const axios = require('axios')
const {Movies} = require('./entities/Movies')
const {API_KEY} = require('../../config')
const {BASE_URL} = require('../../config')

const getPopular = async (page, context) => {
    const result = await axios.get(`${BASE_URL}movie/popular?api_key=${API_KEY}&language=${context.locale}&page=${page}`)
    return new Movies(result.data)
}

const getMoviesById = async (id, context) => {
    return await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=${context.locale}`)
}

module.exports = {
    getPopular,
    getMoviesById
}