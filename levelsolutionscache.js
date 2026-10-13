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
  background(230, 245, 255);
  fill(255, 220, 0);
  circle(120, 120, 90);
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
  "m1t2_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(180, 225, 255);
  fill(90, 180, 90);
  rect(0, 590, 800, 210);
  fill(255, 210, 0);
  circle(700, 120, 110);
  fill(205, 70, 55);
  rect(280, 370, 260, 220);
  fill(145, 80, 35);
  triangle(250, 370, 410, 250, 570, 370);
  fill(100, 65, 35);
  rect(390, 470, 70, 120);
  fill(190, 235, 255);
  rect(320, 430, 55, 55);
  rect(445, 430, 55, 55);
  fill(235, 235, 235);
  rect(590, 350, 70, 240);
  fill(180, 180, 180);
  ellipse(625, 350, 70, 30);
  }
`,
  "m1t2_3": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  fill(85, 175, 90);
  rect(0, 580, 800, 220);
  fill(255, 215, 0);
  circle(90, 95, 85);
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
  fill(210, 190, 155);
  rect(610, 430, 130, 160);
  fill(235, 235, 235);
  ellipse(675, 430, 130, 35);
  }
`,
  "m1t3_1": `function setup() {
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
  "m1t3_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(180, 225, 255);
  fill(90, 180, 90);
  rect(0, 590, 800, 210);
  fill(255, 210, 0);
  circle(700, 120, 110);
  fill(205, 70, 55);
  rect(280, 370, 260, 220);
  fill(145, 80, 35);
  triangle(250, 370, 410, 250, 570, 370);
  fill(100, 65, 35);
  rect(390, 470, 70, 120);
  fill(190, 235, 255);
  rect(320, 430, 55, 55);
  rect(445, 430, 55, 55);
  fill(235, 235, 235);
  rect(590, 350, 70, 240);
  fill(180, 180, 180);
  ellipse(625, 350, 70, 30);
  }
`,
  "m1t3_3": `function setup() {
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
  "m1t4_1": `let blumeX = 220;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(160, 210, 255);
  fill(85, 175, 90);
  rect(0, 590, 800, 210);
  fill(70, 150, 60);
  rect(blumeX - 10, 420, 20, 170);
  fill(255, 120, 170);
  circle(blumeX - 55, 470, 70);
  circle(blumeX + 55, 470, 70);
  circle(blumeX, 415, 70);
  circle(blumeX, 525, 70);
  fill(255, 220, 0);
  circle(blumeX, 470, 80);
}
`,
  "m1t4_2": `
  let blumeX = 260;
let blumeY = 500;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(170, 225, 255);
  fill(90, 180, 90);
  rect(0, 590, 800, 210);
  fill(70, 145, 65);
  rect(blumeX - 10, blumeY - 120, 20, 210);
  fill(255, 130, 180);
  circle(blumeX - 50, blumeY - 35, 70);
  circle(blumeX + 50, blumeY - 35, 70);
  circle(blumeX, blumeY - 90, 70);
  circle(blumeX, blumeY + 20, 70);
  fill(255, 220, 0);
  circle(blumeX, blumeY - 35, 82);
  fill(250, 210, 0);
  ellipse(blumeX + 250, blumeY - 180, 120, 70);
  fill(40, 30, 20);
  ellipse(blumeX + 220, blumeY - 180, 10, 10);
  ellipse(blumeX + 280, blumeY - 180, 10, 10);
  }
`,
  "m1t4_3": `let blumeX = 290;
let blumeY = 520;
let blumeGroesse = 90;
let bieneX = 560;
let bieneY = 290;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(150, 215, 255);
  fill(90, 180, 90);
  rect(0, 590, 800, 210);
  fill(70, 145, 65);
  rect(blumeX - 10, blumeY - 130, 20, 220);
  fill(255, 120, 170);
  circle(blumeX - blumeGroesse * 0.6, blumeY - 35, blumeGroesse);
  circle(blumeX + blumeGroesse * 0.6, blumeY - 35, blumeGroesse);
  circle(blumeX, blumeY - blumeGroesse, blumeGroesse);
  circle(blumeX, blumeY + 30, blumeGroesse);
  fill(255, 220, 0);
  circle(blumeX, blumeY - 35, blumeGroesse);
  fill(250, 210, 0);
  ellipse(bieneX, bieneY, 150, 80);
  fill(255, 255, 255);
  ellipse(bieneX - 25, bieneY - 45, 48, 28);
  ellipse(bieneX + 25, bieneY - 45, 48, 28);
  fill(45, 30, 20);
  rect(bieneX - 25, bieneY - 40, 12, 80);
  rect(bieneX + 13, bieneY - 40, 12, 80);
  ellipse(bieneX + 48, bieneY - 10, 18, 18);
  }
`,
  "m1t5_1": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(175, 225, 255);
  noStroke();
  fill(85, 175, 90);
  rect(0, 580, 800, 220);
  fill(70, 145, 65);
  rect(200, 430, 20, 160);
  rect(390, 440, 20, 150);
  rect(590, 425, 20, 165);
  fill(255, 130, 180);
  circle(210, 410, 80);
  circle(210, 470, 80);
  circle(170, 440, 80);
  circle(250, 440, 80);
  fill(255, 220, 0);
  circle(210, 440, 85);
  fill(255, 160, 190);
  circle(400, 420, 70);
  circle(400, 470, 70);
  circle(360, 445, 70);
  circle(440, 445, 70);
  fill(255, 215, 0);
  circle(400, 445, 78);
  fill(255, 110, 160);
  triangle(560, 470, 650, 320, 740, 470);
  fill(255, 205, 0);
  rect(620, 470, 60, 100);
  }
`,
  "m1t5_2": `function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(85, 175, 90);
  rect(0, 570, 800, 230);
  fill(230, 120, 70);
  rect(120, 360, 220, 210);
  fill(150, 85, 35);
  triangle(90, 360, 230, 260, 370, 360);
  fill(95, 55, 30);
  rect(205, 470, 55, 100);
  fill(255, 210, 0);
  circle(680, 120, 110);
  fill(250, 205, 0);
  ellipse(500, 290, 130, 72);
  fill(255, 255, 255);
  ellipse(470, 245, 50, 28);
  ellipse(530, 245, 50, 28);
  fill(45, 30, 20);
  rect(485, 255, 10, 70);
  rect(505, 255, 10, 70);
  rect(525, 255, 10, 70);
  fill(255, 115, 165);
  circle(600, 430, 78);
  circle(600, 490, 78);
  circle(560, 460, 78);
  circle(640, 460, 78);
  fill(255, 220, 0);
  circle(600, 460, 85);
  }
`,
  "m1t5_3": `let mx = 400;
let my = 430;
function setup() {
  createCanvas(900, 900);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(85, 175, 90);
  rect(0, 620, 900, 280);
  fill(70, 145, 65);
  rect(220, 470, 24, 170);
  rect(460, 490, 24, 150);
  rect(680, 455, 24, 185);
  fill(255, 130, 180);
  circle(232, 450, 96);
  circle(232, 515, 96);
  circle(182, 482, 96);
  circle(282, 482, 96);
  fill(255, 220, 0);
  circle(232, 482, 98);
  fill(255, 155, 190);
  circle(472, 470, 88);
  circle(472, 530, 88);
  circle(428, 500, 88);
  circle(516, 500, 88);
  fill(255, 220, 0);
  circle(472, 500, 90);
  fill(250, 205, 0);
  ellipse(mx + 160, my - 120, 150, 86);
  fill(255, 255, 255);
  ellipse(mx + 130, my - 168, 52, 30);
  ellipse(mx + 190, my - 168, 52, 30);
  fill(45, 30, 20);
  rect(mx + 142, my - 162, 12, 84);
  rect(mx + 174, my - 162, 12, 84);
  ellipse(mx + 218, my - 130, 18, 18);
  fill(20, 20, 20);
  circle(mx + 212, my - 134, 6);
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
  circle(x, 250, 90);
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
  cloudX = (cloudX + speed) % 980;
}
`,
  "m2t1_3": `let balloonY = 0;
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
  balloonY = (balloonY + speedY) % 980;
}
`,
  "m2t2_1": `let fishX = 0;
let wavePhase = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(30, 120, 200);
  fill(20, 80, 150);
  rect(0, 520, 800, 280);
  let fishY = 400 + sin(wavePhase) * 120;
  fill(255, 170, 60);
  ellipse(fishX, fishY, 120, 70);
  triangle(fishX - 65, fishY, fishX - 120, fishY - 35, fishX - 120, fishY + 35);
  fill(30, 30, 40);
  circle(fishX + 35, fishY - 8, 10);
  fishX = (fishX + 4) % 940;
  wavePhase = wavePhase + 0.06;
}
`,
  "m2t2_2": `let bee1X = 0;
let bee2X = 800;
let bee1Speed = 3;
let bee2Speed = 2;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(170, 225, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 590, 800, 210);
  fill(70, 150, 65);
  rect(390, 430, 20, 160);
  fill(255, 130, 180);
  circle(400, 390, 95);
  circle(400, 460, 95);
  circle(350, 425, 95);
  circle(450, 425, 95);
  fill(255, 220, 0);
  circle(400, 425, 100);
  fill(250, 210, 0);
  ellipse(bee1X, 300, 120, 65);
  ellipse(bee2X, 430, 120, 65);
  fill(255, 255, 255);
  ellipse(bee1X - 20, 265, 40, 24);
  ellipse(bee1X + 20, 265, 40, 24);
  ellipse(bee2X - 20, 395, 40, 24);
  ellipse(bee2X + 20, 395, 40, 24);
  fill(40, 30, 20);
  rect(bee1X - 15, 268, 10, 64);
  rect(bee1X + 5, 268, 10, 64);
  rect(bee2X - 15, 398, 10, 64);
  rect(bee2X + 5, 398, 10, 64);
  bee1X = (bee1X + bee1Speed) % 920;
  bee2X = (bee2X - bee2Speed + 920) % 920;
}
`,
  "m2t2_3": `let angle = 0;
let wingPhase = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 585, 800, 215);
  fill(70, 145, 65);
  rect(390, 420, 20, 165);
  fill(255, 120, 170);
  circle(400, 385, 95);
  circle(400, 455, 95);
  circle(350, 420, 95);
  circle(450, 420, 95);
  fill(255, 220, 0);
  circle(400, 420, 100);
  let beeX = 400 + cos(angle) * 220;
  let beeY = 380 + sin(angle) * 130;
  let wingOffset = sin(wingPhase) * 12;
  fill(250, 210, 0);
  ellipse(beeX, beeY, 120, 65);
  fill(255, 255, 255);
  ellipse(beeX - 20, beeY - 36 - wingOffset, 40, 24);
  ellipse(beeX + 20, beeY - 36 + wingOffset, 40, 24);
  fill(40, 30, 20);
  rect(beeX - 15, beeY - 30, 10, 64);
  rect(beeX + 5, beeY - 30, 10, 64);
  angle = angle + 0.03;
  wingPhase = wingPhase + 0.45;
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
  "m2t3_2": `let x = 0;
let speed = 4;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(170, 225, 255);
  fill(85, 175, 90);
  rect(0, 590, 800, 210);
  fill(250, 210, 0);
  ellipse(x, 340, 120, 65);
  fill(255, 255, 255);
  ellipse(x - 20, 305, 40, 24);
  ellipse(x + 20, 305, 40, 24);
  fill(40, 30, 20);
  rect(x - 15, 308, 10, 64);
  rect(x + 5, 308, 10, 64);
  x = x + speed;
  if (x > 860) {
    x = -60;
  }
}
`,
  "m2t3_3": `let beeX = 400;
let speed = 5;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  fill(90, 180, 95);
  rect(0, 590, 800, 210);
  fill(250, 210, 0);
  ellipse(beeX, 360, 120, 65);
  fill(255, 255, 255);
  ellipse(beeX - 20, 325, 40, 24);
  ellipse(beeX + 20, 325, 40, 24);
  fill(40, 30, 20);
  rect(beeX - 15, 328, 10, 64);
  rect(beeX + 5, 328, 10, 64);
  beeX = beeX + speed;
  if (beeX > 760 || beeX < 40) {
    speed = -speed;
  }
}
`,
  "m2t4_1": `let phase = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(170, 225, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  let flower1X = 220 + sin(phase) * 30;
  let flower2X = 420 + sin(phase + 1.5) * 35;
  let flower3X = 620 + sin(phase + 3) * 25;
  fill(70, 145, 65);
  rect(flower1X - 10, 440, 20, 160);
  rect(flower2X - 10, 430, 20, 170);
  rect(flower3X - 10, 450, 20, 150);
  fill(255, 130, 180);
  circle(flower1X, 430, 90);
  circle(flower1X - 45, 470, 90);
  circle(flower1X + 45, 470, 90);
  fill(255, 220, 0);
  circle(flower1X, 470, 95);
  fill(255, 155, 190);
  circle(flower2X, 420, 90);
  circle(flower2X - 45, 460, 90);
  circle(flower2X + 45, 460, 90);
  fill(255, 220, 0);
  circle(flower2X, 460, 95);
  fill(255, 115, 165);
  circle(flower3X, 440, 90);
  circle(flower3X - 45, 480, 90);
  circle(flower3X + 45, 480, 90);
  fill(255, 220, 0);
  circle(flower3X, 480, 95);
  phase = phase + 0.04;
}
`,
  "m2t4_2": `let angle = 0;
let wingPhase = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  fill(70, 145, 65);
  rect(390, 430, 20, 170);
  fill(255, 125, 175);
  circle(400, 390, 100);
  circle(400, 470, 100);
  circle(345, 430, 100);
  circle(455, 430, 100);
  fill(255, 220, 0);
  circle(400, 430, 105);
  let beeX = 400 + cos(angle) * 200;
  let beeY = 330 + sin(angle) * 120;
  let wing = sin(wingPhase) * 14;
  fill(250, 210, 0);
  ellipse(beeX, beeY, 120, 65);
  fill(255, 255, 255);
  ellipse(beeX - 20, beeY - 35 - wing, 40, 24);
  ellipse(beeX + 20, beeY - 35 + wing, 40, 24);
  fill(40, 30, 20);
  rect(beeX - 15, beeY - 30, 10, 64);
  rect(beeX + 5, beeY - 30, 10, 64);
  angle = angle + 0.04;
  wingPhase = wingPhase + 0.5;
}
`,
  "m2t4_3": `let cloud1X = 0;
let cloud2X = 260;
let cloud3X = 520;
let t = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(255, 255, 255);
  ellipse(cloud1X, 150, 120, 70);
  ellipse(cloud1X + 55, 130, 95, 60);
  ellipse(cloud2X, 210, 120, 70);
  ellipse(cloud2X + 55, 190, 95, 60);
  ellipse(cloud3X, 140, 120, 70);
  ellipse(cloud3X + 55, 120, 95, 60);
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  let beeX = 400 + sin(t) * 260;
  let beeY = 330 + sin(t * 2) * 80;
  fill(250, 210, 0);
  ellipse(beeX, beeY, 120, 65);
  fill(255, 255, 255);
  ellipse(beeX - 20, beeY - 35, 40, 24);
  ellipse(beeX + 20, beeY - 35, 40, 24);
  fill(40, 30, 20);
  rect(beeX - 15, beeY - 30, 10, 64);
  rect(beeX + 5, beeY - 30, 10, 64);
  cloud1X = (cloud1X + 1.5) % 960;
  cloud2X = (cloud2X + 1) % 960;
  cloud3X = (cloud3X + 1.8) % 960;
  t = t + 0.03;
}
`,
  "m2t5_1": `let beeX = 400;
let beeY = 400;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  fill(70, 145, 65);
  rect(390, 430, 20, 170);
  fill(255, 120, 170);
  circle(400, 390, 100);
  circle(400, 470, 100);
  circle(345, 430, 100);
  circle(455, 430, 100);
  fill(255, 220, 0);
  circle(400, 430, 105);
  beeX = lerp(beeX, mouseX, 0.08);
  beeY = lerp(beeY, mouseY, 0.08);
  fill(250, 210, 0);
  ellipse(beeX, beeY, 120, 65);
  fill(255, 255, 255);
  ellipse(beeX - 20, beeY - 35, 40, 24);
  ellipse(beeX + 20, beeY - 35, 40, 24);
  fill(40, 30, 20);
  rect(beeX - 15, beeY - 30, 10, 64);
  rect(beeX + 5, beeY - 30, 10, 64);
}
`,
  "m2t5_2": `let beeX = 400;
let beeY = 400;
let oldX = 400;
let oldY = 400;
let nektar = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  fill(70, 145, 65);
  rect(230, 440, 20, 160);
  rect(560, 455, 20, 145);
  fill(255, 130, 180);
  circle(240, 430, 90);
  circle(240, 490, 90);
  circle(195, 460, 90);
  circle(285, 460, 90);
  fill(255, 220, 0);
  circle(240, 460, 95);
  fill(255, 115, 165);
  circle(570, 445, 90);
  circle(570, 505, 90);
  circle(525, 475, 90);
  circle(615, 475, 90);
  fill(255, 220, 0);
  circle(570, 475, 95);
  beeX = lerp(beeX, mouseX, 0.1);
  beeY = lerp(beeY, mouseY, 0.1);
  let schritt = dist(beeX, beeY, oldX, oldY);
  nektar = nektar + schritt * 0.05;
  oldX = beeX;
  oldY = beeY;
  fill(250, 210, 0);
  ellipse(beeX, beeY, 120, 65);
  fill(255, 255, 255);
  ellipse(beeX - 20, beeY - 35, 40, 24);
  ellipse(beeX + 20, beeY - 35, 40, 24);
  fill(40, 30, 20);
  rect(beeX - 15, beeY - 30, 10, 64);
  rect(beeX + 5, beeY - 30, 10, 64);
  fill(25, 25, 40);
  textSize(32);
  text("Nektar: " + int(nektar), 30, 45);
}
`,
  "m2t5_3": `let beeX = 400;
let beeY = 400;
let nektar = 0;
let zeit = 0;
function setup() {
  createCanvas(800, 800);
}
function draw() {
  background(165, 220, 255);
  noStroke();
  fill(90, 180, 95);
  rect(0, 600, 800, 200);
  let flower1Y = 570 + sin(frameCount * 0.05) * 12;
  let flower2Y = 575 + sin(frameCount * 0.05 + 1.7) * 12;
  let flower3Y = 565 + sin(frameCount * 0.05 + 3.4) * 12;
  fill(70, 145, 65);
  rect(160, flower1Y - 120, 20, 160);
  rect(390, flower2Y - 120, 20, 160);
  rect(620, flower3Y - 120, 20, 160);
  fill(255, 120, 170);
  circle(170, flower1Y - 130, 88);
  circle(170, flower1Y - 70, 88);
  circle(126, flower1Y - 100, 88);
  circle(214, flower1Y - 100, 88);
  fill(255, 220, 0);
  circle(170, flower1Y - 100, 92);
  fill(255, 150, 190);
  circle(400, flower2Y - 130, 88);
  circle(400, flower2Y - 70, 88);
  circle(356, flower2Y - 100, 88);
  circle(444, flower2Y - 100, 88);
  fill(255, 220, 0);
  circle(400, flower2Y - 100, 92);
  fill(255, 100, 160);
  circle(630, flower3Y - 130, 88);
  circle(630, flower3Y - 70, 88);
  circle(586, flower3Y - 100, 88);
  circle(674, flower3Y - 100, 88);
  fill(255, 220, 0);
  circle(630, flower3Y - 100, 92);
  beeX = lerp(beeX, mouseX, 0.1);
  beeY = lerp(beeY, mouseY, 0.1);
  let schritt = dist(beeX, beeY, pmouseX, pmouseY);
  nektar = nektar + schritt * 0.04;
  zeit = zeit + 1 / 60;
  fill(250, 210, 0);
  ellipse(beeX, beeY, 120, 65);
  fill(255, 255, 255);
  ellipse(beeX - 20, beeY - 35, 40, 24);
  ellipse(beeX + 20, beeY - 35, 40, 24);
  fill(40, 30, 20);
  rect(beeX - 15, beeY - 30, 10, 64);
  rect(beeX + 5, beeY - 30, 10, 64);
  fill(25, 25, 40);
  textSize(32);
  text("Nektar: " + int(nektar), 30, 45);
  text("Zeit: " + nf(zeit, 1, 1) + "s", 30, 82);
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