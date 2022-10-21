const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost:27017/web15");

const movieSchema =  mongoose.Schema({
    title : String,
    year : Number,
    imdbrating : Number,
})

const MoviesModel = mongoose.model("movie", movieSchema)


module.exports = {
    connection,
    MoviesModel
}


