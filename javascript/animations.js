// set variables for the row & col class
var col = $('.col').children();
var row = $('.row').children();

// add the js class to hide boxes
$('.col, .row').addClass('js');
if ($('.col').hasClass('js')) {
  //loop through all item classes after first item
  col.nextAll('.item').each(function(i){
    var element = $(this);
    setTimeout(function() { 
      (element).addClass('fadeInDown');
      }, i * 250);
  }); 
}

if ($('.row').hasClass('js')) {
  //loop through all item classes after first item
  row.nextAll('.item').each(function(i){
    var element = $(this);
    setTimeout(function() { 
      (element).addClass('fadeInUp');
      }, i * 250);
  }); 
}