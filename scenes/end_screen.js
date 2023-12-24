Crafty.defineScene("EndScreen", function() {
// To have a background, play button, set-up functionality, music/mute once implemented
    var gameStartBackground = Crafty.e("EndBackground");

    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, play_again_button")
        .attr({
            x: GAME_SCREEN_WIDTH/2-65,
            y: GAME_SCREEN_HEIGHT/2-100,
            w: 141,
            h: 51
        })
        .bind('Click', function(MouseEvent){
                numberOfResets = 0;
                Crafty.scene('Game');
        });
    var score = Crafty.e("Score")
        .text("Number of Resets: " + numberOfResets)
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-300});
    var time_taken = Crafty.e("Score")
        .text("Time Elapsed: " + timer.gametime)
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-240});
		var time_taken = Crafty.e("Score")
        .text("Merry Christmas")
        .attr({x: 330, y: GAME_SCREEN_HEIGHT-180});

    var muteMusic = Crafty.e("2D, Color, Mouse, DOM, mute_button");
    muteMusic.attr({x: 30, y: 30, w: 38, h:42, vx:5});
    if (audioController.muted == true) {
        muteMusic.alpha = 0.2;
    }
    muteMusic.bind('Click', function(MouseEvent){
    	if (audioController.muted == false) {
    		audioController.muted = true;
    		this.alpha = 0.2;
    		audioController.pauseTrack("bgAudio", 0)
    	}
    	else {
    		audioController.muted = false;
    		this.alpha = 1;
    		audioController.playTrack("bgAudio", -1, 0.25)
    	}
    });
});

Crafty.c("EndBackground", {
    init: function () {
        this.requires('2D, DOM, Mouse, end_screen');
        this.attr({x: 0, y: 0, w: 900, h: 600});
        this.vx -= 1;
    }
});

Crafty.c("Score", {
	init: function() {
        this.requires('2D, DOM, Text')
        this.attr({w: 200, h: 100, x: -60, y: -35})
        this.z = 1000;
        // HashSet of Messages Received to only notify once.
        this.textAlign("center");
        // this.css('text-shadow', '2px 2px 5px white')
        this.textColor('#555');
        this.unselectable();
        this.alpha = 0.9;
        this.textFont({ size: '20px', weight: "bold" });
    }
})
