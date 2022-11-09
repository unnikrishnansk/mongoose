const express = require("express");
const {connection, StudentModel} = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Homepage")
})

app.get("/movies", async (req, res) => {
    const movies = await MoviesModel.find()
    res.send(movies)
})

app.post("/addmovies", async (req, res) => {
    const data = req.body;
    const movie = new MoviesModel(data)
    await movie.save()
    res.send(movie)
})
console.log("hello");
app.listen(8000, async () => {
    try{
        await connection
        console.log("Connected to DB Successfully")
    }
    catch(err){
        console.log("Error connecting to db")
        console.log(err)
    }le
    console.log("Listening at 8000")
})
