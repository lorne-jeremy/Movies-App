//Create
const movieURL = 'https://pricey-decisive-aragosaurus.glitch.me/movies';

// const postOptions = {
//     method:'POST',
//     headers:{'Content-Type': 'application/json'},
//     body:JSON.stringify()
// }
//Code to submit Movie name and rating into an object
$(document).ready(() => {
    $('.addMovie').on('click', (e) => {
        e.preventDefault();
        const searchText = $('#searchText').val();
        const movieRating = $('#movieRating').val();
        const movieToPost = {
            title: searchText,
            rating: movieRating
        }
        const postOptions = {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(movieToPost)
        }
        function getMovies() {
            let html = ''
            fetch(movieURL)
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    $('#output').html(data.map(movie => `<p>${movie.title}: ${movie.rating}</p>`))
                })

            //     for(i = 0; i < data.length; i++)
            // console.log(data[i].title,data[i].rating)}
            // )

        }
        function myRating(title, rating, outputFunction) {
            const movieAndRating = `${title}: ${rating}`;
            outputFunction(movieAndRating);
        }
        function displayInput(input) {
            document.getElementById("output").innerHTML = input;
        }
        myRating(searchText, movieRating, displayInput);

        // function getInfo(outputFunction){
        //     const request = $.get(movieURL,function (result){
        //         const infoToDisplay = result.data;
        //         outputFunction(infoToDisplay)
        //     })
        // }
        // getInfo(displayInput)
        //
        // function displayMovieInfo(info){
        //     let html = '';
        //     info.forEach((title,rating) =>{
        //         html += `<p>${movie}: ${rating}</p>`
        //     })
        //     $('#output').append(html);
        // }
        // getInfo(displayMovieInfo)


        fetch(movieURL,postOptions).then(getMovies)
    });
});

// function myGreeter(title, rating, outputFunction) {
//     const movieAndRating = `${title}: ${rating}`;
//     outputFunction(movieAndRating);
// }
// function displayInput(input) {
//     document.getElementById("output").innerHTML = input;
// }
// myGreeter(, "Jay", displayInput);

// function postMovies(movieTitle,movieRating){
// let moviesToPost = {
//     title: movieTitle,
//     rating: movieRating
// }
// return moviesToPost;
// }
//



// function getMovies(){
//     fetch(movieURL)
//         .then(resp => resp.json())
//         .then(data => console.log(data))
//
// }
// getMovies()
//
// fetch(movieURL,postOptions).then(getMovies)
//
// const movies = getMovies();
