$(document).ready(function(){

  $(".text").click(function(){

    $(".img1").toggle();
    $(".par1").toggle();
  });

  $(".type").click(function(){

    $(".img2").toggle();
    $(".par2").toggle();
  });

   $(".value").click(function(){

     $(".img3").toggle();
     $(".par3").toggle();
   })

   //Hower
   $("#col-1").hover(function() {
     $("#safe").fadeTo("slow",0.3);
     $("#text1").fadeTo("slow",1);
   },function() {
     $("#safe").fadeTo("slow",1);
     $("#text1").fadeTo("slow",0);
   });

   $("#col-2").hover(function() {
     $("#java").fadeTo("slow",0.3);
     $("#text2").fadeTo("slow",1);
   },function() {
     $("#java").fadeTo("slow",1);
     $("#text2").fadeTo("slow",0);
   });
});
