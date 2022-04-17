/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

$(document).ready(function()
{
    //alert(window.screen.width/2);
   $('.size_img_portfolio').width(window.screen.width); 
    $('.content_image2').width(window.screen.width/2); 
     $('.content_image').width(window.screen.width);
     $('.content_image2').height($('.height_section2').height());
      $('.footer_img').height($('.height_section_footer').height());
     if(window.screen.width>1000)
     {
        $('.content_image2').width(window.screen.width/3);  
     }
    
     if(window.screen.width<720)
     {
        $('.img_base').css('display','none');  
     }
   $(document).resize(function(){
       $('.size_img_portfolio').width(window.screen.width); 
        $('.content_image').width(window.screen.width);
       $('.content_image2').width(window.screen.width/2); 
         $('.content_image2').height($('.height_section2').height()); 
   });
});
