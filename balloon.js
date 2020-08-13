class Balloon {
  constructor(x, y, r, col1, col2, col3, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.col1 = col1;
    this.col2 = col2;
    this.col3 = col3;
    this.im = img;
  }

  update() {
    this.y += random(-6, -9);

  }


  rem() {
    this.x = 5000;
    this.y = 0;


  }



  // clicked() {
  //   let d = dist(mouseX, mouseY, this.x,this.y)
  //   if (d <= this.r) {
  //     mySound.setVolume(1);
  //     mySound.play(0,1,1,1);
  //     score+=10;
  //    this.x=10000;
  //     this.y=0;
  //   }
  // }

  show() {


    image(this.im, this.x, this.y, this.r, this.r);
    // noStroke();
    // fill(this.col1,this.col2,this.col3);
    // circle(this.x,this.y,this.r);
  }
}