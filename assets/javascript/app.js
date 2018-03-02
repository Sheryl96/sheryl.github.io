$(window).ready(function() {
	
	  setTimeout(function() {
		$('.spinner').fadeOut("slow");
			
		  setTimeout(function() {
          $('#prelaoder').fadeOut("slow"); 
          
		  }, 700);	  
	  }, 700);	
  
    
      // TypeIt Function for the Jumbotron Heading
      $('#type-this').typeIt({
        strings: ["Always passionate about the latest in technology","I am a LinkedIn Campus Editor", "Also a Microsoft Student Partner","An out of the box thinker who believes nothing is impossible." ],
        speed: 100,
        breakLines: false,
        deleteDelay: 1000,
        startDelay: 2000,
        loop: false
    })

     // Smooth Scroll from Anchor
     $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });
});
