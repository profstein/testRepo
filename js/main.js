var red, blue;

function setup(){
    red = color(255,0,0);
    blue = color(0,0,255);
}

function draw(){
    if(mouseIsPressed){
     line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
