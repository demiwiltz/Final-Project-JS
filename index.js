// 1. create web page using html & css,
// 2. make search engine function w/js by showing the first three images on the page
// 3. get the skeleton loading state to show on the page
// category:
// action/adventure (transformers), kids (toy story)

// E - Commerce App Video {16:10} $$$$$$$$$$$$$$

function renderMovies(filter) {
  const movieWrapper = document.querySelector(".movie"); 

 const movies = getMovies();

 if(filter === 'Action/Adventure') {
 console.log(filter)
const filteredMovies = movies.sort((a, b) => a.categoryId - b.categoryId);
console.log(filteredMovies)
}

const moviesHtml = movies.map((movie) => {
  return `<div class="movie">
    <figure>
    <img class="movie__img" src="${movie.poster}" alt="">
    </figure> 
    <h4 class="${movie.title}">${movie.title}</h4>
</div>`;
}).join("");

movieWrapper.innerHTML = moviesHtml
}



function filterMovies(event) {
  renderMovies(event.target.value)
}



setTimeout(() => {
  renderMovies();
}, 2000);

// FAKE DATA
function getMovies() {
  return [
    {
      id: 1,
      title: "Transformers",
      year: "2007",
      type: "movie",
      categoryId: "Action/Adventure",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 2,
      title: "Transformers: Revenge of the Fallen",
      year: "2009",
      type: "movie",
      categoryId: "Action/Adventure",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNjk4OTczOTk0NF5BMl5BanBnXkFtZTcwNjQ0NzMzMw@@._V1_SX300.jpg",
    },
    {
      id: 3,
      title: "Transformers: Age of Extinction",
      year: "2014",
      type: "movie",
      categoryId: "Action/Adventure",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_SX300.jpg",
    },
    {
      id: 4,
      title: "Kong: Skull Island",
      year: "2017",
      type: "movie",
      categoryId: "Action/Adventure",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTcwMjcxYTQtYjJlOS00YTE1LWIyZGYtOGRlOTBlMWZmYTliXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 5,
      title: "Red Notice",
      year: "2021",
      type: "movie",
      categoryId: "Action/Adventure",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOGNjNGQ3MmItYTM5NS00NjBiLWI0ZTItZDE5ZjQyNjg3ODBjXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      id: 6,
      title: "The Gray Man",
      year: "2022",
      type: "movie",
      categoryId: "Action/Adventure",
      poster:
        "https://m.media-amazon.com/images/M/MV5BZmFhZTNlNzctZGQzZi00MTA3LThiNjMtYWQzNjUzMjNjZjA3XkEyXkFqcGc@._V1_SX300.jpg",
    },
  ];
}

// FAKE DATA
// function getKidsMovies() {
//   return [
//     {
//       id: 1,
//       title: "Toy Story",
//       year: "1995",
//       type: "movie",
//       categoryId: "Family",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_SX300.jpg",
//     },
//     {
//       id: 2,
//       title: "Toy Story 2",
//       year: "1999",
//       type: "movie",
//       categoryId: "Family",
//       poster:
//          "https://m.media-amazon.com/images/M/MV5BNzVmODlhMDEtY2YxZi00OTVjLTlkNTktN2Q2OTRlM2I4M2FhXkEyXkFqcGc@._V1_SX300.jpg",
//     },
//     {
//       id: 3,
//       title: "Toy Story 3",
//       year: "2010",
//       type: "movie",
//       categoryId: "Family",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
//     },
//     {
//       id: 4,
//       title: "Despicable Me",
//       year: "2010",
//       type: "movie",
//       categoryId: "Family",
//       poster:
//         "https://m.media-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg",
//     },
//     {
//       id: 5,
//       title: "Kung Fu Panda",
//       year: "2008",
//       type: "movie",
//       categoryId: "Family",
//       poster:
//        "https://m.media-amazon.com/images/M/MV5BZDU5MDNiMGItYjVmZi00NDUxLTg2OTktNGE0NzNlNzM4NzgyXkEyXkFqcGc@._V1_SX300.jpg",
//     },
//     {
//       id: 6,
//       title: "Ice Age",
//       year: "2002",
//       type: "movie",
//       categoryId: "Family",
//       poster:
//        "https://m.media-amazon.com/images/M/MV5BMDBlYzU2OGMtOGJjNi00ZGZjLWIwNjMtYzdiZjkwYWNjZDljXkEyXkFqcGc@._V1_SX300.jpg",
// //     },
//   ];
// }



