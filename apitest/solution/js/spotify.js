// API Docs at: 
// https://developer.spotify.com/technologies/web-api/search/

// Album:
// 'http://ws.spotify.com/search/1/album.json?q=';

// Artist:
// 'http://ws.spotify.com/search/1/artist.json?q=';

// Track:
// 'http://ws.spotify.com/search/1/track.json?q=';

var form = $('#search');
var input = $('#search-keyword');
var dropdown = $('#search-type');
var results = $('#results');

form.on('submit', search);
dropdown.on('change', search);

function search( event ){
  event.preventDefault();
  var kind = $(':selected').val();
  $.getJSON("http://ws.spotify.com/search/1/" + kind + '.json?q=' + input.val(), function( response ){
    render(kind, response);
  });
}

function render( kind, response ){
  var things = response[kind+'s'];
  results.html('');
  $.each( things, function( index, thing ){
     results.append("<li>"+ thing.name +"</li>");
  });
}
