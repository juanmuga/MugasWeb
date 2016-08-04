$(document).ready(function(){
    $('.materialboxed').materialbox();

    $('.parallax').parallax();


     $('.slider').slider();

      
    /*$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });*/

     $(".button-collapse").sideNav();

     $(".floatLogo").hide(true);

     $(".show").hover(function(){
     	$(".floatLogo").show()});

     $(".logout").hover(function(){
     	$(".floatLogo").hide()});
    

    


  });
	


   
       
