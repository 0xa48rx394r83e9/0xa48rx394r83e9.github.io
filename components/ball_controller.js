Crafty.c("Ball_Controller", {
    init: function() {
        this.addComponent("2D, DOM");
        this.bind("BallSmash", function (ball_pos) {
            new_key = Crafty.e("Key").place(ball_pos.x,ball_pos.y);
            Crafty("ball").destroy();
            return new_key;
        })
    }
})
