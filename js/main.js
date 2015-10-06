var red, blue;

function setup(){
    red = color(255,0,0);
    blue = color(0,0,255);
}

function draw(){
    createCanvas(700,450);
    if(mouseIsPressed){
     line(pmouseX,pmouseY,mouseX,mouseY);
    }
    //more stuff
}

function mousePressed(){
 console.log('mousepressed');


}
