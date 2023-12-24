Crafty.c("House", {
	init: function() {
        this.addComponent("2D, DOM, house");
        this.attr({
            x: 0,
            y: 0,
            w: 322,
            h: 247,
            z: -2
        })
        this.houseMatterLeft = Crafty.e("HouseMatterLeft");
        this.attach(this.houseMatterLeft);
        this.houseMatterLeft.x = this.w/4 - this.houseMatterLeft.w/2
        this.houseMatterLeft.y = this.h/4;
        this.houseMatterRight = Crafty.e("HouseMatterRight");
        this.attach(this.houseMatterRight);
        this.houseMatterLeft.x = this.w/4*3 - this.houseMatterLeft.w/2
        this.houseMatterRight.y = this.h/4;
    },
    place: function(x, y) {
        this.x = x;
        this.y = y;
        // this.houseMatterLeft.x = this.x;
        // this.HouseMatterRight.y = this.y;
        return this;
    }
})


Crafty.c("HouseMatterLeft", {
    init: function () {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            rotation: 40,
            x: 0,
            y: 0,
            w: 200,
            h: 20,
            matter: {
                isStatic : true
            }
        })
    }
})

Crafty.c("HouseMatterRight", {
    init: function () {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            rotation: -39,
            x: 0,
            y: 0,
            w: 200,
            h: 20,
            matter: {
                isStatic : true
            }
        })
    }
})