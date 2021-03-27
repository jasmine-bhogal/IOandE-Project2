let url = 'https://io.adafruit.com/api/v2/jasmine_bhogal/feeds/button';
let counter = 0;
let change = 1;
let data = 0;
let raleway;
let t = "exhale...   repeat,";
let i = "press down and inhale..."
let song;
var loadGif, createGif

//https://editor.p5js.org/kjhollen/sketches/S1bVzeF8Z
//https://p5js.org/reference/#/p5.Image/play

function preload() {
    raleway = loadFont('assets/KiwiMaru-Light.ttf');
    //    soundFormats('mp3');
    //    song = loadSound('assets/music.mp3');
    loadGif = loadImage("assets/pace.gif");

}

function getData() {
    httpGet(url, 'json', function (response) {
        console.log(response);
        data = response.last_value;
        let resize = map(data, 0, 1, 1, 1);
        change = resize;
        console.log(data);
    });
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont(raleway);
    textSize(windowWidth / 75);
    strokeWeight(700);
    //    textStyle(BOLD);
    textAlign(CENTER, CENTER);


}


function draw() {
    background(255, 250, 248);
    fill(193, 121, 116);
    imageMode(CENTER);

    if (counter % 80 == 0) {
        getData();
    }
    counter++;

    if (data == 1) {

        text(t, windowWidth / 2, windowHeight / 5);
        image(loadGif, windowWidth / 2, windowHeight / 2);

    } else {
        text(i, windowWidth / 2, windowHeight / 5);
    }


}
