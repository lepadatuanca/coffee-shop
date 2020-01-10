//color changing button
var colors = ["blue","green", "purple" , "cyan" ,"magenta"]
var currentColor = 0
var lis = document.querySelectorAll("p")

function stop() {
  //clear timeout
  clearInterval(myVar);
  //set timeout
  setTimeout(function(){ 
    for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = "black"
  } 
}, 500);
}

function changeColor() {
 
  //set interval
  myVar = setInterval(alertFunc, 1000);
}


//color change function
function alertFunc() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
  for (var i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor +i) % colors.length]
  }
}


changeColor();
//music
var music = document.getElementById("music")
var sound      = document.createElement('audio');
sound.id       = 'audio-player';
sound.controls = 'controls';
sound.src      = 'music/lobby.mp3';
sound.type     = 'audio/mpeg';
document.getElementById('music').appendChild(sound);