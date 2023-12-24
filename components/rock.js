Crafty.c("Rock", {
    init: function () {
        this.requires('2D, DOM, rock');
    },
    place: function (x,y) {
        this.x = x;
        this.y = y;
        this.w = 162;
        this.h = 109;
        this.z = 2;
        this.hitbox = Crafty.e("Rock_HitBox").place(x,y,this.w);
        this.attach(this.hitbox);
        this.hitbox2 = Crafty.e("Rock_HitBox").place(x+45,y-50,this.w-75);
        this.hitbox2.w = 80;
        this.attach(this.hitbox2);
        return this;
    }
}),
Crafty.c("Rock_HitBox", {
    init: function () {
        this.requires('2D, DOM');
    },
    place: function (x,y,w) {
        this.addComponent('Matter');
        this.attr({
            x : x,
            y : y+50,
            w : w,
            h : 59,
            z : 2,
            matter : {
                friction : 0,
                density : 2000,
                isStatic : true,
                label : 'rock'
            }
        });
        return this;
    }
})
