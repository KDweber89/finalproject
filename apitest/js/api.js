

/*var form = $('#search');
var input = $('#search-keyword');
var results = $('#results');
*/

//create an add event listener
/*document.getElementById("submit").addEventListener("click", function( event ){
    document.getElementById("demo").innerHTML = "Hello World";
  });*/


/*function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}
document.getElementById("submit").addEventListener("click", function( event ){
document.getElementById("submit").addEventListener("click" , event);*/


function search( event ){
  alert("hi");
  event.preventDefault();
  var symbol = $(':selected').val();
  $.getJSON("http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol= " +  symbol  + "&callback=myFunction", function()
    {
    render(symbol);
  }
)};






/*function render( kind, response ){
  var things = response[symbol];
  results.html('');
  $.each( things, function( index, thing ){
     results.append("<li>"+ thing.name +"</li>");
  });
}*/

//http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=AAPL&callback=myFunction