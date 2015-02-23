var input = $("#keyword")
var form = $("#search")
var apiUrl = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + " " + "&callback=myFunction";
//var apiUrl = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + "" 


//when a user submits a form
form.on("submit", function(e){
	//get the value of the input
	e.preventDefault()
	var userInput = input.val()
	input.val("")
	//ask the giffy api for search results
	$.getJSON(apiUrl + userInput, function(response){
		//when the data comes back


		/*for(i=0;i<response.data.length;i++){
		$("#view_gif").html("<img src =" + response.data[i]["images"]["fixed_height"]["url"] + ">");*/
			//display the results

//display all gif urls:
 			for(i=0;i<response.data.length;i++){
 $("#view_gif").append(response.data[i]["url"]);
		}
	});
});

