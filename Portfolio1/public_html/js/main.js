/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

 $(document).ready(function(){
     $(".forma").hide();
     $("#search").click(function(){
        $(".hideMenu").hide(); 
        $(".forma").show();
     });
      $("#searchGoods").click(function(){
        $(".hideMenu").show(); 
        $(".forma"). hide ();
     });
    
     var h=0;
     $(".rowBlock3").each(function(index){
         
         h+=Number($(".rowBlock3").eq(index).css("height").replaceAll("px",""));
         
     });
     $('.mainPhoto2').css("height",h);
     var h1=0;
     $(".rowBlock4").each(function(index){
         
         h1+=Number($(".rowBlock4").eq(index).css("height").replaceAll("px",""));
         
     });
  
     $('.mainPhoto3').css("height",h1);
     
     $(".heightColumn").each(function(index){
       
         console.log($(".height8888 ").eq(index).css("height"));
         $(".heightColumn ").eq(index).height($(".height8888").eq(index).css("height"));
     });
     $(window).resize(function() {
         $('.mainPhoto2').css("width", $(window).innerWidth());
    $('.mainPhoto').css("width", $(window).innerWidth());
    $('.mainPhoto3').css("width", $(window).innerWidth());
  /* Act on the event */

  var widthRoundImage=$(".col-sm-2").css("width");



$(".roundImage img").css("width",widthRoundImage);
(".roundImage img").css("height",widthRoundImage);

  var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
  
         if (orientation === "landscape-primary") {
              
    $('.mainPhoto').css("width", $(window).innerWidth());
    $('.mainPhoto2').css("width", $(window).innerWidth());
      alert( $('.mainPhoto').css("width"));
  }
  else{
    $('.mainPhoto').css("width", $(window).innerHeight());
    $('.mainPhoto2').css("width", $(window).innerHeight());
  }
});
    var widthRoundImage=$("img.col-sm-2 .col-sm-3 .col-sm-1").css("width");
    var width=$(window).innerWidth();
    var height1=$(".heightRow").height();
    var height2=$(".heightRow2").height();
    var height7=$(".height7").height();
    var height5=$(".heightFooter").height();
    
    
	
     $('.mainPhoto').css("height",height1);
      $('.mainPhoto').css("width",width);
        
         $('.mainPhoto4').css("height",height7+150);
        $('.heightBGBlock8').css("height",height5+"px");
      $('.mainPhoto2').css("width",width);
      $('.mainPhoto3').css("width",width);
      $('.mainPhoto4').css("width",width);
    if(width<1400){
        var w=  width=$(window).innerWidth()/3;
        var w2=  width=$(window).innerWidth()/4;
        $(".roundImage ").css("width",w+"px");
        $(".roundImage img ").css("max-width",w+"px");
        $(".roundImageFood4 img").css("width",w+"px");
            
    }
    if(width>2400){
        $('.mainPhoto').attr("src","img/imgMobile/main38405x100.png");
         $('.mainPhoto').css("height",height1);
           $('.mainPhoto').css("width",width);
    }
    if(width<=400){
        $('.mainPhoto').attr("src","img/imgMobile/main375x667.png");
         $('.mainPhoto').css("height",height1);
           $('.mainPhoto').css("width",width);
    }
     if(width<=820){
        $('.mainPhoto').attr("src","img/imgMobile/main820x1180.png");
         $('.mainPhoto').css("height",height1);
         $('.mainPhoto').css("width",width);
    }
    else{
        $('.mainPhoto').attr("src","img/main.png");
         $('.mainPhoto').css("height",height1);
         $('.mainPhoto').css("width",width);
    }
$('.mainPhoto').css("width", $(window).innerWidth());





});

