const movieFetch =fetch ("http://localhost:3000/api/movies");

for(let movie of movies) {
const displayMovieFetch = movieFetch
.then(function(res) {
    if (res.ok) {
        return res.json();

    }
})
.then(function(value) {
    console.log(value);
})
.catch(function(err) {
    console.log(err);

});
}
