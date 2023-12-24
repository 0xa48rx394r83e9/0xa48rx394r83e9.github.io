Crafty.defineScene("Level1", function() {

    // Create level information basics //
    var level_details = {x:0,y:-200,w:4000,h:1000}
    var background = Crafty.e("Background").place(level_details.x,level_details.y,level_details.w,level_details.h);
    background.set_boundaries();
    var next_level_loading = false;
    var next_level_door = Crafty.e("Door").place(1000,level_details.y+level_details.h-100, true); //Give the door a location (the y parameters are set cleanly for the floor here)
    Crafty.bind("NextLevel", function() {
        if (next_level_loading == false) {
            next_level_loading = true;
            setTimeout(function () {
                Crafty.scene("Level2");
            }, 500);
        }
    });
    //var level_controller = Crafty.e("Level_Controller");

    // Object and obstacle placements //
    var simp_pf1 = Crafty.e("Platform").place(400,300);
    var simp_pf1 = Crafty.e("Platform").place(650,300);
    var tunnel1 = Crafty.e("Tunnel").place(850,300);
    var simp_pf1 = Crafty.e("Platform").place(1020,300);
    var simp_pf1 = Crafty.e("Platform_Ramp_Right").place(1265,210);
    var simp_pf1 = Crafty.e("Platform").place(2000,170);
    var simp_pf1 = Crafty.e("Platform").place(2250,170);
    var simp_pf1 = Crafty.e("Tunnel").place(2500,170);
    var simp_pf1 = Crafty.e("Tunnel").place(2660,170);
    var simp_pf1 = Crafty.e("Platform_Ramp_Right").place(2910,170);
    var simp_pf1 = Crafty.e("Platform").place(2000,650);
    var simp_pf1 = Crafty.e("Platform").place(2250,550);
    var simp_pf1 = Crafty.e("Platform").place(2500,500);
    var simp_pf1 = Crafty.e("Platform").place(2750,500);
    var simp_pf1 = Crafty.e("Platform").place(3000,500);
    var house = Crafty.e("House").place(1500, 500);
    var rock = Crafty.e("Rock").place(300,650);

    // Hamster and Wheel Code //
    var hamster = Crafty.e("HamsterWrapper");
    hamster.x = 500;
    hamster.y = 100;
    var player = Crafty.e("Player");
	var wheel = Crafty.e("Wheel");
    player.attach(wheel);
	player.x = hamster.x;
	player.y = hamster.y;
    makeCameraTrackEntity(player, 75);

    // Ball and Key Code //
	var ball = Crafty.e("Ball");
    var ball_controller = Crafty.e("Ball_Controller");
	ball.x = 550;
	ball.y = 240;
})
