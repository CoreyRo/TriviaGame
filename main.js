console.log("hello");
var title = prompt("Name a movie");
var replaced = title.split(' ').join('+');
// var title = "Big+Lebowski";
var queryURL = "http://www.omdbapi.com/?t=" + replaced + "&apikey=40e9cece"

$.ajax({
	url: queryURL,
	method: "GET"
}).done(function (response) {
	console.log(response);
	console.log(response.Title);
	$("#imgDiv").html("<img src='"+ response.Poster + "'>" );
	$("#movieName").html(response.Title);
	$("#movieYear").html(response.Year);
	$("#movieRating").html(response.Rated);
	$("#movieRuntime").html(response.Runtime);
	$("#movieCast").html(response.Actors);
	$("#moviePlot").html(response.Plot);

});

// <h1 id="movieName"></h1>
// <h1 id="movieRating"></h1>
// <span id="movieCast"></span>
// <h1 id="movieRuntime"></h1>
// <span id="moviePlot"></span>