Crafty.c("Background", {
    init: function () {
        this.requires('2D, DOM, Image');
        this.z = -100,
        this.alpha = 0.7;
        this.image("assets/images/new_background.png", "repeat");
    },
    place: function (x,y,w,h) {
        // Add the width, height, and top left co-ordinates for the box/background
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        // var foreground = Crafty.e("Foreground").place(x,y,w,h);
        return this;
    },
    set_boundaries: function() {
        var cage_top = Crafty.e("Cage_Top");
        this.attach(cage_top);
        cage_top.addComponent('Matter');
        cage_top.attr({
            x: 0,
            y: 0,
            z: 2,
            w: this.w, //width of background
            h: 10,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'cage_top'
            }
        })
        var cage_right = Crafty.e("Cage_Right");
        this.attach(cage_right);
        cage_right.addComponent('Matter');
        cage_right.attr({
            x: this.w,  //width of background
            y: 0,
            z: 2,
            w: 10,
            h: this.h,  //height of background
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'cage_right'
            }
        })
        var cage_left = Crafty.e("Cage_Left");
        this.attach(cage_left);
        cage_left.h = this.h;
        cage_left.addComponent('Matter');
        cage_left.attr({
            x: 0,
            y: 0,
            z: 2,
            w: 10,
            h: this.h,  //height of background
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'cage_left'
            }
        })
        cage_left.x = this.w;
        cage_left.x = this.x;
        cage_left.y = this.y;
        cage_right.x = this.x + this.w;
        cage_right.y = this.y;
        cage_top.x = this.x;
        cage_top.y = this.y;

        var hay = Crafty.e("HayFloor");
        hay.x = this.x;
        hay.w = this.w;
        hay.y = this.y + this.h - hay.h;
        return this;
    }
});

Crafty.c("Cage_Top", {
    init: function () {
        this.addComponent('2D, DOM, Color')
        this.color('rgb(234,246,252)');
    }
});

Crafty.c("Cage_Left", {
    init: function () {
        this.addComponent('2D, DOM, Color')
        this.color('rgb(234,246,252)');
    }
});

Crafty.c("Cage_Right", {
    init: function () {
        this.addComponent('2D, DOM, Color')
        this.color('rgb(234,246,252)');
    }
});
