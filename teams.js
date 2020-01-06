$(document).ready(function(){
 //loading screen
     $('.loading').fadeOut(1000);
     $(".loading").css("position","static");
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
//team removing
$("body").on("click",".fa-trash",function(){
 $(".remover").attr("data-remove",$(this).data("remove"));
});
$(".remover").click(function (){
  $($(this).attr("data-remove")).fadeToggle();
 $(this).removeAttr("data-remove");
 $(".remover-closer").click();
 });
//member removing
$("body").on("click",".member-remover",function (){
$(this).parent().remove();
});
//team edit
$("body").on("click",".team-header .edit-btn",function (){
 $(".editor").attr("data-edit",$(this).data("edit"));
 $(".editor").attr("data-selector",$(this).data("name"));
 console.log($(this).data("edit"));
});
$(".member-name-dropdown a").click(function(e){
 e.preventDefault();
var name=$(this).attr("data-name"),
    src=$(this).attr("data-src");
    $(".editor").attr("data-name",name);
    $(".editor").attr("data-src",src);
    });
$(".editor").click(function (){
 var name=$(this).attr("data-name"),
    src=$(this).attr("data-src");
    if(src==""){
     
    }
    else if(name==""){
     
    }
    else{
    $("<div class='member'><i class='fas fa-trash btn btn-warning right member-remover'></i><img src='"+src+"'class='styled-img'><p class='md-p inline' style='color:black;'>"+name+"</p></div>").appendTo($(this).attr("data-edit"));
    }
    if($(this).attr("data-title")==""){
     
    }
    else{
    $($(this).attr("data-selector")).text($(this).attr("data-title")); 
    } 
        $(".editor-closer").click();
    });
$(".team-name").blur(function (){
 if($(this).val()==""){
  console.log("dsaj");
 }
 else{
   $(".editor").attr("data-title",$(this).val());
 }
});
//add team
$(".new-member-name-dropdown a").click(function(e){
 e.preventDefault();
var name=$(this).attr("data-name"),
    src=$(this).attr("data-src");
    $(".adding-btn").attr("data-name",name);
    $(".adding-btn").attr("data-src",src);
    });
$(".new-team-name").blur(function (){
 if($(this).val()==""){
  console.log("dsaj");
 }
 else{
   $(".adding-btn").attr("data-title",$(this).val());
 }
});
$(".adding-btn").click(function (){
 var name=$(this).attr("data-name"),
    src=$(this).attr("data-src"),
    title=$(this).attr("data-title")+"1";
    titleRel=$(this).attr("data-title");
    if(src==""){
     
    }
    else if(name==""){
     
    }
     else if(title==""){
     
    }
    else{
     $("<div class='col-lg-6 col-xs-12 "+title+"'></div>").appendTo(".main-row");
     $("<div class='big-card bx-shadow  team col-12'>").appendTo("."+title);
     $('<div class="team '+title+'-team"></div>').appendTo("."+title+" .big-card");
     $('<div class="team-header"></div>').appendTo("."+title+"-team");
     $('<div class="right"></div>').appendTo("."+title+"-team .team-header");
     $('<i class="fas fa-pen btn btn-warning edit-btn" data-toggle="modal" data-target="#edit-modal" data-edit=".'+title+'-body" data-name=".'+title+'-team .team-header h6"></i>').appendTo("."+title+"-team .team-header .right");
    $('<i class="fas fa-trash btn btn-warning" data-remove=".'+title+'"data-toggle="modal" data-target="#remove-modal" style="margin-left:6px;"></i>').appendTo("."+title+"-team .team-header .right");
    $('<h6>'+titleRel+'</h6> <hr>').appendTo("."+title+"-team .team-header");
    $('<div class="team-body '+title+'-body"></div>').appendTo("."+title+"-team");
    $("<div class='member'></div>").appendTo("."+title+"-team .team-body");
    $("<i class='fas fa-trash btn btn-warning right member-remover'></i>").appendTo("."+title+"-team .team-body .member");
    $("<img src='"+src+"'class='styled-img'>").appendTo("."+title+"-team .team-body .member");
    $('<p class="md-p inline" style="color:black;">'+name+'</p>').appendTo("."+title+"-team .team-body .member");
    }
        $(".adding-closer").click();
    });

});