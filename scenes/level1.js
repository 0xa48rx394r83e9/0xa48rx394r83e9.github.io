Crafty.defineScene("Level1", function() {
    // Create level information basics //
    var level_details = {x:0,y:0,w:1600,h:700}
    var background = Crafty.e("Background").place(level_details.x,level_details.y,level_details.w,level_details.h);
    background.set_boundaries();
    var next_level_loading = false;
    var next_level_door = Crafty.e("Door").place(1000,level_details.y+level_details.h-100, false); //Give the door a location (the y parameters are set cleanly for the floor here)
    Crafty.bind("NextLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            setTimeout(function () {
                Crafty.scene("Level2");
            }, 500);
        }
    });
    Crafty.bind("ResetLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            numberOfResets += 1;
            Crafty.scene("Level1");
        }
    });

    // Object and obstacle placements //

    // Hamster and Wheel Code //
    var hamster = Crafty.e("HamsterWrapper");
    var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
    player.attach(wheel);
	player.x = 300;
	player.y = 550;
    makeCameraTrackEntity(player, 75);

    // Ball and Key Code //

})
