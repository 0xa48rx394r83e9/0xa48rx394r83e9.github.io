Crafty.c("Tunnel", {
	init: function() {
        this.addComponent("2D, DOM");
        this.h = 206 - 10;
        this.top_hitbox = Crafty.e("Tunnel_Top_Hitbox");
        this.attach(this.top_hitbox);
        this.bottom_hitbox = Crafty.e("Tunnel_Bottom_Hitbox");
        this.attach(this.bottom_hitbox);
        this.tunnel_front = Crafty.e("Tunnel_Front");
        this.attach(this.tunnel_front);
        this.tunnel_back = Crafty.e("Tunnel_Back");
        this.attach(this.tunnel_back);
    },
    place: function(x, y) {
        this.x = x;
        this.y = y - this.h;
        return this;
    }
});
Crafty.c("Tunnel_Top_Hitbox", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 20,
            y : 0,
            w : 190,
            h : 5,
            z : 2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'tunnel_top'
            }
        });
    }
});
Crafty.c("Tunnel_Bottom_Hitbox", {
	init: function() {
        this.addComponent("2D, DOM, Matter");
        this.attr({
            x : 20,
            y : 205,
            w : 190,
            h : 5,
            z : 2,
            matter : {
                friction : 0,
                density : 0.5,
                isStatic : true,
                label : 'tunnel_bottom'
            }
        });
    }
});
Crafty.c("Tunnel_Front", {
	init: function() {
        this.addComponent("2D, DOM, tunnel_front");
        this.z = 20;
		this.w = 205;
		this.h = 206;
        this.x = 20;
    }
})
Crafty.c("Tunnel_Back", {
	init: function() {
        this.addComponent("2D, DOM, tunnel_back");
        this.z = -50;
		this.w = 206;
		this.h = 206;
        this.x = 0;
    }
});
