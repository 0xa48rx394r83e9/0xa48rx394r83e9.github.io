Crafty.c("Level_Controller", {
    init: function() {
        this.addComponent("2D, DOM");
        this.level = 1;
        this.total_levels = 1;
    },
    change_level: function() {
        if (this.level < this.total_levels) {
            this.level += 1;
            return this;
        }
    }
})
