Crafty.c("Key", {
	init: function() {
        this.addComponent("2D, DOM, key");
        this.h = 50;
        this.w = 50;
    },
    place: function(x,y) {
        this.x = x;
        this.y = y;
    }
})
