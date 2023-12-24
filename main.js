var GAME_SCREEN_WIDTH = 900;
var GAME_SCREEN_HEIGHT = 600;
var CURRENT_LEVEL = 0;
var numberOfResets = 0;

Crafty.Matter.init({
	// debug : true,
	gravity : {
	  x : 0,
	  y : 0.098
	}
});



Crafty.init(GAME_SCREEN_WIDTH,GAME_SCREEN_HEIGHT, document.getElementById('game'));
Crafty.background('rgb(229,242,249)');
Crafty.scene("Loading");
