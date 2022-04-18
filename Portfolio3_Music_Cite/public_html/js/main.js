/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


$(document).ready(function()
{
    $('.img_footer').width($(window).width());
    $('.img_header').width( $(window).width()); 
   $('.menu_text').hover(function()
   {
       var i=$('.menu_text').index($(this));
     
       var text=$(this).text();
       
        $('.menu_text').each(function (index){
            if(text==$('.menu_text').eq(index).text()){
               $('.line_menu_text2').eq(index).addClass('line_menu_text');
                $('.flag').eq(index).addClass('color_red');
                 
            }
            else{
                 $('.flag').eq(index).removeClass('color_red');
         $('.line_menu_text2').eq(index).removeClass('line_menu_text');
          //$('.line_menu_text2').eq(i).addClass('line_menu_text');
         $('.flag').eq(index).addClass('menu_text');
         
            }
        
          
         
        });
        
   }); 
    $('.menu_text').click(function()
   {
       var i=$('.menu_text').index($(this));
       
        $('.menu_text').each(function (index){
         $('.flag').eq(index).removeClass('color_red');
         $('.line_menu_text2').eq(index).removeClass('line_menu_text');
          $('.line_menu_text2').eq(i).addClass('line_menu_text');
         $('.flag').eq(index).addClass('menu_text');
          $('.flag').eq(i).addClass('color_red');
          
         
        });
        
   }); 
  var t= $('.Big_title_content').text();
  t=t.replaceAll('  ', '')
var words=t.split(' ');
words.forEach(function(element,index,words)
{
    if(index%2==0){
    $('.Big_title_content').parent().append($('<span class="  color_red_music">'+element+" " +'</span>'));
    }
    else{
       $('.Big_title_content').parent().append($('<span class=" color_white">'+element+'</span>'));
    }
});
$('.Big_title_content').text("");
$('.flag_polosa').hover(function(){
    var index=$('.flag_polosa').index($(this));
    $('.flag_polosa').each(function(i){
        $('.bg_polosa').eq(i).css('background','#f23005');
         $('.bg_polosa').eq(index).css('background','#c42400');
    });
});

    var height_main_photo=0;
           $('.img_leptop').width( ($(window).width() /3));  
           
           var width=$('.bg_polosa').width();
            $('.bg_polosa').height( width);
            $('.height_row').each(function(index){
               height_main_photo+= $('.height_row').eq(index).height();
            });
            $('.img_header').height( height_main_photo); 

});