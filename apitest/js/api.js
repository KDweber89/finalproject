var form = $('#search');
var input = $('#search-keyword');
var results = $('#results');


$("#myBtn").on('click', function(){
    var symbol = $("#search-keyword").val();
    console.log(symbol);
    $.getJSON("http://dev.markitondemand.com/Api/v2/quote/jsonp?symbol=" +symbol+ "&callback=?", function(response){
      console.log(response);
      $(document).ready(function(){
        $('#myBtn').click(function(){
          $('p').html(response)
        })
      })
    })
  })



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