Crafty.c("Player", {
	init: function() {
		this.direction_force = 0
		this.force_level_x = 0
		this.holding_key = false; //holding down a keyboard key
		this.has_key = false; // has a key for the door
        this.addComponent("2D, DOM, Color, Keyboard, Matter, Collision");
        this.attr({
            x : 0,
            y : 0,
            w : 160,
            h : 160,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                shape: 'circle',
                label : 'player'
            }
        });
        this.bind("Move", function (location) {
            Crafty.trigger("PlayerVelocity", this._body.velocity);
        	Crafty.trigger("PlayerPosition", {x:this.x, y:this.y});
        })
        this.bind('KeyDown', function(e) {
		    if(e.key == Crafty.keys.LEFT_ARROW) {
				this.holding_key = true;
				this.direction_force = 10
				this.force_level_x = -5
		    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
				this.directional_force = -10
				this.force_level_x = 5
				this.holding_key = true;
			} else if (e.key == Crafty.keys.SPACE) {
				Crafty.trigger("ResetLevel");
			}
    	});
		this.bind('KeyUp', function(e) {
			if(e.key == Crafty.keys.LEFT_ARROW || e.key == Crafty.keys.RIGHT_ARROW) {
				this.holding_key = false;
			}
		});
        this.bind('EnterFrame', function(e) {
        	if(typeof this._body === 'undefined') return;
			if (this.holding_key == true) {
				Matter.Body.applyForce(this._body, {x: this.x+this.direction_force, y: this.y}, {x: this.force_level_x, y: 0});
			}

        });
		this.onHit("Lock", function(pick_lock) {
			if (this.has_key == true) {
				if (audioController.muted == false) {
					audioController.playTrack("unlock", 1, 1);
				}
				pick_lock[0].obj.destroy();
				Crafty.trigger("UnlockDoor");
			}
		});
		this.onHit('Key', function(get_key) {
			get_key[0].obj.destroy();
			this.has_key = true;
        });
		this.onHit("Door", function(hit_door) {
			if (hit_door[0].obj.isLocked == false) {
				Crafty.trigger("NextLevel");
			}
		});
    }
})
