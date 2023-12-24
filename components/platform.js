Crafty.c("Platform", {
	init: function() {
        this.addComponent("2D, DOM, platform");
        this.hitbox = Crafty.e("Platform_Hitbox2");
        this.attach(this.hitbox);
		this.z = -15
    },
	place: function(x, y) {
		this.x = x;
        this.y = y;
		this.hitbox.x = this.x;
		this.hitbox.y = this.y + 6;
        return this;
	}
})

Crafty.c("Platform_Hitbox2", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 0,
            y : 0,
            w : 246,
            h : 10,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'platform'
            }
        });
    }
})

Crafty.c("Platform_Ramp_Right", {
	init: function() {
        this.addComponent("2D, DOM, platform_ramp_right");
        this.hitbox = Crafty.e("Platform_Ramp_Right_Hitbox");
        this.attach(this.hitbox);
        this.hitbox.rotation = -17;
		this.z = -10
    },
	place: function(x, y) {
		this.x = x;
        this.y = y;
		this.hitbox.x = this.x;
		this.hitbox.y = this.y + this.h - 77;
        return this;
	}
})

Crafty.c("Platform_Ramp_Right_Hitbox", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 0,
            y : 0,
            w : 340,
            h : 10,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'floor'
            }
        });
    }
})

Crafty.c("Platform_Ramp_Left", {
	init: function() {
        this.addComponent("2D, DOM, platform_ramp_left");
        this.hitbox = Crafty.e("Platform_Ramp_Left_Hitbox");
        this.attach(this.hitbox);
        this.hitbox.rotation = 17;
		this.z = -10
    },
	place: function(x, y) {
		this.x = x;
        this.y = y;
		this.hitbox.x = this.x;
		this.hitbox.y = this.y + this.h - 77;
        return this;
	}
})

Crafty.c("Platform_Ramp_Left_Hitbox", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 0,
            y : 0,
            w : 340,
            h : 10,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'floor'
            }
        });
    }
})
Crafty.c("Small_Ramp_Right", {
	init: function() {
        this.addComponent("2D, DOM, s_ramp_right");
		this.w = 164;
		this.h = 107;
        this.hitbox = Crafty.e("Small_Ramp_Right_Hitbox");
        this.attach(this.hitbox);
        this.hitbox.rotation = -17;
		this.z = -10
    },
	place: function(x, y) {
		this.x = x;
        this.y = y;
		this.hitbox.x = this.x;
		this.hitbox.y = this.y + this.h-38;
        return this;
	}
})

Crafty.c("Small_Ramp_Right_Hitbox", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 0,
            y : 0,
            w : 164,
            h : 10,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'floor'
            }
        });
    }
})

Crafty.c("Small_Ramp_Left", {
	init: function() {
        this.addComponent("2D, DOM, s_ramp_left");
		this.w = 164;
		this.h = 107;
        this.hitbox = Crafty.e("Small_Ramp_Left_Hitbox");
        this.attach(this.hitbox);
        this.hitbox.rotation = 17;
		this.z = -10
    },
	place: function(x, y) {
		this.x = x;
        this.y = y;
		this.hitbox.x = this.x;
		this.hitbox.y = this.y + this.h-38;
        return this;
	}
})

Crafty.c("Small_Ramp_Left_Hitbox", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 0,
            y : 0,
            w : 164,
            h : 10,
            z :2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'floor'
            }
        });
    }
})
