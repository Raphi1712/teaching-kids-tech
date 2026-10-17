let levelSolutionCache = {
  // === MODUL 1 ===
  "m1t1_1": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(250,0,0);
  }
`,
  "m1t1_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(80);
  fill(255, 220, 0);
  ellipse(400, 400, 250, 250);
  }
`,
  "m1t1_3": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(180, 220, 255);
  fill(255, 220, 0);
  circle(120, 120, 100);
  fill(255, 120, 40);
  rect(0, 610, 800, 190);
  fill(40, 40, 60);
  textSize(64);
  text("Hallo, p5!", 220, 210);
  }
`,
  "m1t2_1": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(245);
  fill(255, 0, 0);
  rect(90, 250, 180, 300);
  fill(0, 255, 0);
  rect(310, 250, 180, 300);
  fill(0, 0, 255);
  rect(530, 250, 180, 300);
  }
`,
  "m1t2_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(40);
  fill(255, 255, 0);
  ellipse(200, 280, 200, 200);
  fill(255, 0, 255);
  ellipse(400, 280, 200, 200);
  fill(0, 255, 255);
  ellipse(600, 280, 200, 200);
  fill(255, 150, 0);
  ellipse(200, 520, 200, 200);
  fill(140, 70, 200);
  ellipse(400, 520, 200, 200);
  fill(255, 255, 255);
  ellipse(600, 520, 200, 200);
  }
`,
  "m1t2_3": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(20, 20, 40);
  fill(40, 120, 70);
  rect(0, 540, 800, 260);
  fill(120, 80, 180);
  triangle(90, 560, 280, 260, 470, 560);
  fill(80, 140, 220);
  triangle(330, 560, 520, 220, 710, 560);
  fill(255, 170, 0);
  rect(360, 430, 80, 110);
  fill(255, 230, 120);
  rect(390, 460, 20, 35);
  }
`,
  "m1t3_1": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(230, 245, 255);
  fill(255, 220, 0);
  ellipse(120, 120, 90, 90);
  fill(255, 255, 255);
  ellipse(300, 140, 140, 70);
  ellipse(360, 140, 120, 65);
  fill(80, 180, 90);
  rect(0, 620, 800, 180);
  fill(220, 80, 60);
  rect(120, 460, 150, 160);
  fill(150, 90, 40);
  triangle(100, 460, 195, 390, 290, 460);
  }
`,
  "m1t3_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(180, 225, 255);
  fill(90, 180, 90);
  rect(0, 590, 800, 210);
  fill(255, 210, 0);
  ellipse(700, 120, 110, 110);
  fill(205, 70, 55);
  rect(280, 370, 260, 220);
  fill(145, 80, 35);
  triangle(250, 370, 410, 250, 570, 370);
  fill(100, 65, 35);
  rect(390, 470, 70, 120);
  fill(190, 235, 255);
  rect(320, 430, 55, 55);
  rect(445, 430, 55, 55);
  }
`,
  "m1t3_3": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  fill(85, 175, 90);
  rect(0, 580, 800, 220);
  fill(255, 215, 0);
  ellipse(90, 95, 85, 85);
  fill(255, 255, 255);
  ellipse(210, 120, 110, 58);
  ellipse(260, 120, 95, 54);
  fill(210, 70, 55);
  rect(260, 390, 300, 200);
  fill(150, 85, 35);
  triangle(230, 390, 410, 255, 590, 390);
  fill(120, 70, 30);
  rect(385, 485, 70, 105);
  fill(235, 245, 255);
  rect(305, 440, 55, 55);
  rect(460, 440, 55, 55);
  fill(240, 200, 90);
  rect(600, 470, 140, 120);
  fill(120, 60, 140);
  triangle(585, 470, 670, 400, 755, 470);
  fill(120, 70, 30);
  rect(650, 525, 40, 65);
  }
`,
  "m1t4_1": `let x = 300;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(40, 60, 110);
  fill(240, 245, 255);
  rect(0, 600, 800, 200);
  ellipse(x, 520, 220, 220);
  ellipse(x, 360, 160, 160);
  ellipse(x, 240, 110, 110);
  fill(20, 20, 20);
  ellipse(x - 20, 225, 12, 12);
  ellipse(x + 20, 225, 12, 12);
  fill(255, 140, 0);
  triangle(x, 240, x, 252, x + 45, 246);
}
`,
  "m1t4_2": `let x = 400;
let y = 520;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(40, 60, 110);
  fill(250, 245, 200);
  ellipse(660, 120, 90, 90);
  fill(240, 245, 255);
  rect(0, 600, 800, 200);
  ellipse(x, y, 220, 220);
  ellipse(x, y - 160, 160, 160);
  ellipse(x, y - 280, 110, 110);
  fill(20, 20, 20);
  ellipse(x - 20, y - 295, 12, 12);
  ellipse(x + 20, y - 295, 12, 12);
  ellipse(x, y - 180, 14, 14);
  ellipse(x, y - 140, 14, 14);
  rect(x - 45, y - 345, 90, 15);
  rect(x - 30, y - 400, 60, 55);
  fill(255, 140, 0);
  triangle(x, y - 280, x, y - 268, x + 45, y - 274);
}
`,
  "m1t4_3": `let x = 400;
let y = 540;
let groesse = 200;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(40, 60, 110);
  fill(250, 245, 200);
  ellipse(660, 120, 90, 90);
  fill(240, 245, 255);
  rect(0, 600, 800, 200);
  ellipse(x, y, groesse, groesse);
  ellipse(x, y - groesse * 0.75, groesse * 0.75, groesse * 0.75);
  ellipse(x, y - groesse * 1.3, groesse * 0.5, groesse * 0.5);
  fill(220, 40, 40);
  rect(x - groesse * 0.3, y - groesse * 1.1, groesse * 0.6, groesse * 0.1);
  fill(20, 20, 20);
  ellipse(x - groesse * 0.1, y - groesse * 1.35, groesse * 0.06, groesse * 0.06);
  ellipse(x + groesse * 0.1, y - groesse * 1.35, groesse * 0.06, groesse * 0.06);
  fill(255, 140, 0);
  triangle(x, y - groesse * 1.3, x, y - groesse * 1.25, x + groesse * 0.2, y - groesse * 1.275);
}
`,
  "m1t5_1": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(255, 230, 150);
  noStroke();
  fill(255, 205, 160);
  ellipse(400, 400, 420, 420);
  fill(255, 255, 255);
  ellipse(320, 350, 90, 60);
  ellipse(480, 350, 90, 60);
  fill(60, 120, 200);
  ellipse(320, 350, 40, 40);
  ellipse(480, 350, 40, 40);
  fill(20, 20, 20);
  ellipse(320, 350, 18, 18);
  ellipse(480, 350, 18, 18);
}
`,
  "m1t5_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(255, 230, 150);
  noStroke();
  fill(255, 205, 160);
  ellipse(190, 400, 90, 90);
  ellipse(610, 400, 90, 90);
  ellipse(400, 400, 420, 420);
  fill(255, 255, 255);
  ellipse(320, 350, 90, 60);
  ellipse(480, 350, 90, 60);
  fill(60, 120, 200);
  ellipse(320, 350, 40, 40);
  ellipse(480, 350, 40, 40);
  fill(20, 20, 20);
  ellipse(320, 350, 18, 18);
  ellipse(480, 350, 18, 18);
  fill(255, 150, 160);
  ellipse(290, 460, 60, 60);
  ellipse(510, 460, 60, 60);
  fill(240, 160, 120);
  triangle(400, 380, 375, 450, 425, 450);
  fill(200, 40, 60);
  ellipse(400, 520, 150, 50);
}
`,
  "m1t5_3": `let x = 400;
let y = 430;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(120, 200, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 700, 800, 100);
  fill(120, 70, 30);
  ellipse(x, y - 120, 400, 240);
  fill(255, 205, 160);
  ellipse(x - 200, y, 80, 80);
  ellipse(x + 200, y, 80, 80);
  ellipse(x, y, 400, 400);
  fill(255, 255, 255);
  ellipse(x - 80, y - 50, 90, 60);
  ellipse(x + 80, y - 50, 90, 60);
  fill(40, 160, 90);
  ellipse(x - 80, y - 50, 40, 40);
  ellipse(x + 80, y - 50, 40, 40);
  fill(20, 20, 20);
  ellipse(x - 80, y - 50, 18, 18);
  ellipse(x + 80, y - 50, 18, 18);
  fill(255, 150, 160);
  ellipse(x - 110, y + 60, 60, 60);
  ellipse(x + 110, y + 60, 60, 60);
  fill(240, 160, 120);
  triangle(x, y - 20, x - 25, y + 50, x + 25, y + 50);
  fill(200, 40, 60);
  ellipse(x, y + 120, 160, 50);
  fill(255, 80, 120);
  triangle(x - 90, y - 210, x, y - 370, x + 90, y - 210);
  fill(255, 230, 0);
  ellipse(x, y - 370, 40, 40);
}
`,
  // === MODUL 2 ===
  "m2t1_1": `let x = 120;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(170, 220, 255);
  noStroke();
  fill(80, 170, 90);
  rect(0, 560, 800, 240);
  fill(255, 210, 0);
  ellipse(x, 250, 90, 90);
  x = x + 2;
}
`,
  "m2t1_2": `let cloudX = 0;
let speed = 3;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(255, 255, 255);
  ellipse(cloudX, 170, 120, 70);
  ellipse(cloudX + 55, 150, 95, 60);
  ellipse(cloudX + 110, 170, 120, 70);
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  cloudX = cloudX + speed;
}
`,
  "m2t1_3": `let balloonY = 800;
let speedY = 2.5;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(170, 225, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 610, 800, 190);
  fill(255, 120, 120);
  ellipse(430, balloonY, 90, 115);
  stroke(80);
  line(430, balloonY + 55, 430, balloonY + 95);
  noStroke();
  fill(170, 110, 60);
  rect(405, balloonY + 95, 50, 35);
  balloonY = balloonY - speedY;
}
`,
  "m2t2_1": `function setup() {
  createCanvas(800, 800);
  background(30, 30, 50);
  noStroke();
}
function draw() {
  let rot = random(0, 255);
  let gruen = random(0, 255);
  let blau = random(0, 255);
  fill(rot, gruen, blau);
  ellipse(random(800), random(800), random(10, 40), random(10, 40));
}
`,
  "m2t2_2": `let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
function setup() {
  createCanvas(800, 800);
  background(20, 20, 40);
  noStroke();
  x1 = random(100, 700);
  y1 = random(100, 700);
  x2 = random(100, 700);
  y2 = random(100, 700);
  x3 = random(100, 700);
  y3 = random(100, 700);
}
function draw() {
  fill(255, 80, 80);
  ellipse(x1, y1, 30, 30);
  fill(80, 255, 120);
  ellipse(x2, y2, 30, 30);
  fill(80, 160, 255);
  ellipse(x3, y3, 30, 30);
  x1 = x1 + 3;
  y1 = y1 + 3;
  x2 = x2 - 3;
  y2 = y2 + 3;
  x3 = x3 + 3;
  y3 = y3 - 3;
}
`,
  "m2t2_3": `function setup() {
  createCanvas(800, 800);
  background(255);
  noStroke();
}
function draw() {
  let rot = random(0, 255);
  let gruen = random(0, 255);
  let blau = random(0, 255);
  fill(rot, gruen, blau);
  ellipse(mouseX + random(-30, 30), mouseY + random(-30, 30), random(10, 50), random(10, 50));
}
`,
  "m2t3_1": `let x = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(40, 130, 210);
  fill(20, 80, 150);
  rect(0, 530, 800, 270);
  fill(255, 170, 60);
  ellipse(x, 400, 110, 68);
  triangle(x - 55, 400, x - 105, 365, x - 105, 435);
  x = x + 3;
}
`,
  "m2t3_2": `let fish1X = 0;
let fish2X = 800;
function setup() {
  createCanvas(800, 800);
  noStroke();
}
function draw() {
  background(40, 130, 210);
  fill(20, 80, 150);
  rect(0, 600, 800, 200);
  fill(255, 170, 60);
  ellipse(fish1X, 300, 110, 68);
  triangle(fish1X - 55, 300, fish1X - 105, 265, fish1X - 105, 335);
  fill(255, 90, 150);
  ellipse(fish2X, 480, 110, 68);
  triangle(fish2X + 55, 480, fish2X + 105, 445, fish2X + 105, 515);
  fill(20, 20, 30);
  ellipse(fish1X + 30, 290, 10, 10);
  ellipse(fish2X - 30, 470, 10, 10);
  fill(200, 235, 255);
  let blase = random(5, 20);
  ellipse(random(800), random(600), blase, blase);
  fish1X = fish1X + 3;
  fish2X = fish2X - 2;
}
`,
  "m2t3_3": `let x1 = -60;
let x2 = -60;
let x3 = -60;
let y1;
let y2;
let y3;
let speed1;
let speed2;
let speed3;
let rot1;
let gruen1;
let blau1;
let rot2;
let gruen2;
let blau2;
let rot3;
let gruen3;
let blau3;
function setup() {
  createCanvas(800, 800);
  noStroke();
  y1 = random(100, 550);
  y2 = random(100, 550);
  y3 = random(100, 550);
  speed1 = random(1, 6);
  speed2 = random(1, 6);
  speed3 = random(1, 6);
  rot1 = random(0, 255);
  gruen1 = random(0, 255);
  blau1 = random(0, 255);
  rot2 = random(0, 255);
  gruen2 = random(0, 255);
  blau2 = random(0, 255);
  rot3 = random(0, 255);
  gruen3 = random(0, 255);
  blau3 = random(0, 255);
}
function draw() {
  background(40, 130, 210);
  fill(20, 80, 150);
  rect(0, 600, 800, 200);
  fill(rot1, gruen1, blau1);
  ellipse(x1, y1, 110, 68);
  triangle(x1 - 55, y1, x1 - 105, y1 - 35, x1 - 105, y1 + 35);
  fill(rot2, gruen2, blau2);
  ellipse(x2, y2, 110, 68);
  triangle(x2 - 55, y2, x2 - 105, y2 - 35, x2 - 105, y2 + 35);
  fill(rot3, gruen3, blau3);
  ellipse(x3, y3, 110, 68);
  triangle(x3 - 55, y3, x3 - 105, y3 - 35, x3 - 105, y3 + 35);
  fill(200, 235, 255);
  let blase = random(5, 20);
  ellipse(random(800), random(600), blase, blase);
  x1 = x1 + speed1;
  x2 = x2 + speed2;
  x3 = x3 + speed3;
}
`,
  "m2t4_1": `function setup() {
  createCanvas(800, 800);
  noStroke();
  frameRate(10);
}
function draw() {
  background(170, 225, 255);
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  fill(70, 145, 65);
  rect(210, 430, 20, 170);
  rect(390, 430, 20, 170);
  rect(570, 430, 20, 170);
  let groesse1 = random(10, 70);
  let groesse2 = random(10, 70);
  let groesse3 = random(10, 70);
  fill(255, 130, 180);
  ellipse(220, 430, groesse1 * 2, groesse1 * 2);
  fill(255, 160, 60);
  ellipse(400, 430, groesse2 * 2, groesse2 * 2);
  fill(170, 110, 255);
  ellipse(580, 430, groesse3 * 2, groesse3 * 2);
  fill(255, 220, 0);
  ellipse(220, 430, groesse1, groesse1);
  ellipse(400, 430, groesse2, groesse2);
  ellipse(580, 430, groesse3, groesse3);
}
`,
  "m2t4_2": `function setup() {
  createCanvas(800, 800);
  noStroke();
  frameRate(10);
}
function draw() {
  background(20, 20, 40);
  let hoehe1 = random(10, 70);
  let hoehe2 = random(10, 70);
  let hoehe3 = random(10, 70);
  let hoehe4 = random(10, 70);
  let hoehe5 = random(10, 70);
  fill(255, 80, 80);
  rect(100, 650 - hoehe1 * 8, 100, hoehe1 * 8);
  fill(255, 180, 60);
  rect(225, 650 - hoehe2 * 8, 100, hoehe2 * 8);
  fill(255, 240, 80);
  rect(350, 650 - hoehe3 * 8, 100, hoehe3 * 8);
  fill(80, 220, 120);
  rect(475, 650 - hoehe4 * 8, 100, hoehe4 * 8);
  fill(80, 160, 255);
  rect(600, 650 - hoehe5 * 8, 100, hoehe5 * 8);
}
`,
  "m2t4_3": `function setup() {
  createCanvas(800, 800);
  noStroke();
  frameRate(5);
}
function draw() {
  let wolkeX = random(80, 580);
  background(110, 130, 160);
  fill(90, 160, 95);
  rect(0, 650, 800, 150);
  fill(70, 120, 255);
  rect(wolkeX + random(-60, 200), random(200, 650), 4, random(10, 70));
  rect(wolkeX + random(-60, 200), random(200, 650), 4, random(10, 70));
  rect(wolkeX + random(-60, 200), random(200, 650), 4, random(10, 70));
  rect(wolkeX + random(-60, 200), random(200, 650), 4, random(10, 70));
  rect(wolkeX + random(-60, 200), random(200, 650), 4, random(10, 70));
  fill(230, 230, 235);
  ellipse(wolkeX, 150, 160, 90);
  ellipse(wolkeX + 70, 125, 130, 80);
  ellipse(wolkeX + 140, 150, 160, 90);
}
`,
  "m2t5_1": `let x = 400;
let y = 400;
let speedX;
let speedY;
let rot;
let gruen;
let blau;
function setup() {
  createCanvas(800, 800);
  noStroke();
  speedX = random(-3, 3);
  speedY = random(-3, 3);
  rot = random(0, 255);
  gruen = random(0, 255);
  blau = random(0, 255);
}
function draw() {
  background(20, 20, 40);
  fill(rot, gruen, blau);
  ellipse(x, y, 60, 60);
  x = x + speedX;
  y = y + speedY;
}
`,
  "m2t5_2": `let x1 = 400;
let y1 = 400;
let x2 = 400;
let y2 = 400;
let x3 = 400;
let y3 = 400;
let sx1;
let sy1;
let sx2;
let sy2;
let sx3;
let sy3;
let rot1;
let gruen1;
let blau1;
let rot2;
let gruen2;
let blau2;
let rot3;
let gruen3;
let blau3;
function setup() {
  createCanvas(800, 800);
  background(20, 20, 40);
  noStroke();
  sx1 = random(-5, 5);
  sy1 = random(-5, 5);
  sx2 = random(-5, 5);
  sy2 = random(-5, 5);
  sx3 = random(-5, 5);
  sy3 = random(-5, 5);
  rot1 = random(0, 255);
  gruen1 = random(0, 255);
  blau1 = random(0, 255);
  rot2 = random(0, 255);
  gruen2 = random(0, 255);
  blau2 = random(0, 255);
  rot3 = random(0, 255);
  gruen3 = random(0, 255);
  blau3 = random(0, 255);
}
function draw() {
  fill(rot1, gruen1, blau1);
  ellipse(x1, y1, 40, 40);
  fill(rot2, gruen2, blau2);
  ellipse(x2, y2, 40, 40);
  fill(rot3, gruen3, blau3);
  ellipse(x3, y3, 40, 40);
  x1 = x1 + sx1;
  y1 = y1 + sy1;
  x2 = x2 + sx2;
  y2 = y2 + sy2;
  x3 = x3 + sx3;
  y3 = y3 + sy3;
}
`,
  "m2t5_3": `let x1;
let y1;
let x2;
let y2;
let x3;
let y3;
let sx1;
let sy1;
let sx2;
let sy2;
let sx3;
let sy3;
let rot1;
let gruen1;
let blau1;
let rot2;
let gruen2;
let blau2;
let rot3;
let gruen3;
let blau3;
let groesse1;
let groesse2;
let groesse3;
function setup() {
  createCanvas(800, 800);
  background(20, 20, 40);
  noStroke();
  fill(255, 255, 255);
  textSize(28);
  text("Klicke irgendwo hin!", 20, 40);
  neueKreise(400, 400);
}
function neueKreise(startX, startY) {
  x1 = startX;
  y1 = startY;
  x2 = startX;
  y2 = startY;
  x3 = startX;
  y3 = startY;
  sx1 = random(-6, 6);
  sy1 = random(-6, 6);
  sx2 = random(-6, 6);
  sy2 = random(-6, 6);
  sx3 = random(-6, 6);
  sy3 = random(-6, 6);
  rot1 = random(0, 255);
  gruen1 = random(0, 255);
  blau1 = random(0, 255);
  rot2 = random(0, 255);
  gruen2 = random(0, 255);
  blau2 = random(0, 255);
  rot3 = random(0, 255);
  gruen3 = random(0, 255);
  blau3 = random(0, 255);
  groesse1 = random(20, 70);
  groesse2 = random(20, 70);
  groesse3 = random(20, 70);
}
function mousePressed() {
  neueKreise(mouseX, mouseY);
}
function draw() {
  fill(rot1, gruen1, blau1);
  ellipse(x1, y1, groesse1, groesse1);
  fill(rot2, gruen2, blau2);
  ellipse(x2, y2, groesse2, groesse2);
  fill(rot3, gruen3, blau3);
  ellipse(x3, y3, groesse3, groesse3);
  let rot = random(0, 255);
  let gruen = random(0, 255);
  let blau = random(0, 255);
  fill(rot, gruen, blau);
  ellipse(random(800), random(800), random(3, 10), random(3, 10));
  x1 = x1 + sx1;
  y1 = y1 + sy1;
  x2 = x2 + sx2;
  y2 = y2 + sy2;
  x3 = x3 + sx3;
  y3 = y3 + sy3;
}
`,
  // === MODUL 3 ===
  "m3t1_1": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(220);
  fill(230, 70, 70);
  if (mouseX > 400) {
    fill(60, 120, 230);
  }
  circle(400, 400, 190);
}
`,
  "m3t1_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(245);
  fill(220, 70, 70);
  if (mouseY > 400) {
    background(255, 235, 120);
    fill(40, 170, 80);
  }
  circle(400, 400, 190);
}
`,
  "m3t1_3": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  if (mouseX > 400) {
    background(50, 100, 220);
    fill(255, 255, 255);
    textSize(36);
    text("Rechte Seite", 265, 120);
  } else {
    background(255, 160, 30);
    fill(40, 30, 20);
    textSize(36);
    text("Linke Seite", 280, 120);
  }
  circle(400, 420, 200);
}
`,
  "m3t2_1": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(50, 50, 80);
  if (mouseIsPressed) {
    fill(255, 230, 0);
  } else {
    fill(150, 150, 170);
  }
  circle(400, 400, 220);
}
`,
  "m3t2_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(30, 30, 50);
  if (mouseX < 200) {
    fill(220, 50, 50);
  } else if (mouseX < 400) {
    fill(255, 200, 0);
  } else if (mouseX < 600) {
    fill(50, 200, 80);
  } else {
    fill(50, 100, 230);
  }
  circle(400, 400, 200);
}
`,
  "m3t2_3": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(20, 20, 40);
  if (mouseIsPressed && mouseX < 400) {
    background(80, 50, 0);
    fill(255, 230, 0);
  } else if (mouseIsPressed) {
    background(60, 0, 60);
    fill(255, 80, 200);
  } else if (mouseX < 400) {
    fill(50, 130, 255);
  } else {
    fill(50, 200, 80);
  }
  circle(400, 400, 200);
}
`,
  "m3t3_1": `function setup() {
  createCanvas(800, 800);
  background(20, 20, 60);
}
function draw() {
  let r = random(0, 255);
  let g = random(0, 255);
  let b = random(0, 255);
  let x = random(0, 800);
  let y = random(0, 800);
  let d = random(20, 120);
  noStroke();
  fill(r, g, b);
  circle(x, y, d);
}
`,
  "m3t3_2": `let flowerX = 400;
let flowerY = 430;
let flowerColor = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  fill(70, 145, 65);
  rect(flowerX - 10, flowerY - 110, 20, 150);
  fill(255, 120 + flowerColor / 2, 170);
  circle(flowerX, flowerY - 125, 90);
  circle(flowerX, flowerY - 55, 90);
  circle(flowerX - 45, flowerY - 90, 90);
  circle(flowerX + 45, flowerY - 90, 90);
  fill(255, 220 - flowerColor / 2, 0);
  circle(flowerX, flowerY - 90, 96);
}
function mousePressed() {
  flowerX = random(120, 680);
  flowerY = random(230, 680);
  flowerColor = (flowerColor + 60) % 255;
}
`,
  "m3t3_3": `let flowerX = 400;
let flowerY = 430;
let punkte = 0;
let sichtbar = true;
let pause = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  fill(35, 35, 50);
  textSize(34);
  text("Punkte: " + punkte, 30, 50);
  if (sichtbar) {
    fill(70, 145, 65);
    rect(flowerX - 10, flowerY - 110, 20, 150);
    fill(255, 120, 170);
    circle(flowerX, flowerY - 125, 90);
    circle(flowerX, flowerY - 55, 90);
    circle(flowerX - 45, flowerY - 90, 90);
    circle(flowerX + 45, flowerY - 90, 90);
    fill(255, 220, 0);
    circle(flowerX, flowerY - 90, 96);
  } else {
    fill(30, 30, 50);
    textSize(30);
    text("Treffer! Neue Blume kommt...", 175, 120);
  }
  if (!sichtbar) {
    pause = pause - 1;
    if (pause <= 0) {
      flowerX = random(120, 680);
      flowerY = random(230, 680);
      sichtbar = true;
    }
  }
}
function mousePressed() {
  let abstand = dist(mouseX, mouseY, flowerX, flowerY - 90);
  if (sichtbar && abstand < 48) {
    punkte = punkte + 1;
    sichtbar = false;
    pause = 35;
  } else {
    punkte = max(0, punkte - 1);
  }
}
`,
  "m3t4_1": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(20, 20, 60);
  let zielX = 400 + sin(frameCount * 0.03) * 170;
  let zielY = 400 + cos(frameCount * 0.04) * 120;
  let abstand = dist(mouseX, mouseY, zielX, zielY);
  fill(255, 255, 255);
  textSize(28);
  text("Abstand: " + nfc(abstand, 0), 50, 50);
  fill(255, 200, 0);
  circle(zielX, zielY, 80);
  fill(0, 200, 255);
  circle(mouseX, mouseY, 25);
}
`,
  "m3t4_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(20, 80, 20);
  let zielX = 400 + sin(frameCount * 0.025) * 210;
  let zielY = 390 + cos(frameCount * 0.03) * 140;
  let abstand = dist(mouseX, mouseY, zielX, zielY);
  if (abstand < 80) {
    background(80, 60, 0);
    fill(255, 220, 0);
    circle(zielX, zielY, 105);
    fill(255, 255, 255);
    textSize(40);
    text("Schatz gefunden!", 170, 620);
  } else {
    fill(255, 200, 0);
    circle(zielX, zielY, 55);
  }
  fill(255, 100, 100);
  circle(mouseX, mouseY, 20);
}
`,
  "m3t4_3": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(10, 10, 30);
  let kernX = 400 + sin(frameCount * 0.02) * 170;
  let kernY = 400 + cos(frameCount * 0.018) * 130;
  let abstand = dist(mouseX, mouseY, kernX, kernY);
  if (abstand < 90) {
    fill(255, 50, 50);
    circle(kernX, kernY, 300);
    fill(255, 255, 255);
    textSize(32);
    text("ZU NAH!", kernX - 75, kernY + 12);
  } else if (abstand < 220) {
    fill(255, 200, 0);
    circle(kernX, kernY, 180);
  } else {
    fill(50, 100, 200);
    circle(kernX, kernY, 80);
  }
  fill(255);
  circle(mouseX, mouseY, 15);
}
`,
  "m3t5_1": `let punkte = 0;
let zielX = 140;
let speed = 4;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(10, 10, 30);
  zielX = zielX + speed;
  if (zielX > 760 || zielX < 40) {
    speed = -speed;
  }
  fill(255, 100, 0);
  circle(zielX, 420, 90);
  fill(255, 255, 255);
  textSize(35);
  text("Punkte: " + nfc(punkte, 0), 50, 50);
  textSize(24);
  text("Treffe den bewegten Kreis", 50, 90);
}
function mousePressed() {
  let abstand = dist(mouseX, mouseY, zielX, 420);
  if (abstand < 45) {
    punkte = punkte + 10;
  }
}
`,
  "m3t5_2": `let punkte = 0;
let zielX = 400;
let zielY = 400;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(10, 10, 30);
  let drawX = zielX + sin(frameCount * 0.08) * 18;
  let drawY = zielY + cos(frameCount * 0.08) * 18;
  fill(255, 120, 0);
  circle(drawX, drawY, 80);
  fill(255, 255, 255);
  textSize(35);
  text("Punkte: " + nfc(punkte, 0), 50, 50);
}
function mousePressed() {
  let drawX = zielX + sin(frameCount * 0.08) * 18;
  let drawY = zielY + cos(frameCount * 0.08) * 18;
  let abstand = dist(mouseX, mouseY, drawX, drawY);
  if (abstand < 40) {
    punkte = punkte + 10;
    zielX = random(90, 710);
    zielY = random(150, 710);
  }
}
`,
  "m3t5_3": `let punkte = 0;
let treffer = 0;
let fehlversuche = 0;
let ziel1X = 220;
let ziel1Y = 360;
let v1X = 3;
let v1Y = 2;
let ziel2X = 600;
let ziel2Y = 470;
let v2X = -2.6;
let v2Y = 2.2;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(10, 10, 30);
  if (treffer >= 12) {
    background(0, 150, 0);
    fill(255, 255, 0);
    textSize(60);
    text("GEWONNEN!", 170, 360);
    fill(255, 255, 255);
    textSize(34);
    text("Punkte: " + nfc(punkte, 0), 260, 430);
    return;
  }
  if (fehlversuche >= 8) {
    background(150, 30, 30);
    fill(255, 255, 255);
    textSize(58);
    text("GAME OVER", 175, 360);
    textSize(34);
    text("Punkte: " + nfc(punkte, 0), 270, 430);
    return;
  }
  ziel1X = ziel1X + v1X;
  ziel1Y = ziel1Y + v1Y;
  ziel2X = ziel2X + v2X;
  ziel2Y = ziel2Y + v2Y;
  if (ziel1X > 765 || ziel1X < 35) {
    v1X = -v1X;
  }
  if (ziel1Y > 565 || ziel1Y < 175) {
    v1Y = -v1Y;
  }
  if (ziel2X > 765 || ziel2X < 35) {
    v2X = -v2X;
  }
  if (ziel2Y > 565 || ziel2Y < 175) {
    v2Y = -v2Y;
  }
  fill(255, 100, 0);
  circle(ziel1X, ziel1Y, 70);
  fill(255, 200, 0);
  circle(ziel1X, ziel1Y, 35);
  fill(80, 170, 255);
  circle(ziel2X, ziel2Y, 70);
  fill(200, 240, 255);
  circle(ziel2X, ziel2Y, 35);
  fill(255, 255, 255);
  textSize(30);
  text("Punkte: " + nfc(punkte, 0), 25, 40);
  text("Treffer: " + treffer + " / 12", 25, 78);
  text("Fehlklicks: " + fehlversuche + " / 8", 25, 116);
}
function mousePressed() {
  if (treffer >= 12 || fehlversuche >= 8) {
    return;
  }
  let hit1 = dist(mouseX, mouseY, ziel1X, ziel1Y) < 35;
  let hit2 = dist(mouseX, mouseY, ziel2X, ziel2Y) < 35;
  if (hit1 || hit2) {
    punkte = punkte + 12;
    treffer = treffer + 1;
    if (hit1) {
      ziel1X = random(80, 720);
      ziel1Y = random(180, 560);
    }
    if (hit2) {
      ziel2X = random(80, 720);
      ziel2Y = random(180, 560);
    }
  } else {
    fehlversuche = fehlversuche + 1;
    punkte = max(0, punkte - 6);
  }
}`
};