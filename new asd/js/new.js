$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#hi').addClass('shrink');
    }
    else {
    $('#hi').removeClass('shrink');
    }
  });
	
	
	
  });

  
  