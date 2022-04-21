/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

 $(document).ready(function(){
if( $(window).width()<720){
 $('#photo').css("width", $(window).innerWidth()); 
 $('.image').addClass('img-fluid');
$('.image').removeClass('img_header');
 $('.img_content_left').width($(window).width()/1);
 $('.img_content_left').height($('.h').height());
}

else{

 var height=0;
 $('.height').each(function (index){
    height+=$('.height').eq(index).height();
 });
 var width2=0;
 width2=$('.width2').width();
 var height2=0;
 height2=$('.img_content_left').height();
 
 $('.img_content_left').each(function (index){
    $('.img_content_left').eq(index).width(width2);
     $('.height_column').eq(index).height(height2);
 });
 //height+=$('.img-fluid').height();
  $('.img_header').height($('.width').height());
  $('.img_header').width($('.width').width());
  $('.img_content_left').height($('.h').height());

}

});

