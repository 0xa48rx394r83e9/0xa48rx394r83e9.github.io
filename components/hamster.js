Crafty.c("HamsterWrapper", {
    init: function() {
        this.addComponent("2D, DOM");
        this.facing = "right";
        this.animation_speed = 25; //stemp
        this.x = 0;
        this.y = 0;
        this.w = 160;
        this.h = 160;
        this.origin("center");
        this.hamster = Crafty.e("Hamster");
        this.attach(this.hamster)
        this.hamster.x = this.h/2 - this.hamster.w/2;
        this.hamster.y = 160 - this.hamster.h -12;
        this.bind("PlayerPosition", function (position) {
            this.x = position.x;
            this.y = position.y;
        })
        this.bind("PlayerVelocity", function(playerVelocity){
            var speed = playerVelocity.x;
            // Bound the variable of speed between -15 and 15.
            speed = speed >  15 ?  15 : speed;
            speed = speed < -15 ? -15 : speed;
            this.rotation = -3 * speed;
            if (speed < 1 && speed > -1) {
                this.hamster.pauseAnimation();
            }
            else {
                this.hamster.resumeAnimation();
            }

        })
    }
})


Crafty.c("Hamster", {
	init: function() {
        this.addComponent("2D, DOM, Image, hamster_right, Keyboard, Collision, SpriteAnimation");
        this.x = 0;
        this.y = 0;
		this.w = 88;
        this.animation_speed = 25;
		this.h = 59;
        this.z = 2;
        this.origin("center")
        this.setReelSpeed(this.animation_speed);
        this.bind('KeyDown', function(e) {
          if(e.key == Crafty.keys.LEFT_ARROW) {
            this.animate("facing_left", -1);
            this.facing = "left";
          } else if (e.key == Crafty.keys.RIGHT_ARROW) {
            this.animate("facing_right", -1);
            this.facing = "right";
          }
	  });
  },
  setReelSpeed: function (animation_speed) {
		this.reel("facing_right", animation_speed, [
			[1, 0], [1, 1], [1, 0], [1, 2]
		])
		this.reel("facing_left", animation_speed, [
			[0, 0], [0, 1], [0, 0], [0, 2]
		])
    }
})
