//Create

$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        postMovies(searchText);
        e.preventDefault();
    });
});

function postMovies(searchText){
let moviesToPost = {
    title: searchText,
    rating: ''
}
   console.log(moviesToPost)
}



const movieURL = 'https://pricey-decisive-aragosaurus.glitch.me/movies';

// const postOptions = {
//     method:'POST',
//     headers:{'Content-Type': 'application/json'},
//     body:JSON.stringify(moviesToPost())
// }
// let movietitle = document.getElementById("movie")
// let rate = $('#rating').innerText
// console.log(movietitle)
// function addToMovieList(){
//     moviesToPost.title = movietitle;
//     moviesToPost.rating = rate;
// }
//
//
// // function postMovies(input) {
//
// // }
// function getMovies(){
//     fetch(movieURL)
//         .then(resp => resp.json()).then(data => console.log(data))
// }
// getMovies()
//
// // fetch(movieURL,postOptions).then(getMovies)
//
// const movies = getMovies();
