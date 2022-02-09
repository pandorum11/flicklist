

var api = {
	root: "https://api.themoviedb.org/3",
	token: "f545eb6e45f12a9eb8652e9493afad84" // TODO put your api key here
}

/**
 * Makes an AJAX request to themoviedb.org, asking for some movies
 * if successful, prints the results to the console
 * https://api.themoviedb.org/3/movie/550?api_key=f545eb6e45f12a9eb8652e9493afad84
 * 
 * Ключ API (v3 auth)
 * f545eb6e45f12a9eb8652e9493afad84
 * Ключ доступа к API (v4 auth)
 * eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTQ1ZWI2ZTQ1ZjEyYTllYjg2NTJlOTQ5M2FmYWQ4NCIsInN1YiI6IjYyMDNiM2IwMGJjNTI5MDA0MjY2NDZjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwYBX_EcIHBrc4wDbsGCnHeqXjv6w2dxdQSa0sNvzaQ
 * 
 */
function testTheAPI() {
	$.ajax({
		url: api.root + "/discover/movie",
		data: {
			api_key: api.token,
		},
		success: function(response) {
			console.log("We got a response from The Movie DB!");
			console.log(response);
		}
	});
}


console.log("The script loaded!");
testTheAPI();
