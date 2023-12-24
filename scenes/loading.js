var audioController = Crafty.e("AudioController");
audioController.loadTrack("bgAudio", -1, 0.25);
audioController.loadTrack("glass", -1, 0.25);
audioController.loadTrack("unlock", -1, 0.25);

Crafty.defineScene("Loading", function() {
    Crafty.e("2D, DOM, Text")
          .attr({ w: 200, h: 50, x: 300, y: 280 })
          .text("Loading...")
          .textFont({ size: '20px', weight: 'bold' })
          .textAlign("center")
          .textColor("#111");

  	Crafty.load(gameAssets, function(){
       setTimeout(function () {
         Crafty.scene('Title');
       }, 1000);
    },  function () {
      console.log("Crafty Load Issue");
    },  function (e) {
      console.log("Crafty Load Error", e);
    });
  });
