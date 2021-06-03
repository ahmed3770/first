$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#hi').addClass('nan');
    }
    else {
    $('#hi').removeClass('nan');
    }
  });
	
	
	
	});