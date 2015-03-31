var form = $('#search');
var input = $('#search-keyword');
var results = $('#results');

$(document).ready(function(){
  $("#myBtn").on('click', function(){
      var symbol = $("#search-keyword").val();
      $.getJSON("http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=" +symbol+ "&callback=?", function(info){
        console.log(info);
        $("#results").html("Last Price: " + info.LastPrice);
        })
     })
  })


/*$("button").click(function(){
    $("p").append("<b>Appended text</b>");
});*/


/*        $('#myBtn').click(function(){
          $(results).append(info)
          })*/

/*var bob = document.getElementById(results);
var content = document.createTextNode(info);
bob.appendChild(info);

var theDiv = document.getElementById("<ID_OF_THE_DIV>");
var content = document.createTextNode("<YOUR_CONTENT>");
theDiv.appendChild(content);*/



/*var theDiv = document.getElementById(results);
theDiv.innerHTML += info; 


var div = document.getElementById('divID');
div.innerHTML += 'Text to append';
*/

/*var theDiv = document.getElementById("<ID_OF_THE_DIV>");
var content = document.createTextNode("<YOUR_CONTENT>");
theDiv.appendChild(content);*/


/*$(selector).append(content,function(index,html))*/



/*$('.results').css({'background-image': 'url(styles/' +images[Math.floor(Math.random()* images.length)] + ')'} );



/*var form = $('#search');
var input = $('#search-keyword');
var url = "http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=" +symbol+ "&callback=?"
input.val("")


$("#myBtn").on('click', function(){
    var symbol = $("#search-keyword").val();
    console.log(symbol);
    $.getJSON("http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=" +symbol+ "&callback=?", function(response){
      var html = [];


  $.each(response, function(index, d){
                  html.push("name : ", d.Name, ", ",
                          "Symbol : ", d.Symbol, ", ", 
                          "LastPrice : ", d.LastPrice, "<br>");
  });


      console.log(response);
      $(document).ready(function(){
        $('#myBtn').click(function(){
          $('p').html(response)
        })
      })
    })
  })*/


/*$("#myBtn").on('click', function(){
    var symbol = $("#search-keyword").val();
    $.getJSON("http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=" +symbol+ "&callback=?", function(response){
      console.log(response);
      $(document).ready(function(){
        $('#myBtn').click(function(){
          $('p').append(response)
        })
      })
    })
  })*/



















//.append.html

//http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=AAPL&callback=myFunction


/*var form = $('#search');
var input = $('#search-keyword');
var apiUrl = "http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=" +""+ "&callback=?";

  $("#myBtn").on('click', function(){
    var symbol = $("#search-keyword").val();
    console.log(symbol);
    $.getJSON(apiUrl + userInput, function(response){
      console.log(response);
      
      $(document).ready(function(){
        $('#myBtn').click(function(){
          $('p').append(response)
        })
      })
    })
  })


  $("#view_gif").append(response.data[i]["url"]);*/

  //write jquery thing. It allows you to write to a particular division. 