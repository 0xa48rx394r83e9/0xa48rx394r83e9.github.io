Crafty.c("Foreground", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.z = 2000,
        this.alpha = 1;
        this.image("assets/images/foreground.png", "repeat");
    },
    place: function (x,y,w,h) {
        // Add the width, height, and top left co-ordinates for the box/background
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        return this;
    }
})
