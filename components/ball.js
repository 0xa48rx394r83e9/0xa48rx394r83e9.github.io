Crafty.c("Ball", {
	init: function() {
        this.addComponent("2D, DOM, ball, Matter");
        this.attr({
            x: 0,
            y: 0,
            w: 50,
            h: 50,
            matter: {
                density: 0.0005,
                shape : "circle",
                label: "ball"
            }
        })
        this.bind("CollisionStart", function (e) {
            if(e.target.matter.label === "ground") {
                this.removeComponent("Matter");
                Crafty.trigger("KeyFellIn")
            }
			if(e.target.matter.label === "rock") {
				if (audioController.muted == false) {
					audioController.playTrack("glass", 1, 1);
				}
                Crafty.trigger("BallSmash", {x: this.x, y: this.y});
				this.remove = true;
				this.removeComponent("Matter, ball");
            }
        })
    }
})
