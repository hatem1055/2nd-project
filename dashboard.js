$(document).ready(function(){
 //loading screen
     $('.loading').fadeOut(1000);
     console.log("hasj");
//hiding and showing placeholder
$("input").focus(function (){
var placeholder=$(this).attr("placeholder");
$(this).attr("placeholder","");
$(this).blur(function (){
$(this).attr("placeholder",placeholder);
});
});
//showing popups
$(".nav-item").hover(function (){
$($(this).data("target")).css({
 "opacity":"1",
 "cursor":"text"
 });
 },function (){
  $($(this).data("target")).css({
 "opacity":"0",
 "cursor":"default"
 });
  });
//collapsing of side nav
$(".navbar-toggler").click(function (){
 $(".shadow").show();
$($(this).data("target")).animate({
"right":0 
 },300);
console.log($(this).data("target"));
});
$(".shadow,.side-nav-closer").click(function (){
 $("#side-nav").animate({
"right":-290 
 });
 $(".shadow").hide();
 console.log("clcked");
});
 //making the side fixed
 if($(window).scrollTop()>280){
$(".side").css({
 "position":"fixed",
 "width":"33.33333%",
 "margin-top":"56px"
 });
 }
 //making the slide relative
else{
$(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
}
$(window).scroll(function (){
 //making the side fixed
 if($(window).scrollTop()>280){
$(".side").css({
 "position":"fixed",
 "width":"33.33333%",
 "margin-top":"56px"
 });
 }
 //making the slide relative
else{
$(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
}
});
//the responsive behaviour
//side responsive behaviar
if($(window).width()<1200){
$(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
//making the scroll function doesnt work if the width is small
  $(window).scroll(function (){
 if($(window).scrollTop()>280){
$(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
 }
else{
$(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
}
});
 }
 //making the scroll function work if the width is big
 else{
$(window).scroll(function (){
 if($(window).scrollTop()>280){
$(".side").css({
 "position":"fixed",
 "width":"33.33333%",
 "margin-top":"56px"
 });
 }
else{
$(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
}
});
}
//removing class conatiner in mobile
if($(window).width()<356){
 $(".container-fluid").removeClass("container-fluid");
}
//on resizing fuctions
$(window).resize(function (){
 //making the side relative if the width small
 if($(window).width()<1200){
  $(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
  //making the scroll function doesnt work if the width is small
  $(window).scroll(function (){
 if($(window).scrollTop()>280){
$(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
 }
else{
$(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
}
});
}
//making the scroll function  work if the width is big
 else{
$(window).scroll(function (){
 if($(window).scrollTop()>280){
$(".side").css({
 "position":"fixed",
 "width":"33.33333%",
 "margin-top":"56px"
 });
 }
else{
$(".side").css({
 "position":"relative",
 "width":"auto",
 "margin-top":"0"
 });
}
});
}
//removing class conatiner in mobile
if($(window).width()<356){
 $(".container-fluid").removeClass("container-fluid");
}
else{
 $(".main-wrapper").addClass("container-fluid");
}
});
});