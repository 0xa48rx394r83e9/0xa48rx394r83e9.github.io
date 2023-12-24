Crafty.c("HayPiece", {
    init: function() {
        this.addComponent("2D, DOM, ground, Matter");
        this.attr({
            x: 0,
            y: 0,
            w: 50,
            h: 25,
            z: -2,
            matter: {
                friction : 0,
                density : 1,
                shape: 'circle'
            }
        })
    }
})


Crafty.c("HayFloor", {
	init: function() {
        this.addComponent("2D, DOM, Image");
        this.attr({
            x: 0,
            y: 0,
            w: 50000,
            h: 122,
            z: -2
        })
        this.hayMatter = Crafty.e("HayMatter");
        this.attach(this.hayMatter);
        this.hayMatter.y = 50;
        this.image("assets/images/ground.png", "repeat-x");
    }
})


Crafty.c("HayMatter", {
    init: function () {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x: 0,
            y: 0,
            w: 50000,
            h: 122,
            matter: {
                isStatic : true,
                label: "ground"
            }
        })
    }
})
