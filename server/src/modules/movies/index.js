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

const discoverMovie = async ({ filter }, context) => {
return await axios.get(`${BASE_URL}discover/movie?api_key=${API_KEY}&language=${context.locale}&sort_by=${filter.sortBy}.${filter.sortDirection}&include_adult=${filter.includeAdult}&page=${filter.page}&primary_release_year=${filter.primaryReleaseYear}&year=${filter.year}&with_genres=${filter.genre}`)
}

const getList = async (context) => {
    const result = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${context.locale}`)
    return result.data
}

module.exports = {
    getPopular,
    getMoviesById,
    discoverMovie,
    getList
}