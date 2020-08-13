//let highscore=0;
let bg;
let flag = false;
let gun;
let bullets = [];
let gn;
let blt;
let bcol;
let balloons = [];
let score;
let rand;
//let bl;
let bls = [];
let mySound;
let ss;
let bulletcount=20;

function preload() {

  soundFormats('mp3', 'ogg');
  mySound = loadSound("popsound.mp3");
  ss = loadSound("ak.mp3");


  // bl=loadImage("bal.jpg");
  bls[0] = loadImage("bal.png");
  bls[1] = loadImage("bal1.png");
  bls[2] = loadImage("bal2.png");
  bls[3] = loadImage("bal3.png");
  bg = loadImage("sky.jpg");
  gn = loadImage("gun.png");
  blt = loadImage("bullet.png");

}




function setup() {
  createCanvas(800, 600);
  gun = new Gun(0, height / 2, 400 / 3, 400 / 3);

  for (let i = 0; i < 100; i++) {
    bcol = random(bls);
    bullets[i] = new Bullet(400 / 3, gun.y);
    balloons[i] = new Balloon(random(400 / 3, 780), random(1000, 3000), random(40, 60), random(255), random(255), random(255), bcol);
  }
  score = 0;
  rand = random(10, 30);


}



function draw() {
  background(bg);
  textSize(40);
  text("Score :", 10, 50);
  text(score, 140, 50);
  text("Bullets:",500,50);
  text(bulletcount,640,50);
  
  gun.show();
  for (let i = 0; i < bullets.length; i++) {

    bullets[i].show();
    bullets[i].move();
    for (let j = 0; j < balloons.length; j++) {
      if (bullets[i].hits(balloons[j])) {
        balloons[j].rem();
      }

    }
  }




  for (let i = 0; i < rand; i++) {
    balloons[i].show();
    balloons[i].update();
  }

}



function keyPressed() {

  if (key == " "&&bulletcount>0) {
    let bullet = new Bullet(gun.x + 400 / 3, gun.y);
    bullets.push(bullet);
    ss.setVolume(0.2);
    ss.play();
    bulletcount--;
  }
  if (keyCode === UP_ARROW && gun.y > 0) {
    gun.move(-40);
  } else if (keyCode === DOWN_ARROW && gun.y < 500) {
    gun.move(40);
  }

}