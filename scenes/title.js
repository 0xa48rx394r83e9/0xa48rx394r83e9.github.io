Crafty.defineScene("Title", function() {
// To have a background, play button, set-up functionality, music/mute once implemented
    var gameStartBackground = Crafty.e("StartBackground");
    gameStartBackground.bind('Click', function() {
        if (Crafty.audio.isPlaying("bgAudio") == false && audioController.muted == false) {
            console.log(audioController);
            audioController.playTrack("bgAudio", -1, 0.25);
        }
    })
    var playGameButton = Crafty.e("2D, DOM, Image, Mouse, play_button")
        .attr({
            x: GAME_SCREEN_WIDTH/2-65,
            y: GAME_SCREEN_HEIGHT/2+15,
            w: 141,
            h: 51
        })
        .bind('Click', function(MouseEvent){
                if (Crafty.audio.isPlaying("bgAudio") == false && audioController.muted == false) {
                    audioController.playTrack("bgAudio", -1, 0.25);
                }
                Crafty.scene('Game');
        });

    var title = Crafty.e("2D, DOM, title")
        .attr({x: 200, y: 0});

    var title = Crafty.e("CreditsText")
        .text("Game Dev by Joseph Paulmer")
        .attr({x: 350, y: GAME_SCREEN_HEIGHT-37});

    var muteMusic = Crafty.e("2D, Color, Mouse, DOM, mute_button");
    muteMusic.attr({x: 30, y: 30, w: 38, h:42, vx:5});
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

	var help_button = Crafty.e("2D, Color, Mouse, DOM, help_button");
    help_button.attr({x: GAME_SCREEN_WIDTH-68, y: 30, w: 50, h:50, vx:5});
    help_button.bind('Click', function(MouseEvent){
    	togglePopup()
    });
});

function togglePopup() {
	var overlay = document.getElementById("overlay");
	overlay.style.display = overlay.style.display === "none" ? "flex" : "none";
}

Crafty.c("StartBackground", {
    init: function () {
        this.requires('2D, DOM, Mouse, title_screen');
        this.attr({x: 0, y: 0, w: 900, h: 600});
        this.vx -= 1;
    }
});
