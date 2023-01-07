song="";
function setup(){
canvas=createCanvas(300,400);
canvas.position(650,300);

video=createCapture(VIDEO);
video.hide();
}
function preload(){
song=loadSound("Wavinflag.mp3");
}
function draw(){
image(video,0,0,400,300);
}
function play(){
    song.play();
}