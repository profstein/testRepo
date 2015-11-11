// var leftEye = 81;
// var rightEye = 140;
// var head = 70;
// var body = 165;
// var line_l = 90;
// var line_r = 130;

var aliens;

function setup(){
	var myCanvas = createCanvas(window.innerWidth, window.innerHeight);

	aliens =[];
	var x = 0;
    var y = 0;
    var gridWidth = width - 100;

    for (var i = 0; i < 8; i++) {
        console.log(i);
        aliens.push(new Alien(x, y));

        // aliens[i] = Alien(x, y);
        
        x += 150; 
       
        if (x > gridWidth) {
            x = 0;
            y += 270;
        } //end if
    } //end for loop

}

function draw() {

	clear();

	if (mouseIsPressed) {
		//loop throuh aliens array can call 
		for (var i = 0; i < 8; i++){
		console.log(i);
		aliens[i].moveAway();

		}

	}

}

// function draw() {

// 	clear();

// 	if (mouseIsPressed) {
// 		stroke(0);
// 		fill(244, 35, 0);
// 		// fill("rgba(51,51,51,0.5)");

// 		leftEye = leftEye -1;
// 		rightEye = rightEye + 1;
       
//         head = head + 1;
//         body = body - 1;

//         line_l = line_l - 1;
//         line_r = line_r + 1;

// 		ellipse(leftEye, 70, 16, 32);
// 		ellipse(rightEye, 70, 16, 32);
//         ellipse(110, head, 60, 60);
//         ellipse(110, body, 50, 130);

//         line(line_l, 120, line_l-50, 160);  
//         line(line_r, 120, line_r+50, 160);  


// 	} else {
//          leftEye = 81;
//          rightEye = 140;
//          head = 70;
//          line_l = 90;
//          line_r = 130;
//          body = 165;

// 		stroke(0);
// 		fill("rgba(51,51,51,0.5)");
		
// 		ellipse(110, 165, 50, 130);//body
// 		ellipse(110, 70, 60, 60);//head

// 		ellipse(81, 70, 16, 32);//left eye
// 		ellipse(140, 70, 16, 32);//right eye

// 		line(90,120, 50, 160); //line left
// 		line(130, 120, 170, 160);//line right
// 	}
// }




function Alien (startX, startY){
	this.leftEye = startX+81;
	this.rightEye = startX+140;
	this.head = startY+70;
	this.figure = startY+165;
	this.line_l = startX+90;
	this.line_r = startX+130;

this.draw = function(){

	stroke(0);
	fill("rgba(51,51,51,0.5)");

	ellipse(startX+110, this.figure, 50, 130);//figure
	ellipse(startX+110, this.head, 60, 60);//head

	ellipse(this.leftEye, startY+70, 16, 32);//left eye
	ellipse(this.rightEye, startY+70, 16, 32);//right eye

	line(this.line_l, startY+120, startX+50, startY+160); //line left
	line(this.line_r, startY+120, startX+170, startY+160);//line right
}



	this.moveAway = function(){

		this.leftEye = this.leftEye -1;
		this.rightEye = this.rightEye + 1;
       
        this.head = this.head + 1;
        this.figure = this.figure - 1;

        this.line_l = this.line_l - 1;
        this.line_r = this.line_r + 1;

		ellipse(this.leftEye, 70, 16, 32);
		ellipse(this.rightEye, 70, 16, 32);
        ellipse(110, this.head, 60, 60);
        ellipse(110, this.figure, 50, 130);

        line(this.line_l, 120, this.line_l-50, 160);  
        line(this.line_r, 120, this.line_r+50, 160);  

	this.draw();

	}
	
}




















