Crafty.c("Platform_Hitbox", {
	// I believe obselete now
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 0,
            y : 0,
            w : 349,
            h : 61,
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
