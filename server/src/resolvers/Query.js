const {getPopular, getImages} = require('../modules/movies/index')

async function movies(parent, args) {
  const data = await getPopular()
   return data
  }

  async function images(parent, args) {
    const data = await getImages()
     return data
    }
  
  module.exports = {
    movies,
    images
  }
  