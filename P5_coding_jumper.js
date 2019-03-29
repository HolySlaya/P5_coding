function jumper() {
        this.x = 50;
        this.y = 0;
        //The force of gravity
        this.gravity = 0.5;
        //the opposing force of gravity
        this.lift = -10;
        //velocity of the player
        this.velocity = 0;
        
        this.show = function(){
          fill(color('red'));
          ellipse(this.x,this.y,50,50);
        }
        
        this.up = function(){
          //function to jump
          this.velocity += this.lift;
        }
        this.right = function() {
          this.x += 10;
        }
        this.left = function() {
          this.x += -10;
        }
        
        this.update = function(){
          //gravity applied when not jumping
          this.velocity += this.gravity;
          //height changes due your velocity increasing
          this.y += this.velocity;
          //air resistance
          this.velocity *= 0.8;
          //jumper hits the floor
          if(this.y > h) {
            this.y = h;
            this.velocity = 0;
          }
          //jumper hits the ceiling
          if(this.y < 0) {
            this.y = 0;
            this.velocity = 0;
          }
        }
        this.move = function() {
          
        if(keyIsDown = 39) {
          this.x += 10;
        }
        
        if(keyIsDown = 37) {
          this.x += -10;
        }
        }
      }//object ends here