$(document).ready(function(){
    $('.materialboxed').materialbox();

     $('.slider').slider();

      
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

     $('.parallax').parallax();

    $(".button-collapse").sideNav();



    $(".indexGallery").hide(true);

    



    $(".conejo").click(function(){
     	$(".indexGallery").hide(true);
     	$(".conejoGallery").show()
     		});

    $(".spitfire").click(function(){
     	$(".indexGallery").hide(true);
     	$(".spitfireGallery").show()
     		});

    $(".lampara").click(function(){
     	$(".indexGallery").hide(true);
     	$(".lamparaGallery").show()
     		});
    
    $(".chess").click(function(){
     	$(".indexGallery").hide(true);
     	$(".chessGallery").show()
     		});

  });
	

   
       
