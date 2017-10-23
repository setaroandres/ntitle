
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

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
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

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

$(".graph-part").mouseover(function(){
       //console.log($(this).parent().parent().find(".graph-part").not(this));
       $(this).parent().parent().find(".graph-part").not(this).animate({
        opacity: 0.3
      }, 1000, function() {

      });


     });

$(".graph-part").mouseout(function(){
       //console.log($(this).parent().parent().find(".graph-part").not(this));
       $(this).parent().parent().find(".graph-part").not(this).animate({
        opacity: 1
      }, 1000, function() {

      });

       
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



  /*$(".mile-item").mouseover(function(){
    console.log("over item");
    $(this).parent().parent().find(".mile-item").not(this).animate({
      opacity: 0
    }, 1000, function() {
      $(".mile-item").mouseout(function(){
       $(this).parent().parent().find(".mile-item").not(this).animate({
        opacity: 1
      }, 1000, function() {

      });
     });
    });
});*/




});