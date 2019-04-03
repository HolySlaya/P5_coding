function jumper() {
        this.x = 50;
        this.y = 0;
        //The force of gravity
        this.gravity = 0.5;
        //the opposing force of gravity
        this.lift = -15;
        //velocity of the player
        this.velocity = 0;
        
        this.show = function(){
          fill(color('red'));
          rect(this.x,this.y,50,50);
        };
        
        this.up = function(){
          //function to jump
          this.velocity += this.lift;
        };
        
        this.update = function(){
          //gravity applied when not jumping
          this.velocity += this.gravity;
          //height changes due your velocity increasing
          this.y += this.velocity;
          //air resistance
          this.velocity *= 0.8;
          //jumper hits the floor
          if(this.y > h-50) {
            this.y = h-50;
            this.velocity = 0;
          }
          //jumper hits the ceiling
          if(this.y < 0) {
            this.y = 0;
            this.velocity = 0;
          }
          if(keyIsDown(16)){
            this.gravity += 5;
          }
          else {
            this.gravity = 0.5;
          }
        };
      }//object ends here