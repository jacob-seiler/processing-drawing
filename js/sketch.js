/**

    Jacob Seiler
    4/3/2016
    Drawing

    - Blank canvas to be drawn on
    - Indicator for size and selected color at the bottom
    * Click on a color to select it
    * Click on a size to select it or press the CENTER MOUSE button
    * Click on the X (bottom left) to erase everything
    * LEFT CLICK on the screen to draw
    * RIGHT CLICK on the screen to erease

**/

function setup() {
	createCanvas(400, 400);
	frameRate(60);
	angleMode(DEGREES);
}

var drawingShape = 0;
var drawingSize = 10;
var isDrawing = false;

var small = 10;
var medium = 30;
var large = 50;

var r = 255;
var g = 0;
var b = 0;

background(255, 255, 255);
noStroke();
fill(51, 51, 51);
rect(0, 350, 400, 50);

fill(217, 167, 41);
if (r === 217) {
	strokeWeight(2);
	stroke(255, 255, 255);
} else {
	strokeWeight(1);
	stroke(51, 51, 51);
	noStroke();
}
rect(40, 355, 40, 40);

fill(120, 179, 32);
if (r === 120) {
	strokeWeight(2);
	stroke(255, 255, 255);
} else {
	strokeWeight(1);
	stroke(51, 51, 51);
	noStroke();
}
rect(110, 355, 40, 40);

fill(93, 104, 232);
if (r === 93) {
	strokeWeight(2);
	stroke(255, 255, 255);
} else {
	strokeWeight(1);
	stroke(51, 51, 51);
	noStroke();
}
rect(180, 355, 40, 40);

fill(134, 25, 140);
if (r === 134) {
	strokeWeight(2);
	stroke(255, 255, 255);
} else {
	strokeWeight(1);
	stroke(51, 51, 51);
	noStroke();
}
rect(250, 355, 40, 40);

fill(255, 0, 0);
if (r === 255) {
	strokeWeight(2);
	stroke(255, 255, 255);
} else {
	strokeWeight(1);
	stroke(51, 51, 51);
	noStroke();
}
rect(320, 355, 40, 40);

strokeWeight(1);
stroke(51, 51, 51);
noStroke();
fill(158, 147, 147);
rect(7, 363, 25, 25);
fill(0, 0, 0);
stroke(0, 0, 0);
strokeWeight(2);
line(11, 367, 28, 384);
line(28, 367, 11, 384);
strokeWeight(1);
stroke(51, 51, 51);
noStroke();

if (drawingSize === 10) {
	fill(255, 0, 0);
} else {
	fill(112, 112, 112);
}
ellipse(385, 362, 5, 5);
if (drawingSize === 30) {
	fill(255, 0, 0);
} else {
	fill(112, 112, 112);
}
ellipse(385, 375, 10, 10);
if (drawingSize === 50) {
	fill(255, 0, 0);
} else {
	fill(112, 112, 112);
}
ellipse(385, 390, 15, 15);

mousePressed = function() {
	isDrawing = true;

	if (mouseY >= 350) {
		if (mouseY >= 355 && mouseY <= 395 && mouseX >= 40 && mouseX <= 80) {
			r = 217;
			g = 167;
			b = 41;
		}

		if (mouseY >= 355 && mouseY <= 395 && mouseX >= 110 && mouseX <= 150) {
			r = 120;
			g = 179;
			b = 32;
		}

		if (mouseY >= 355 && mouseY <= 395 && mouseX >= 180 && mouseX <= 220) {
			r = 93;
			g = 104;
			b = 232;
		}

		if (mouseY >= 355 && mouseY <= 395 && mouseX >= 250 && mouseX <= 290) {
			r = 134;
			g = 25;
			b = 140;
		}

		if (mouseY >= 355 && mouseY <= 395 && mouseX >= 320 && mouseX <= 360) {
			r = 255;
			g = 0;
			b = 0;
		}

		if (mouseY >= 363 && mouseY <= 388 && mouseX >= 7 && mouseX <= 32) {
			fill(255, 255, 255);
			rect(0, 0, 400, 350);
		}

		if (mouseY >= 384 && mouseY <= 399 && mouseX >= 377 && mouseX <= 392) {
			drawingSize = 50;
		}

		if (mouseY >= 367 && mouseY <= 382 && mouseX >= 377 && mouseX <= 392) {
			drawingSize = 30;
		}

		if (mouseY >= 350 && mouseY <= 365 && mouseX >= 377 && mouseX <= 392) {
			drawingSize = 10;
		}

		isDrawing = false;
	}

	noStroke();
	fill(51, 51, 51);
	rect(0, 350, 400, 50);

	fill(217, 167, 41);
	if (r === 217) {
		strokeWeight(2);
		stroke(255, 255, 255);
	} else {
		strokeWeight(1);
		stroke(51, 51, 51);
		noStroke();
	}
	rect(40, 355, 40, 40);

	fill(120, 179, 32);
	if (r === 120) {
		strokeWeight(2);
		stroke(255, 255, 255);
	} else {
		strokeWeight(1);
		stroke(51, 51, 51);
		noStroke();
	}
	rect(110, 355, 40, 40);

	fill(93, 104, 232);
	if (r === 93) {
		strokeWeight(2);
		stroke(255, 255, 255);
	} else {
		strokeWeight(1);
		stroke(51, 51, 51);
		noStroke();
	}
	rect(180, 355, 40, 40);

	fill(134, 25, 140);
	if (r === 134) {
		strokeWeight(2);
		stroke(255, 255, 255);
	} else {
		strokeWeight(1);
		stroke(51, 51, 51);
		noStroke();
	}
	rect(250, 355, 40, 40);

	fill(255, 0, 0);
	if (r === 255) {
		strokeWeight(2);
		stroke(255, 255, 255);
	} else {
		strokeWeight(1);
		stroke(51, 51, 51);
		noStroke();
	}
	rect(320, 355, 40, 40);

	strokeWeight(1);
	stroke(51, 51, 51);
	noStroke();
	fill(158, 147, 147);
	rect(7, 363, 25, 25);
	fill(0, 0, 0);
	stroke(0, 0, 0);
	strokeWeight(2);
	line(11, 367, 28, 384);
	line(28, 367, 11, 384);
	strokeWeight(1);
	stroke(51, 51, 51);
	noStroke();

	if (drawingSize === 10) {
		fill(255, 0, 0);
	} else {
		fill(112, 112, 112);
	}
	ellipse(385, 362, 5, 5);
	if (drawingSize === 30) {
		fill(255, 0, 0);
	} else {
		fill(112, 112, 112);
	}
	ellipse(385, 375, 10, 10);
	if (drawingSize === 50) {
		fill(255, 0, 0);
	} else {
		fill(112, 112, 112);
	}
	ellipse(385, 390, 15, 15);

	if (mouseButton === CENTER) {
		if (drawingSize === large) {
			drawingSize = 10;
			return;
		} else if (drawingSize === medium) {
			drawingSize = 50;
			return;
		} else if (drawingSize === small) {
			drawingSize = 30;
			return;
		}
	}

	draw = function() {
		if (isDrawing === true) {
			// The user is drawing

			if (drawingShape === 0) {
				if (mouseButton === RIGHT) {
					fill(255, 255, 255);
					ellipse(mouseX, mouseY, drawingSize, drawingSize);
				} else if (mouseButton === LEFT) {
					fill(r, g, b);
					ellipse(mouseX, mouseY, drawingSize, drawingSize);
				}
			} else if (drawingShape === 1) {
				if (mouseButton === RIGHT) {
					fill(255, 255, 255);
					rect(mouseX, mouseY, drawingSize, drawingSize);
				} else if (mouseButton === LEFT) {
					fill(255, 0, 0);
					rect(mouseX, mouseY, drawingSize, drawingSize);
				}
			}

			noStroke();
			fill(51, 51, 51);
			rect(0, 350, 400, 50);

			fill(217, 167, 41);
			if (r === 217) {
				strokeWeight(2);
				stroke(255, 255, 255);
			} else {
				strokeWeight(1);
				stroke(51, 51, 51);
				noStroke();
			}
			rect(40, 355, 40, 40);

			fill(120, 179, 32);
			if (r === 120) {
				strokeWeight(2);
				stroke(255, 255, 255);
			} else {
				strokeWeight(1);
				stroke(51, 51, 51);
				noStroke();
			}
			rect(110, 355, 40, 40);

			fill(93, 104, 232);
			if (r === 93) {
				strokeWeight(2);
				stroke(255, 255, 255);
			} else {
				strokeWeight(1);
				stroke(51, 51, 51);
				noStroke();
			}
			rect(180, 355, 40, 40);

			fill(134, 25, 140);
			if (r === 134) {
				strokeWeight(2);
				stroke(255, 255, 255);
			} else {
				strokeWeight(1);
				stroke(51, 51, 51);
				noStroke();
			}
			rect(250, 355, 40, 40);

			fill(255, 0, 0);
			if (r === 255) {
				strokeWeight(2);
				stroke(255, 255, 255);
			} else {
				strokeWeight(1);
				stroke(51, 51, 51);
				noStroke();
			}
			rect(320, 355, 40, 40);

			strokeWeight(1);
			stroke(51, 51, 51);
			noStroke();
			fill(158, 147, 147);
			rect(7, 363, 25, 25);
			fill(0, 0, 0);
			stroke(0, 0, 0);
			strokeWeight(2);
			line(11, 367, 28, 384);
			line(28, 367, 11, 384);
			strokeWeight(1);
			stroke(51, 51, 51);
			noStroke();

			if (drawingSize === 10) {
				fill(255, 0, 0);
			} else {
				fill(112, 112, 112);
			}
			ellipse(385, 362, 5, 5);
			if (drawingSize === 30) {
				fill(255, 0, 0);
			} else {
				fill(112, 112, 112);
			}
			ellipse(385, 375, 10, 10);
			if (drawingSize === 50) {
				fill(255, 0, 0);
			} else {
				fill(112, 112, 112);
			}
			ellipse(385, 390, 15, 15);
		}
	};
};

mouseReleased = function() {
	isDrawing = false;
};
