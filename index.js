// 1. create web page using html & css,
// 2. make search engine function w/js by showing the first three images on the page
// 3. get the skeleton loading state to show on the page
// category:
// action/adventure (transformers), kids (toy story)

// E - Commerce App Video {16:10} $$$$$$$$$$$$$$

function renderMovies() {
const movieWrapper = document.querySelector('.movies')

const movies = getMovies()
console.log(movies)

movieWrapper.innerHTML = 
`<div class="movies">
<div class="movie-wrapper">
    <div class="movie">
        <figure>
        <img class="movie__img" src="${movies.Poster}" alt="">
        </figure> 
                <h4 class="movie__title">"${movies.Title}"</h4>
    </div>`
}
setTimeout(() => {
  renderMovies();
}, 2000)





// FAKE DATA
function getMovies() {
  return [
{
Title: "Transformers",
Year: "2007",
imdbID: "tt0418279",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_SX300.jpg"
},
{
Title: "Transformers: Dark of the Moon",
Year: "2011",
imdbID: "tt1399103",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg"
},
{
Title: "Transformers: Revenge of the Fallen",
Year: "2009",
imdbID: "tt1055369",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_SX300.jpg"
},
{
Title: "Transformers: Age of Extinction",
Year: "2014",
imdbID: "tt2109248",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_SX300.jpg"
},
{
Title: "Transformers: The Last Knight",
Year: "2017",
imdbID: "tt3371366",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BYWNlNjU3ZTItYTY3Mi00YTU1LTk4NjQtYjQ3MjFiNjcyODliXkEyXkFqcGc@._V1_SX300.jpg"
},
{
Title: "Transformers: Rise of the Beasts",
Year: "2023",
imdbID: "tt5090568",
Type: "movie",
Poster: "https://m.media-amazon.com/images/M/MV5BZTVkZWY5MmItYjY3OS00OWY3LTg2NWEtOWE1NmQ4NGMwZGNlXkEyXkFqcGc@._V1_SX300.jpg"
},
];
}




