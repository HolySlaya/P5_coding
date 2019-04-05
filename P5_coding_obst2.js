  function obst2() {
    this.x = w;
    this.y = h/2;
    this.gravity = 1.5;
    this.velocity = 0;
    
    this.show = function() {
      fill(color('blue'));
      rect(this.x,this.y,50,100);
    };
    
    this.update = function() {
      this.velocity += this.gravity;
      this.x -= this.velocity;
      this.velocity *= 0.8;
      
      hit = collideRectRect(this.x,this.y,50,100,jumper.x,jumper.y,50,50);
      
        if (hit === true) {
          noLoop();
        }
      
      if (this.x < -50) {
        this.x = w+50;
        this.y = Math.floor(Math.random()*h);
        this.velocity = 0;
        this.gravity += 0.25;
      }
    };
  }//object ends here