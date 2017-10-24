
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

var dayLast = 0;
var hourLast = 0;
var minuteLast = 0;
var secondLast = 0;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days").innerHTML = days;
  if(dayLast != days){
    document.getElementById("days").parentElement.style.backgroundColor = "white";
    setTimeout(function(){ 
      document.getElementById("days").parentElement.style.backgroundColor = "transparent"; 
    }, 100);
    dayLast = days;
  }
  document.getElementById("hours").innerHTML = hours;
  if(hourLast != hours){
    document.getElementById("hours").parentElement.style.backgroundColor = "white";
    setTimeout(function(){ 
      document.getElementById("hours").parentElement.style.backgroundColor = "transparent"; 
    }, 100);
    hourLast = hours;
  }
  document.getElementById("minutes").innerHTML = minutes;
  if(minuteLast != minutes){
    document.getElementById("minutes").parentElement.style.backgroundColor = "white";
    setTimeout(function(){ 
      document.getElementById("minutes").parentElement.style.backgroundColor = "transparent"; 
    }, 100);
    minuteLast = minutes;
  }
  document.getElementById("seconds").innerHTML = seconds;
  if(secondLast != seconds){
    document.getElementById("seconds").parentElement.style.backgroundColor = "white";
    setTimeout(function(){ 
      document.getElementById("seconds").parentElement.style.backgroundColor = "transparent"; 
    }, 100);
    secondLast = seconds;
  }

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-clock").innerHTML = "EXPIRED";
  }
}, 1000);


var player2;


function onPlayerReady2(event) {

  // bind events
  var playButton2 = document.getElementById("play-button2");
  playButton2.addEventListener("click", function() {
    playButton2.style.display = "none";
    player2.playVideo();
  });
  

}

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  player2 = new YT.Player('video2', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady2
    }
  });
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {

  // bind events
  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    playButton.style.display = "none";
    player.playVideo();
  });
  

}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


$(document).ready(function(){

window.sr = ScrollReveal();
sr.reveal('.graph-part');
sr.reveal('.section-title');
sr.reveal('.regular-text');
sr.reveal('.img-fluid');
//sr.reveal('.bar');

$('nav li').mouseenter(function(){

  $(this).find('.animate').animate({
    width: '100%'
}, 100);
});
$('nav li').mouseout(function(){
  $(this).find('.animate').animate({ 
    marginLeft: '100%',
    width: '0px'
  },100, function () {

    setTimeout(function(){ $('.animate').css("margin-left","0px"); }, 300);

  });
});

 $('.graph-part').hover(function() {
        $(this).parent().parent().parent().find(".graph-part").not(this).addClass('transition');
    
    }, function() {
        $(this).parent().parent().parent().find(".graph-part").not(this).removeClass('transition');
    });

$('.graph-part').hover(function() {
   
  $(this).stop().animate({
    opacity: 1
  }).parent().parent().parent().find(".graph-part").not(this).stop().animate({
    opacity: 0.3
  });
}, function() {
  $(".graph-part").not(this).stop().animate({
    opacity: 1
  });
  //$(".graph-part").removeClass('transition');
});


$('.mile-item').hover(function() {

  $(this).stop().animate({
    opacity: 1
  }).parent().parent().parent().find(".mile-item").not(this).stop().animate({
    opacity: 0
  });
}, function() {
  $("#roadmap .mile-item").not(this).stop().animate({
    opacity: 1
  });
});
/*
$(window).scroll(function() {
 var hT = $('#graph').offset().top,
 hH = $('#graph').outerHeight(),
 wH = $(window).height(),
 wS = $(this).scrollTop();
 if (wS > (hT+hH-wH)){
   console.log('H1 on the view!');
   $(".graph-start-up").css("position", "inherit");
   $(".graph-start-up").animate({
    top: 0,
    left: 0
  }, 2000,function(){

  });
   $(".graph-start-down").css("position", "inherit");
   $(".graph-start-down").animate({
    top: 0,
    left: 0
  }, 2000,function(){

  });
   $(".graph-start-left").css("position", "inherit");
   $(".graph-start-left").animate({
    top: 0,
    left: 0
  }, 2000,function(){

  });
 }
});
*/

});