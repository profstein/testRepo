# testRepo
Test Repository, detlete this later

## this is h2

### this is h3

* bullet list
* another item

0. tis is a numbered list
0. this is antoher
1. sablakdfd

'''javascript
//Global Variables

//colors
var red, blue, yellow;

// circle centers
var redX, redY, blueX, blueY, yellowX, yellowY;

//size of the circles
var circleSize;

//color of drawing line
var lineColor;

function setup() {
    //create the canvas to be the window size
    createCanvas(windowWidth, windowHeight);
    //create three color variables
    red = color(255, 0, 0);
    yellow = color(255, 255, 0);
    blue = color(0, 0, 255);
    //set the size of the cirlces
    circleSize = 90;
    //set the location of the circles
    redX = 100;
    redY = 100;
    yellowX = 100;
    yellowY = 300;
    blueX = 100;
    blueY = 500;

    //set line color
    lineColor = red;

    //create the three circles
    fill(red);
    ellipse(redX, redY, circleSize, circleSize);

    fill(yellow);
    ellipse(yellowX, yellowY, circleSize, circleSize);

    fill(blue);
    ellipse(blueX, blueY, circleSize, circleSize);


} //end setup()

function draw() {
    if (mouseIsPressed) {
        //draw a line
        stroke(lineColor);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
} //end draw()


'''
