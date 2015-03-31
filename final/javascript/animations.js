// set variables for the rows
var row = $('.row').children();

// add the js class to hide boxes
$('.row').addClass('js'); {
  //loop through all item classes after first item
  row.nextAll('.item').each(function(i){
    var element = $(this);
  }); 
}

if ($('.row').hasClass('js')) {
  //loop through all item classes after first item
  row.nextAll('.item').each(function(i){
    var element = $(this);
   //create a timeout element holding them from popping up 
    setTimeout(function() { 
      (element).addClass('fadeInUp');
      }, i * 250);
  }); 
}