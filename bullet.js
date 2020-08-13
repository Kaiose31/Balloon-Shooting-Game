class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;

  }
  move() {

    this.x += 20;

  }
  show() {
    image(blt, this.x, this.y + 50, 20, 20);
  }

  hits(balloon) {
    let d = dist(this.x, this.y, balloon.x, balloon.y);
    if (d < balloon.r) {
      mySound.play(0, 1, 1, 1);
      score += 10;
      return true;

    } else {
      return false;
    }

  }


}