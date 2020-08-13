class Gun {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
  }
  move(sp) {
    this.y=this.y+sp;

  }

  show() {
    image(gn, this.x, this.y, this.w, this.h);
  }


}