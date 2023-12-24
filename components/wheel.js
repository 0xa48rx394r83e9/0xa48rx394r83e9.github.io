Crafty.c("Wheel", {
	init: function() {
        this.addComponent("2D, DOM, Keyboard, SpriteAnimation, wheel, AngularMotion");
        this.x = 0;
        this.y = 0;
		this.w = 160;
		this.h = 160;
        this.origin("center")
        this.bind('PlayerVelocity', function(e) {
    		this.vrotation = e.x * 10;
    	});
    }
})
