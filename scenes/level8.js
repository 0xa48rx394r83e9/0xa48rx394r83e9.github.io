Crafty.defineScene("Level8", function() {

    // Create level information basics //
    var level_details = {x:0,y:-200,w:2000,h:2000}
    var background = Crafty.e("Background").place(level_details.x,level_details.y,level_details.w,level_details.h);
    background.set_boundaries();
    var next_level_loading = false;
    var next_level_door = Crafty.e("Door").place(70,1350, true); //Give the door a location (the y parameters are set cleanly for the floor here)
    Crafty.bind("NextLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            setTimeout(function () {
                Crafty.scene("EndScreen");
            }, 500);
        }
    });
    Crafty.bind("ResetLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            numberOfResets += 1;
            Crafty.scene("Level8");
        }
    });

    // Object and obstacle placements //
    var platform1 = Crafty.e("Platform").place(80,300);
    var tunnel1 = Crafty.e("Tunnel").place(330,300);
    var ramp1 = Crafty.e("Small_Ramp_Right").place(545,205);
    var ramp2 = Crafty.e("Platform_Ramp_Left").place(1050,145);
    ramp2.rotation = 10;
    var platform2 = Crafty.e("Platform").place(1380,285);
    var ladder1 = Crafty.e("Ladder").place(600,500);
    var ramp3 = Crafty.e("Platform_Ramp_Right").place(1200,700);
    var ramp4 = Crafty.e("Platform_Ramp_Left").place(300,700);
    var tunnel2 = Crafty.e("Tunnel").place(1200,1000);
    var platform3 = Crafty.e("Platform").place(950,1000);
    var ramp5 = Crafty.e("Small_Ramp_Right").place(780,970);
    var platform4 = Crafty.e("Platform").place(70,1350);
    var ramp6 = Crafty.e("Platform_Ramp_Left").place(650,1520);
    ramp6.rotation = 15;

    // Hamster and Wheel Code //
    var hamster = Crafty.e("HamsterWrapper");
    var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
    player.attach(wheel);
    player.x = 20;
    player.y = 130;
    makeCameraTrackEntity(player, 75);

    // Ball and Key Code //
	var ball = Crafty.e("Ball");
    var ball_controller = Crafty.e("Ball_Controller");
	ball.x = 480;
	ball.y = 40;
    var rock = Crafty.e("Rock").place(1415,1620);

})
