// 1. create web page using html & css,
// 2. make search engine function w/js by showing the first three images on the page
// 3. get the skeleton loading state to show on the page
// category:
// action/adventure (transformers), kids (toy story)

// E - Commerce App Video {16:10} $$$$$$$$$$$$$$
let movies;

document.getElementById('searchButton').addEventListener('click', renderMovies);

async function renderMovies() {
const query = document.getElementById('searchBar').value;
// const apiUrl = `https://www.omdbapi.com/?apikey=79bfa222&s=transformers${query}`;

// const searchList = await fetch(apiUrl)
// const movieList = await searchList.json()
// console.log(movieList)

const movieWrapper = document.querySelector(".movies");
// movieWrapper.classList += ' movies__loading'
movieWrapper.innerHTML = `<i class="fas fa-spinner movies__loading--spinner"></i>`
movieWrapper.classList.add('movies__loading')

try {
  const searchList = await fetch(`https://www.omdbapi.com/?apikey=79bfa222&s=transformers${query}`)
  const movieList = await searchList.json() 

if(movieList.Response === "True" && movieList.Search) {
  movies = movieList.Search
  console.log(movies)


const movieHtml = movies
                .map((movie) => { // Renamed parameter from 'movies' to 'movie' for clarity
                    return `<div class="movie">
                        <figure>
                            <img class="movie__img" src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}" alt="${movie.Title}">
                        </figure>
                        <h4 class="movie__title">${movie.Title}</h4>
                    </div>`;
                })
                .join("");
            movieWrapper.innerHTML = movieHtml;
            console.log(movieHtml);
              } else {
            movieWrapper.innerHTML = `<p>No movies found for "${query}". Please try a different search term.</p>`;
            console.warn(`OMDb API Error: ${movieList.Error || 'Unknown error'}`);
              }
            } catch (error) {
        console.error("Error fetching movies:", error);
        movieWrapper.innerHTML = `<p>An error occurred while fetching movies. Please try again.</p>`;
        } finally {
        movieWrapper.classList.remove('movies__loading'); // Remove loading class regardless of success or failure
    }
  }
  

renderMovies()







// if(!movies) {
// movies = await getMovies();
// }

// movieWrapper.classList.remove('movies__loading')
// console.log(movies);

//   const movieHtml = movies
//     .map((movies) => {
//       return `<div class="movie">
//         <figure>
//         <img class="movie__img" src="${movies.Poster}" alt="">
//         </figure> 
//                 <h4 class="movie__title">${movies.Title}</h4>
//     </div>`;
//     })
//     .join("");
  // movieWrapper.innerHTML = movieHtml;
  // console.log(movieHtml);
// }

// setTimeout(() => {
//   renderMovies();
// }, 2000);



// FAKE DATA
function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          Title: "Transformers",
          Year: "2007",
          imdbID: "tt0418279",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "Transformers: Dark of the Moon",
          Year: "2011",
          imdbID: "tt1399103",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_SX300.jpg",
        },
        {
          Title: "Transformers: Revenge of the Fallen",
          Year: "2009",
          imdbID: "tt1055369",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_SX300.jpg",
        },
        {
          Title: "Transformers: Age of Extinction",
          Year: "2014",
          imdbID: "tt2109248",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_SX300.jpg",
        },
        {
          Title: "Transformers: The Last Knight",
          Year: "2017",
          imdbID: "tt3371366",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BYWNlNjU3ZTItYTY3Mi00YTU1LTk4NjQtYjQ3MjFiNjcyODliXkEyXkFqcGc@._V1_SX300.jpg",
        },
        {
          Title: "Transformers: Rise of the Beasts",
          Year: "2023",
          imdbID: "tt5090568",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BZTVkZWY5MmItYjY3OS00OWY3LTg2NWEtOWE1NmQ4NGMwZGNlXkEyXkFqcGc@._V1_SX300.jpg",
        },
      ]);
    }, 1000);
  });
}
