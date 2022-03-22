//Create
const movieURL = 'https://pricey-decisive-aragosaurus.glitch.me/movies';
const moviesToPost = {
    title: '',
    rating: ''
}

const postOptions = {
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(moviesToPost)
}

function getMovies(){
    fetch(movieURL)
        .then(resp => resp.json()).then(data => console.log(data))
}
getMovies()

fetch(movieURL,postOptions).then(getMovies)

const movies = getMovies();


function assignMovies(movies){
for (var i = 0; i < movies.length; i++){
movies.title[i]
}
}

$('button').click(function(){

})
