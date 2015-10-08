$(document).ready(function(){
  $('.box').mouseenter(function() {
  $( this ).fadeOut();
});  
  $('.box').mouseleave(function() {
  	$( this ).fadeIn();
  });
});