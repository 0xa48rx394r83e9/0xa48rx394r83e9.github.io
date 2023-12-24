Crafty.c("LadderBack", {
    init: function () {
        this.requires('2D, DOM, ladder_back');
        this.attr({
            x: 65,
            y: 10,
            w : Math.floor(815/2),
            h : Math.floor(115/2)
        })
    },
    place: function (x,y) {
        this.x = x;
        this.y = y;
        this.w = Math.floor(815/2);
        this.h = Math.floor(115/2);
        this.z = 2;
        return this;
    }
});

Crafty.c("Ladder", {
    init: function () {
        this.requires('2D, DOM, ladder');
        this.attr({
            x: 0,
            y: 0,
            w : Math.floor(1072/2),
            h : Math.floor(115/2)
        })
        this.back = Crafty.e("LadderBack");
        this.attach(this.back);
        this.place(this.x,this.y)
    },
    place: function (x,y) {
        this.x = x;
        this.y = y;
        this.w = Math.floor(1072/2);
        this.h = Math.floor(115/2);
        this.z = 2;
        this.hitboxes = [];
        for (var i = 0; i < 6; i++) {
            var hitbox = Crafty.e("Ladder_HitBox");
            this.attach(hitbox);
            hitbox.place(x,y);
            hitbox.x = this.x + 90 * i + 28;
            this.hitboxes.push(hitbox);
        }
        return this;
    }
});

Crafty.c("Ladder_HitBox", {
    init: function () {
        this.requires('2D, DOM, Color');
        // this.color("red");
    },
    place: function (x,y) {
        this.addComponent('Matter');
        this.attr({
            x : x,
            y : y+25,
            w : 7,
            h : 7,
            z : 2,
            matter : {
                friction : 0,
                density : 2000,
                isStatic : true,
                shape: 'circle',
                label : 'ladder'
            }
        });
        return this;
    }
})

