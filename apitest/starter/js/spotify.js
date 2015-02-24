// API Docs at: 
// https://developer.spotify.com/technologies/web-api/search/

// Album:
// 'http://ws.spotify.com/search/1/album.json?q=';

// Artist:
// 'http://ws.spotify.com/search/1/artist.json?q=';

// Track:
// 'http://ws.spotify.com/search/1/track.json?q=';


//hide dropdown results tab
$("#select").hide();

//1. when the user submits a form
	$("#search").on("submit", function( event ){
		event.preventDefault();
		var select = $(":selected").val();
		var input = $("#search-keyword");
	//get the user input and save it
	var url = 	"http://ws.spotify.com/search/1/" + select + ".json?q=" + input.val(); 
	console.log(url);
	var keyword = input.val();
  	input.val("");
	//ask the api for the data
  	$.ajax({
	  	url: url, 
	  	dataType: "json", 
	  	type: "GET",
	  	success: function( response ){
	    	/*createDropdown( response, keyword );
*/	    	console.log(response);
  		}
	})
})

/*var url = "http://www.omdbapi.com/?s=" + input.val();
  var keyword = input.val();
  input.val("");*/



	// create a dropdown. 
