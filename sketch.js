var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=91140b7d71d14c29ad0060ea68ee6385';
var units = '&units=metric';

var input;

function setup() {
  createCanvas(500, 500);

  var button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;

  //draw();
}

var cloudsDrawn = false;

function draw() {
  background("#FFFFFF");
  if (weather) {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;
    var pressure = weather.main.pressure;
    stroke(153)
    fill("#FF0000")
    ellipse(192, 284, temp*3, temp*3);
    fill("#00BCFF")
    ellipse(humidity*5, humidity*5, humidity*3, humidity*3);
    fill("#D09CC7")
    ellipse(pressure/5, pressure/5, pressure/10, pressure/10);


    var w = weather.weather[0].main.toLowerCase();
    //console.log(w)

     document.getElementById("img1").src = "img/" + w + ".png";

   if (!cloudsDrawn) {
      drawClouds(weather.clouds.all);
      cloudsDrawn = true;
   }

  }
}

function drawClouds(howmany) {
  console.log(howmany)

  for (var i=0; i < howmany; i++) {
      //console.log('draw!')
      var ypos = Math.round( Math.random() * 10);
      var xpos = Math.round( Math.random() * 10);

      createBlock(ypos*50, xpos*50 ,'good-item'); 
  }
}




function createBlock(x,y, blockType) {

  // create a <div> element
  var item = document.createElement('div');
  
  // give it  a class of good-item
  $(item).addClass(blockType);
  
  // give it a position
  $(item).css('top', x);
  $(item).css('left', y);
  $(item).css('z-index', Math.round( Math.random() * 5 ) + 1 );
          
  // add it to the gamefield
  $(".game").append($(item));
}









