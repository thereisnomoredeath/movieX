class Images {
    constructor(data) {
        this.baseUrl = data.images.base_url
        this.posterSizes = data.images.poster_sizes
    }
}

module.exports = {
    Images
}