

var form = $('#search');
var input = $('#search-keyword');
var results = $('#results');

function search( event ){
  event.preventDefault();
  var symbol = $(':selected').val();
  $.getJSON("http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol= " +  symbol  + "&callback=myFunction"
    {
    render(symbol);
  }
  );
}

function render( kind, response ){
  var things = response[symbol];
  results.html('');
  $.each( things, function( index, thing ){
     results.append("<li>"+ thing.name +"</li>");
  });
}


//http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=AAPL&callback=myFunction