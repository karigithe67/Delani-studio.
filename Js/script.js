$(document).ready(function(){

  $(".design").click(function(){

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
      $("#col-3").hover(function() {
     $("#naco").fadeTo("slow",0.3);
     $("#text3").fadeTo("slow",1);
   },function() {
     $("#naco").fadeTo("slow",1);
     $("#text3").fadeTo("slow",0);
   });
   $("#col-4").hover(function() {
  $("#safal").fadeTo("slow",0.3);
  $("#text4").fadeTo("slow",1);
},function() {
  $("#safal").fadeTo("slow",1);
  $("#text4").fadeTo("slow",0);
});
});
