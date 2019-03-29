  function obst() {
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
      
      if (this.x < -50) {
        this.x = w+50;
        this.y = Math.floor(Math.random()*h*10/9);
        this.velocity = 0;
      }
    };
  }
      