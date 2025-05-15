// 1. create web page using html & css, 
// 2. make search engine function w/js by showing the first three images on the page
// 3. get the skeleton loading state to show on the page
// category:
// action/adventure (transformers), kids (toy story)

// E - Commerce App Video {5:28}

function renderMovies() {
    const movieWrapper = document.querySelector('.movie')
console.log(movieWrapper) 
`<div class="movie">
    <figure>
    <img class="movie__img" src="https://m.media-amazon.com/images/M/MV5BZjM3ZDA2YmItMzhiMi00ZGI3LTg3ZGQtOTk3Nzk0MDY0ZDZhXkEyXkFqcGc@._V1_SX300.jpg" alt="">
    </figure> 
    <h4 class="movie__title">Transformers</h4>
</div>`
}

setTimeout(() => {
    renderMovies();
}, 2000);




